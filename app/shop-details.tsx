import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ShopDetailsScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [shopLogo, setShopLogo] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [qrImage, setQrImage] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const saved = await AsyncStorage.getItem('@invo_settings');
      if (saved) {
        const s = JSON.parse(saved);
        setShopLogo(s.shopLogo || null);
        setBusinessName(s.businessName || '');
        setOwnerName(s.ownerName || '');
        setPhoneNo(s.phoneNo || '');
        setAddress(s.address || '');
        setGstNo(s.gstNo || '');
        setQrImage(s.qrPaymentImageUri || null);
      }
    } catch {}
  };

  const saveData = async () => {
    try {
      const saved = await AsyncStorage.getItem('@invo_settings');
      const s = saved ? JSON.parse(saved) : {};
      s.shopLogo = shopLogo;
      s.businessName = businessName;
      s.ownerName = ownerName;
      s.phoneNo = phoneNo;
      s.address = address;
      s.gstNo = gstNo;
      s.qrPaymentImageUri = qrImage;
      await AsyncStorage.setItem('@invo_settings', JSON.stringify(s));
      Alert.alert(t('shopDetails', 'saved'), t('shopDetails', 'shopDetailsUpdated'));
    } catch {}
  };

  const pickImage = async (setter: (uri: string) => void) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert(t('shared', 'permissionRequired')); return; }
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 0.8 });
    if (!result.canceled && result.assets?.[0]) setter(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('shopDetails', 'shopDetails')}</ThemedText>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Shop Logo */}
          <TouchableOpacity onPress={() => pickImage(setShopLogo)} style={{ alignItems: 'center', marginBottom: 24 }}>
            {shopLogo ? (
              <Image source={{ uri: shopLogo }} style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode="cover" />
            ) : (
              <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#1F1F1F', alignItems: 'center', justifyContent: 'center' }}>
                <IconSymbol name="building.2" size={40} color="#9BA1A6" />
              </View>
            )}
            <ThemedText style={{ color: '#9BA1A6', marginTop: 8, fontSize: 13 }}>{t('shopDetails', 'tapAddLogo')}</ThemedText>
          </TouchableOpacity>

          {/* Shop Name */}
          <ThemedText style={styles.label}>{t('shopDetails', 'shopName')}</ThemedText>
          <TextInput
            value={businessName}
            onChangeText={setBusinessName}
            style={styles.input}
            placeholder={t('shopDetails', 'enterShopName')}
            placeholderTextColor="#6B7280"
          />

          {/* Owner Name */}
          <ThemedText style={styles.label}>{t('shopDetails', 'ownerName')} <ThemedText style={styles.optional}>{t('shared', 'optional')}</ThemedText></ThemedText>
          <TextInput
            value={ownerName}
            onChangeText={setOwnerName}
            style={styles.input}
            placeholder={t('shopDetails', 'enterOwnerName')}
            placeholderTextColor="#6B7280"
          />

          {/* Phone No */}
          <ThemedText style={styles.label}>{t('shopDetails', 'phoneNo')} <ThemedText style={styles.optional}>{t('shared', 'optional')}</ThemedText></ThemedText>
          <TextInput
            value={phoneNo}
            onChangeText={setPhoneNo}
            style={styles.input}
            placeholder={t('shopDetails', 'enterPhone')}
            placeholderTextColor="#6B7280"
            keyboardType="phone-pad"
          />

          {/* Address */}
          <ThemedText style={styles.label}>{t('shopDetails', 'address')} <ThemedText style={styles.optional}>{t('shared', 'optional')}</ThemedText></ThemedText>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={[styles.input, { minHeight: 80 }]}
            placeholder={t('shopDetails', 'enterAddress')}
            placeholderTextColor="#6B7280"
            multiline
          />

          {/* GST No */}
          <ThemedText style={styles.label}>{t('shopDetails', 'gstNo')} <ThemedText style={styles.optional}>{t('shared', 'optional')}</ThemedText></ThemedText>
          <TextInput
            value={gstNo}
            onChangeText={setGstNo}
            style={styles.input}
            placeholder={t('shopDetails', 'enterGst')}
            placeholderTextColor="#6B7280"
          />

          {/* Payment QR */}
          <ThemedText style={styles.label}>{t('shopDetails', 'paymentQr')}</ThemedText>
          <TouchableOpacity onPress={() => pickImage(setQrImage)} style={{ backgroundColor: '#1F1F1F', borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 24 }}>
            {qrImage ? (
              <Image source={{ uri: qrImage }} style={{ width: 200, height: 200, borderRadius: 12 }} resizeMode="contain" />
            ) : (
              <View style={{ alignItems: 'center', padding: 20 }}>
                <IconSymbol name="qrcode" size={48} color="#9BA1A6" />
                <ThemedText style={{ color: '#9BA1A6', marginTop: 8 }}>{t('shopDetails', 'tapAddQr')}</ThemedText>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={saveData} style={{ backgroundColor: '#3B82F6', borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 32 }}>
            <ThemedText style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16 }}>{t('shopDetails', 'updateChanges')}</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    color: '#9BA1A6',
    marginBottom: 6,
    fontWeight: '600',
  },
  optional: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '400',
  },
  input: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
});
