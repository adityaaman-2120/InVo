import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES_KEY = '@invo_categories';

export default function CategoriesScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [categories, setCategories] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const data = await AsyncStorage.getItem(CATEGORIES_KEY);
      if (data) setCategories(JSON.parse(data));
    } catch {}
  };

  const save = async (list: string[]) => {
    await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(list));
    setCategories(list);
  };

  const add = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    if (categories.includes(trimmed)) { Alert.alert(t('shared', 'error'), t('categories', 'categoryExists')); return; }
    save([trimmed, ...categories]);
    setInput('');
    setModalVisible(false);
  };

  const remove = (cat: string) => {
    Alert.alert(t('shared', 'delete'), t('categories', 'removeCat', cat), [
      { text: t('shared', 'cancel'), style: 'cancel' },
      { text: t('shared', 'delete'), style: 'destructive', onPress: () => save(categories.filter(c => c !== cat)) },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity onPress={() => router.back()} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <IconSymbol name="chevron.left" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <ThemedText type="subtitle" style={{ marginLeft: 8 }}>{t('categories', 'categories')}</ThemedText>
        </View>

        <FlatList
          data={categories}
          keyExtractor={c => c}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
          renderItem={({ item }) => (
            <TouchableOpacity onLongPress={() => remove(item)} style={{ backgroundColor: '#1F1F1F', borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <IconSymbol name="square.grid.2x2" size={20} color="#3B82F6" />
                <ThemedText style={{ marginLeft: 12, fontSize: 16, fontWeight: '600' }}>{item}</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={14} color="#9BA1A6" />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', paddingVertical: 60 }}>
              <IconSymbol name="square.grid.2x2" size={64} color="#9BA1A6" />
              <ThemedText style={{ color: '#9BA1A6', marginTop: 16 }}>{t('categories', 'noCategories')}</ThemedText>
            </View>
          }
        />

        {/* FAB */}
        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)} activeOpacity={0.8}>
          <IconSymbol name="plus" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#00000080' }} activeOpacity={1} onPress={() => setModalVisible(false)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 }}>
              <TouchableOpacity activeOpacity={1} onPress={() => {}} style={styles.modalContent}>
                <ThemedText style={styles.modalTitle}>{t('categories', 'addCategory')}</ThemedText>
                <TextInput
                  value={input}
                  onChangeText={setInput}
                  placeholder={t('categories', 'addCategory')}
                  placeholderTextColor="#6B7280"
                  style={styles.modalInput}
                  autoFocus
                  onSubmitEditing={add}
                />
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 16 }}>
                  <TouchableOpacity onPress={() => setModalVisible(false)} style={{ flex: 1, backgroundColor: '#2A2A2A', borderRadius: 10, padding: 14, alignItems: 'center' }}>
                    <ThemedText>{t('shared', 'cancel')}</ThemedText>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={add} style={{ flex: 1, backgroundColor: '#3B82F6', borderRadius: 10, padding: 14, alignItems: 'center' }}>
                    <ThemedText style={{ color: '#FFFFFF', fontWeight: '700' }}>{t('shared', 'save')}</ThemedText>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 50,
  },
  modalContent: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 14,
    color: '#FFFFFF',
    fontSize: 16,
  },
});
