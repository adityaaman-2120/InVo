import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BackupRestoreScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBackup = () => Alert.alert(t('backupRestore', 'backupData'), t('backupRestore', 'backupSoon'));
  const handleRestore = () => Alert.alert(t('backupRestore', 'restoreData'), t('backupRestore', 'restoreSoon'));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('backupRestore', 'backupRestore')}</ThemedText>
        </View>

        <TouchableOpacity onPress={handleBackup} style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 20, marginBottom: 16, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#3B82F620', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>
            <IconSymbol name="icloud.and.arrow.up" size={24} color="#3B82F6" />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{t('backupRestore', 'backupData')}</ThemedText>
            <ThemedText style={{ fontSize: 13, color: '#9BA1A6', marginTop: 2 }}>{t('backupRestore', 'backupSub')}</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestore} style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 20, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#22C55E20', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>
            <IconSymbol name="icloud.and.arrow.down" size={24} color="#22C55E" />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{t('backupRestore', 'restoreData')}</ThemedText>
            <ThemedText style={{ fontSize: 13, color: '#9BA1A6', marginTop: 2 }}>{t('backupRestore', 'restoreSub')}</ThemedText>
          </View>
        </TouchableOpacity>

        <ThemedText style={{ color: '#6B7280', fontSize: 12, textAlign: 'center', marginTop: 40 }}>{t('backupRestore', 'dataStoredLocally')}</ThemedText>
      </View>
    </SafeAreaView>
  );
}
