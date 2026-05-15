import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeableScreen } from '@/components/swipeable-screen';

export default function OrdersScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <SwipeableScreen>
        <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
          <View style={styles.header}>
            <ThemedText type="title" style={{ fontSize: 28 }}>Orders</ThemedText>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push('/suppliers')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrap, { backgroundColor: '#3B82F620' }]}>
                <IconSymbol name="building.2" size={24} color="#3B82F6" />
              </View>
              <View style={{ flex: 1, marginLeft: 16 }}>
                <ThemedText style={styles.cardTitle}>Supplier Orders</ThemedText>
                <ThemedText style={styles.cardSub}>Create and manage supplier orders</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#9BA1A6" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => Alert.alert('Coming Soon', 'Sales history will be available in a future update.')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrap, { backgroundColor: '#22C55E20' }]}>
                <IconSymbol name="chart.line.uptrend.xyaxis" size={24} color="#22C55E" />
              </View>
              <View style={{ flex: 1, marginLeft: 16 }}>
                <ThemedText style={styles.cardTitle}>Order History</ThemedText>
                <ThemedText style={styles.cardSub}>View past orders and deliveries</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#9BA1A6" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push('/weekly-report')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconWrap, { backgroundColor: '#F59E0B20' }]}>
                <IconSymbol name="doc.text" size={24} color="#F59E0B" />
              </View>
              <View style={{ flex: 1, marginLeft: 16 }}>
                <ThemedText style={styles.cardTitle}>Reports</ThemedText>
                <ThemedText style={styles.cardSub}>Weekly sales and inventory reports</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#9BA1A6" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SwipeableScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardSub: {
    fontSize: 13,
    color: '#9BA1A6',
    marginTop: 2,
  },
});
