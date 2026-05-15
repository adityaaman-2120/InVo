import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Customer = { id: string; name: string; phone: string; addedDate: string };

const CUSTOMERS_KEY = '@invo_customers';

export default function CustomersScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  React.useEffect(() => { loadCustomers(); }, []);

  const loadCustomers = async () => {
    try {
      const data = await AsyncStorage.getItem(CUSTOMERS_KEY);
      if (data) setCustomers(JSON.parse(data));
    } catch {}
  };

  const saveCustomers = async (list: Customer[]) => {
    await AsyncStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
    setCustomers(list);
  };

  const addCustomer = async () => {
    if (!name.trim() || !phone.trim()) { Alert.alert(t('shared', 'validation'), t('customers', 'namePhoneRequired')); return; }
    const newCustomer: Customer = { id: Date.now().toString(), name: name.trim(), phone: phone.trim(), addedDate: new Date().toISOString() };
    await saveCustomers([newCustomer, ...customers]);
    setName(''); setPhone(''); setIsAddOpen(false);
  };

  const deleteCustomer = (id: string) => {
    Alert.alert(t('shared', 'delete'), t('customers', 'removeCustomer'), [
      { text: t('shared', 'cancel'), style: 'cancel' },
      { text: t('shared', 'delete'), style: 'destructive', onPress: async () => { await saveCustomers(customers.filter(c => c.id !== id)); } },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('customers', 'customers')}</ThemedText>
          </View>
          <TouchableOpacity onPress={() => setIsAddOpen(true)} style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#3B82F6', alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="plus" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {isAddOpen && (
          <View style={{ backgroundColor: '#1F1F1F', borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <TextInput value={name} onChangeText={setName} placeholder={t('customers', 'customerName')} placeholderTextColor="#6B7280" style={styles.input} />
            <TextInput value={phone} onChangeText={setPhone} placeholder={t('customers', 'phoneNumber')} placeholderTextColor="#6B7280" style={[styles.input, { marginTop: 8 }]} keyboardType="phone-pad" />
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
              <TouchableOpacity onPress={() => setIsAddOpen(false)} style={{ flex: 1, backgroundColor: '#2A2A2A', borderRadius: 10, padding: 12, alignItems: 'center' }}>
                <ThemedText>{t('shared', 'cancel')}</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={addCustomer} style={{ flex: 1, backgroundColor: '#3B82F6', borderRadius: 10, padding: 12, alignItems: 'center' }}>
                <ThemedText style={{ color: '#FFFFFF', fontWeight: '700' }}>{t('shared', 'save')}</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <FlatList
          data={customers}
          keyExtractor={c => c.id}
          renderItem={({ item }) => (
            <TouchableOpacity onLongPress={() => deleteCustomer(item.id)} style={{ backgroundColor: '#1F1F1F', borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#3B82F620', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <IconSymbol name="person.fill" size={22} color="#3B82F6" />
              </View>
              <View style={{ flex: 1 }}>
                <ThemedText style={{ fontWeight: '700', fontSize: 16 }}>{item.name}</ThemedText>
                <ThemedText style={{ fontSize: 13, color: '#9BA1A6' }}>{item.phone}</ThemedText>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', paddingVertical: 60 }}>
              <IconSymbol name="person.2" size={64} color="#9BA1A6" />
              <ThemedText style={{ color: '#9BA1A6', marginTop: 16, fontSize: 16 }}>{t('customers', 'noCustomers')}</ThemedText>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: { height: 44, borderRadius: 10, paddingHorizontal: 12, backgroundColor: '#2A2A2A', color: '#FFFFFF' },
});
