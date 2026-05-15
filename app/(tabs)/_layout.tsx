import { Tabs, useRouter, useSegments } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { AnimatedTabIcon } from '@/components/animated-tab-icon';
import { AIIcon } from '@/components/ui/ai-icon';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { HomeIcon } from '@/components/ui/home-icon';
import { ProductsIcon } from '@/components/ui/products-icon';
import { CartIcon } from '@/components/ui/cart-icon';
import { OrdersIcon } from '@/components/ui/orders-icon';
import { SettingsIcon } from '@/components/ui/settings-icon';
import { Colors } from '@/constants/theme';
import { TabBarProvider, useTabBar } from '@/contexts/TabBarContext';

function TabLayoutContent() {
  const router = useRouter();
  const segments = useSegments();
  const activeTab = segments[segments.length - 1] || '';
  const colorScheme = 'dark' as const;
  const { width: screenWidth } = useWindowDimensions();
  const { isTabBarVisible } = useTabBar();
  const TARGET_WIDTH = 350;
  const tabWidth = Math.min(TARGET_WIDTH, screenWidth - 32);
  const horizontal = (screenWidth - tabWidth) / 2;

  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: horizontal,
          bottom: 25,
          height: 64,
          width: 'auto',
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 24,
          backgroundColor:
            colorScheme === 'dark'
              ? Colors.dark.cardBackground ?? Colors.dark.background
              : Colors.light.background,
          borderTopWidth: 0,
          paddingHorizontal: 8,
          paddingBottom: 10,
          paddingTop: 10,
          // shadow (iOS)
          shadowColor: '#000',
          shadowOpacity: colorScheme === 'dark' ? 0.18 : 0.08,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          // elevation (Android)
          elevation: colorScheme === 'dark' ? 10 : 6,
          display: isTabBarVisible ? 'flex' : 'none',
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarItemStyle: {
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginBottom: 0,
          marginTop: 0,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon focused={focused}>
              <HomeIcon size={28} color={color} />
            </AnimatedTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon focused={focused}>
              <ProductsIcon size={28} color={color} />
            </AnimatedTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon focused={focused}>
              <CartIcon size={28} color={color} />
            </AnimatedTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon focused={focused}>
              <OrdersIcon size={28} color={color} />
            </AnimatedTabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon focused={focused}>
              <SettingsIcon size={28} color={color} />
            </AnimatedTabIcon>
          ),
        }}
      />
    </Tabs>

    {activeTab !== 'explore' && (
      <TouchableOpacity
        style={[styles.aiFloatingButton, (activeTab === 'dashboard' || activeTab === 'products') && { bottom: 175 }]}
        onPress={() => router.push('/ai-chat')}
        activeOpacity={0.8}
      >
        <AIIcon size={28} color="#FFFFFF" />
      </TouchableOpacity>
    )}
    </>
  );
}

const styles = StyleSheet.create({
  aiFloatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 50,
  },
});

export default function TabLayout() {
  return (
    <TabBarProvider>
      <TabLayoutContent />
    </TabBarProvider>
  );
}
