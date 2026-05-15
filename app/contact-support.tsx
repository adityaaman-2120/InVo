import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactSupportScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('contactSupport', 'contactSupport')}</ThemedText>
        </View>

        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@invo.app')} style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#3B82F620', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>
            <IconSymbol name="envelope" size={24} color="#3B82F6" />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{t('contactSupport', 'emailUs')}</ThemedText>
            <ThemedText style={{ fontSize: 13, color: '#9BA1A6', marginTop: 2 }}>{t('contactSupport', 'supportEmail')}</ThemedText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#22C55E20', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>
            <IconSymbol name="message" size={24} color="#22C55E" />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{t('contactSupport', 'whatsapp')}</ThemedText>
            <ThemedText style={{ fontSize: 13, color: '#9BA1A6', marginTop: 2 }}>{t('contactSupport', 'supportPhone')}</ThemedText>
          </View>
        </TouchableOpacity>

        <ThemedText style={{ color: '#6B7280', fontSize: 13, textAlign: 'center', marginTop: 40, lineHeight: 20 }}>
          {t('contactSupport', 'responseTime')}
        </ThemedText>
      </View>
    </SafeAreaView>
  );
}
