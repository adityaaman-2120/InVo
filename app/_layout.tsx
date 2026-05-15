import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as LocalAuthentication from 'expo-local-authentication';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { useEnsureDarkMode } from '@/hooks/ensure-dark-mode';
import { useColorScheme } from '@/hooks/use-color-scheme';

SplashScreen.preventAutoHideAsync();

const RNText: any = Text as any;
const RNTextInput: any = TextInput as any;
if (RNText?.defaultProps == null) RNText.defaultProps = {};
if (RNTextInput?.defaultProps == null) RNTextInput.defaultProps = {};
RNText.defaultProps.style = [RNText.defaultProps.style, { fontFamily: 'Roboto' }];
RNTextInput.defaultProps.style = [RNTextInput.defaultProps.style, { fontFamily: 'Roboto' }];

export const unstable_settings = {
  initialRouteName: 'index',
};

function AppContent() {
  const { t } = useLanguage();
  const [isLocked, setIsLocked] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const authAttempted = useRef(false);

  useEnsureDarkMode();
  const colorScheme = useColorScheme();

  useEffect(() => {
    checkBiometry();
  }, []);

  const checkBiometry = useCallback(async () => {
    try {
      const saved = await AsyncStorage.getItem('@invo_settings');
      if (saved) {
        const s = JSON.parse(saved);
        if (s.biometryLock) {
          const has = await LocalAuthentication.hasHardwareAsync();
          const enrolled = await LocalAuthentication.isEnrolledAsync();
          if (has && enrolled && !authAttempted.current) {
            authAttempted.current = true;
            const result = await LocalAuthentication.authenticateAsync({
              promptMessage: t('lockScreen', 'unlockInvo'),
              disableDeviceFallback: false,
            });
            if (result.success) {
              setIsLocked(false);
            } else {
              setIsLocked(true);
            }
            setIsReady(true);
            return;
          }
        }
      }
      setIsLocked(false);
      setIsReady(true);
    } catch {
      setIsLocked(false);
      setIsReady(true);
    }
  }, [t]);

  const handleUnlock = useCallback(async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: t('lockScreen', 'unlockInvo'),
      disableDeviceFallback: false,
    });
    if (result.success) {
      setIsLocked(false);
    }
  }, [t]);

  if (!isReady) {
    return null;
  }

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#121212',
      card: '#1A1A1A',
      text: '#ECEDEE',
    },
  };

  if (isLocked) {
    return (
      <ThemeProvider value={customDarkTheme}>
        <View style={styles.lockScreen}>
          <IconSymbol name="lock" size={48} color="#FFFFFF" />
          <ThemedText style={styles.lockTitle}>{t('lockScreen', 'invoLocked')}</ThemedText>
          <ThemedText style={styles.lockSubtitle}>{t('lockScreen', 'authenticateToAccess')}</ThemedText>
          <View style={{ marginTop: 24 }}>
            <TouchableOpacity onPress={handleUnlock} style={styles.unlockBtn}>
              <ThemedText style={styles.unlockBtnText}>{t('lockScreen', 'unlock')}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="light" />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={customDarkTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ai-chat" options={{ headerShown: false }} />
        <Stack.Screen name="suppliers" options={{ headerShown: false }} />
        <Stack.Screen name="supplier-order" options={{ headerShown: false }} />
        <Stack.Screen name="weekly-report" options={{ headerShown: false }} />
        <Stack.Screen name="product-detail" options={{ 
          title: 'Product Details',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { color: '#FFFFFF' }
        }} />
        <Stack.Screen name="shop-details" options={{ headerShown: false }} />
        <Stack.Screen name="customers" options={{ headerShown: false }} />
        <Stack.Screen name="categories" options={{ headerShown: false }} />
        <Stack.Screen name="backup-restore" options={{ headerShown: false }} />
        <Stack.Screen name="export-data" options={{ headerShown: false }} />
        <Stack.Screen name="contact-support" options={{ headerShown: false }} />
        <Stack.Screen name="terms" options={{ headerShown: false }} />
        <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('@/assets/font/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  lockScreen: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  lockTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    color: '#FFFFFF',
  },
  lockSubtitle: {
    fontSize: 14,
    color: '#9BA1A6',
    marginTop: 8,
    textAlign: 'center',
  },
  unlockBtn: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  unlockBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
