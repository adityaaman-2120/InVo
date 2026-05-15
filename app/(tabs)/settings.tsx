import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { weeklyReportService } from '@/services/weekly-report';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeableScreen } from '@/components/swipeable-screen';

type SettingsData = {
  profileName: string;
  businessName: string;
  shopLogo?: string | null;
  isDarkMode: boolean;
  autoSync: boolean;
  profileImageUri?: string | null;
  qrPaymentImageUri?: string | null;
  currency: string;
  language: string;
  notificationsEnabled: boolean;
  biometryLock: boolean;
};

export default function SettingsScreen() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [settings, setSettings] = useState<SettingsData>({
    profileName: '',
    businessName: 'My Shop',
    shopLogo: null,
    isDarkMode: true,
    autoSync: false,
    profileImageUri: null,
    qrPaymentImageUri: null,
    currency: 'INR (₹)',
    language: 'English',
    notificationsEnabled: true,
    biometryLock: false,
  });

  useFocusEffect(
    useCallback(() => {
      loadSettings();
    }, [])
  );

  const loadSettings = async () => {
    try {
      const saved = await AsyncStorage.getItem('@invo_settings');
      if (saved) {
        setSettings(prev => ({ ...prev, ...JSON.parse(saved) }));
      }
    } catch (e) {
      console.warn('Failed to load settings', e);
    }
  };

  const saveSettings = async (newSettings: SettingsData) => {
    try {
      setSettings(newSettings);
      await AsyncStorage.setItem('@invo_settings', JSON.stringify(newSettings));
    } catch (e) {
      console.warn('Failed to save settings:', e);
    }
  };

  const updateSetting = useCallback(<K extends keyof SettingsData>(key: K, value: SettingsData[K]) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
  }, [settings]);

  const handleGenerateReport = useCallback(async () => {
    setIsGeneratingReport(true);
    try {
      await weeklyReportService.generateAndDownloadReport();
    } catch (error) {
      console.error('Failed to generate report:', error);
    } finally {
      setIsGeneratingReport(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    Alert.alert(
      t('settings', 'logOut'),
      t('settings', 'logoutMsg'),
      [
        { text: t('shared', 'cancel'), style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.multiRemove([
              '@invo_settings', '@onboarding_complete', '@invo_has_launched',
              '@cart_items', '@daily_sales_data', '@inventory_ignored_ids',
            ]);
            const keys = await AsyncStorage.getAllKeys();
            const draftKeys = keys.filter(k => k.startsWith('@edit_draft_'));
            if (draftKeys.length > 0) await AsyncStorage.multiRemove(draftKeys);
            router.replace('/onboarding');
          }
        }
      ]
    );
  }, [router]);

  const bg = Colors.dark.background;

  const SettingCard = ({ icon, label, onPress, right }: { icon: React.ReactNode; label: string; onPress?: () => void; right?: React.ReactNode }) => (
    <TouchableOpacity style={styles.settingCardWithSpacing} activeOpacity={onPress ? 0.7 : 1} onPress={onPress}>
      <View style={styles.settingRow}>
        <View style={styles.settingLeft}>
          {icon}
          <ThemedText style={styles.settingLabel}>{label}</ThemedText>
        </View>
        {right || (onPress && <IconSymbol name="chevron.right" size={16} color="#9BA1A6" />)}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <SwipeableScreen>
        <View style={styles.container}>
          <View style={styles.header}>
            <ThemedText type="title">{t('settings', 'settings')}</ThemedText>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Shop Info Card */}
            <TouchableOpacity onPress={() => router.push('/shop-details')} style={styles.shopCard} activeOpacity={0.8}>
              {settings.shopLogo ? (
                <Image source={{ uri: settings.shopLogo }} style={styles.shopLogo} resizeMode="cover" />
              ) : (
                <View style={styles.shopLogoPlaceholder}>
                  <IconSymbol name="building.2" size={32} color="#9BA1A6" />
                </View>
              )}
              <ThemedText style={styles.shopName}>{settings.businessName || 'My Shop'}</ThemedText>
            </TouchableOpacity>

            {/* BUSINESS */}
            <ThemedText style={styles.headingLabel}>{t('settings', 'business')}</ThemedText>

            <SettingCard
              icon={<IconSymbol name="building.2" size={20} color="#FFFFFF" />}
              label={t('settings', 'shopDetails')}
              onPress={() => router.push('/shop-details')}
            />
            <SettingCard
              icon={<IconSymbol name="person.2" size={20} color="#FFFFFF" />}
              label={t('settings', 'customers')}
              onPress={() => router.push('/customers')}
            />
            <SettingCard
              icon={<IconSymbol name="folder" size={20} color="#FFFFFF" />}
              label={t('settings', 'categories')}
              onPress={() => router.push('/categories')}
            />
            <SettingCard
              icon={<IconSymbol name="chart.bar" size={20} color="#FFFFFF" />}
              label={t('settings', 'reportAnalytics')}
              onPress={() => router.push('/weekly-report')}
            />
            <SettingCard
              icon={<IconSymbol name="arrow.triangle.2.circlepath" size={20} color="#FFFFFF" />}
              label={t('settings', 'backupRestore')}
              onPress={() => router.push('/backup-restore')}
            />
            <SettingCard
              icon={<IconSymbol name="square.and.arrow.up" size={20} color="#FFFFFF" />}
              label={t('settings', 'exportData')}
              onPress={() => router.push('/export-data')}
            />

            {/* APP SETTINGS */}
            <ThemedText style={styles.headingLabel}>{t('settings', 'appSettings')}</ThemedText>

            <SettingCard
              icon={<IconSymbol name="dollarsign" size={20} color="#FFFFFF" />}
              label={t('settings', 'currency')}
              onPress={() => {
                const options = ['INR (₹)', 'USD ($)', 'EUR (€)', 'GBP (£)'];
                const currentIndex = options.indexOf(settings.currency);
                const nextIndex = (currentIndex + 1) % options.length;
                updateSetting('currency', options[nextIndex]);
                Alert.alert(t('settings', 'currency'), t('settings', 'currencyChanged', options[nextIndex]));
              }}
              right={<ThemedText style={styles.settingValue}>{settings.currency}</ThemedText>}
            />
            <SettingCard
              icon={<IconSymbol name="globe" size={20} color="#FFFFFF" />}
              label={t('settings', 'language')}
              onPress={() => setLanguageModalVisible(true)}
              right={<ThemedText style={styles.settingValue}>{language}</ThemedText>}
            />
            <SettingCard
              icon={<IconSymbol name="paintpalette" size={20} color="#FFFFFF" />}
              label={t('settings', 'theme')}
              right={<ThemedText style={styles.settingValue}>{t('settings', 'dark')}</ThemedText>}
            />
            <SettingCard
              icon={<IconSymbol name="bell" size={20} color="#FFFFFF" />}
              label={t('settings', 'notifications')}
              right={
                <Switch
                  value={settings.notificationsEnabled}
                  onValueChange={(v) => updateSetting('notificationsEnabled', v)}
                  trackColor={{ false: '#3A3A3A', true: '#3B82F6' }}
                  thumbColor="#FFFFFF"
                />
              }
            />
            <SettingCard
              icon={<IconSymbol name="lock" size={20} color="#FFFFFF" />}
              label={t('settings', 'biometryLock')}
              right={
                <Switch
                  value={settings.biometryLock}
                  onValueChange={async (v) => {
                    if (v) {
                      const has = await LocalAuthentication.hasHardwareAsync();
                      if (!has) { Alert.alert(t('shared', 'error'), t('lockScreen', 'notAvailable')); return; }
                      const enrolled = await LocalAuthentication.isEnrolledAsync();
                      if (!enrolled) { Alert.alert(t('shared', 'error'), t('lockScreen', 'notSetUp')); return; }
                      const result = await LocalAuthentication.authenticateAsync({ promptMessage: t('lockScreen', 'verifyBiometry') });
                      if (result.success) {
                        updateSetting('biometryLock', true);
                      } else {
                        Alert.alert(t('shared', 'error'), t('lockScreen', 'verificationFailed'));
                      }
                    } else {
                      updateSetting('biometryLock', false);
                    }
                  }}
                  trackColor={{ false: '#3A3A3A', true: '#3B82F6' }}
                  thumbColor="#FFFFFF"
                />
              }
            />

            {/* ABOUT */}
            <ThemedText style={styles.headingLabel}>{t('settings', 'about')}</ThemedText>

            <SettingCard
              icon={<IconSymbol name="envelope" size={20} color="#FFFFFF" />}
              label={t('settings', 'contactSupport')}
              onPress={() => router.push('/contact-support')}
            />
            <SettingCard
              icon={<IconSymbol name="doc.text" size={20} color="#FFFFFF" />}
              label={t('settings', 'termsConditions')}
              onPress={() => router.push('/terms')}
            />
            <SettingCard
              icon={<IconSymbol name="hand.raised" size={20} color="#FFFFFF" />}
              label={t('settings', 'privacyPolicy')}
              onPress={() => router.push('/privacy-policy')}
            />
            <SettingCard
              icon={<IconSymbol name="info.circle" size={20} color="#FFFFFF" />}
              label={t('settings', 'appVersion')}
              right={<ThemedText style={styles.settingValue}>1.5.0</ThemedText>}
            />

            {/* Logout */}
            <View style={{ marginTop: 16, marginBottom: 32 }}>
              <SettingCard
                icon={<IconSymbol name="arrow.right.square" size={20} color="#EF4444" />}
                label={t('settings', 'logOut')}
                onPress={handleLogout}
              />
            </View>
          </ScrollView>
        </View>
      </SwipeableScreen>

      {/* Language Modal */}
      <Modal
        visible={languageModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setLanguageModalVisible(false)}>
          <View style={{ flex: 1 }} />
        </TouchableOpacity>
        <View style={styles.langModalSheet}>
          <View style={styles.langModalHandle} />
          <ThemedText style={styles.langModalTitle}>{t('settings', 'selectLanguage')}</ThemedText>
          <ThemedText style={styles.langModalSubtitle}>{t('settings', 'chooseLanguage')}</ThemedText>

          {[
            { label: 'English', native: 'English', value: 'English' as const },
            { label: 'Hindi', native: 'हिन्दी', value: 'Hindi' as const },
            { label: 'Bengali', native: 'বাংলা', value: 'Bengali' as const },
          ].map((lang) => (
            <TouchableOpacity
              key={lang.value}
              style={[styles.langOption, language === lang.value && styles.langOptionActive]}
              onPress={() => { setLanguage(lang.value); setLanguageModalVisible(false); }}
            >
              <ThemedText style={[styles.langLabel, language === lang.value && styles.langLabelActive]}>{lang.label}</ThemedText>
              <ThemedText style={[styles.langNative, language === lang.value && styles.langNativeActive]}>{lang.native}</ThemedText>
            </TouchableOpacity>
          ))}

          <ThemedText style={styles.langComingSoon}>{t('settings', 'moreLanguages')}</ThemedText>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 4 },
  header: { marginBottom: 16, marginTop: 8 },
  headingLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9BA1A6',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 4,
  },
  shopCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  shopLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#3B82F640',
  },
  shopLogoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3B82F640',
  },
  shopName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 14,
  },

  settingCardWithSpacing: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  settingLabel: { fontSize: 16, fontWeight: '600', marginLeft: 12, color: '#FFFFFF' },
  settingValue: { fontSize: 14, color: '#9BA1A6', fontWeight: '500' },

  langModalSheet: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 40,
  },
  langModalHandle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3A3A3A',
    alignSelf: 'center',
    marginBottom: 20,
  },
  langModalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  langModalSubtitle: {
    fontSize: 14,
    color: '#9BA1A6',
    marginBottom: 20,
  },
  langOption: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  langOptionActive: {
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  langLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  langNative: {
    fontSize: 13,
    color: '#9BA1A6',
    marginTop: 2,
  },
  langNativeActive: {
    color: '#3B82F6',
  },
  langLabelActive: {
    color: '#3B82F6',
  },
  langComingSoon: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
});
