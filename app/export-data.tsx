import { ThemedText } from '@/components/themed-text';
import { IconSymbol, type IconSymbolName } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import { dbService } from '@/services/database';
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExportDataScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);

  const exportCSV = async (type: 'products' | 'sales' | 'suppliers') => {
    setIsExporting(true);
    try {
      let data: any[] = [];
      let headers = '';
      let rows: string[] = [];

      if (type === 'products') {
        data = await dbService.getProducts();
        headers = 'ID,Name,BuyingPrice,SellingPrice,Quantity,Unit,ExpiryDate,ImageUri,AddedDate';
        rows = data.map(p => `"${p.id}","${p.name}",${p.buyingPrice},${p.sellingPrice},${p.quantity},"${p.unit}","${p.expiryDate}","${p.imageUri || ''}","${p.addedDate}"`);
      } else if (type === 'sales') {
        data = await dbService.getSalesData();
        headers = 'ID,ProductID,QuantitySold,TotalAmount,SaleDate';
        rows = data.map(s => `"${s.id}","${s.productId}",${s.quantitySold},${s.totalAmount},"${s.saleDate}"`);
      } else {
        data = await dbService.getSuppliers();
        headers = 'ID,Name,PhoneNumber,WhatsAppNumber,Email,AddedDate';
        rows = data.map(s => `"${s.id}","${s.name}","${s.phoneNumber}","${s.whatsappNumber}","${s.email || ''}","${s.addedDate}"`);
      }

      const csv = [headers, ...rows].join('\n');
      const uri = FileSystem.documentDirectory + `${type}_export_${Date.now()}.csv`;
      await FileSystem.writeAsStringAsync(uri, csv);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, { mimeType: 'text/csv' });
      } else {
        Alert.alert(t('shared', 'success'), `File saved to: ${uri}`);
      }
    } catch (error) {
      console.error('Export failed:', error);
      Alert.alert(t('shared', 'error'), t('exportData', 'exportFailed'));
    } finally {
      setIsExporting(false);
    }
  };

  const ExportButton = ({ label, icon, onPress }: { label: string; icon: IconSymbolName; onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} disabled={isExporting} style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#3B82F620', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>
        <IconSymbol name={icon} size={24} color="#3B82F6" />
      </View>
      <View style={{ flex: 1 }}>
        <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{label}</ThemedText>
        <ThemedText style={{ fontSize: 13, color: '#9BA1A6', marginTop: 2 }}>{t('exportData', 'exportAsCsv')}</ThemedText>
      </View>
      {isExporting ? <ActivityIndicator size="small" color="#3B82F6" /> : <IconSymbol name="square.and.arrow.up" size={20} color="#3B82F6" />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('exportData', 'exportData')}</ThemedText>
        </View>

        <ExportButton label={t('exportData', 'exportProducts')} icon="shippingbox.fill" onPress={() => exportCSV('products')} />
        <ExportButton label={t('exportData', 'exportSales')} icon="chart.line.uptrend.xyaxis" onPress={() => exportCSV('sales')} />
        <ExportButton label={t('exportData', 'exportSuppliers')} icon="person.2" onPress={() => exportCSV('suppliers')} />
      </View>
    </SafeAreaView>
  );
}
