import { useRouter, useSegments } from 'expo-router';
import React, { useRef } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TAB_ROUTES = ['dashboard', 'products', 'explore', 'orders', 'settings'];

export function SwipeableScreen({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const segments = useSegments();
  const translateX = useSharedValue(0);
  const currentSegment = segments[segments.length - 1];
  const currentIndex = TAB_ROUTES.indexOf(currentSegment);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  const goToTab = (index: number) => {
    if (index < 0 || index >= TAB_ROUTES.length) return;
    router.push(`/${TAB_ROUTES[index]}` as any);
  };

  const gesture = Gesture.Pan()
    .activeOffsetX([-20, 20])
    .failOffsetY([-15, 15])
    .onUpdate((event) => {
      const idx = currentIndexRef.current;
      if (idx === -1) return;
      const canSwipePrev = idx > 0;
      const canSwipeNext = idx < TAB_ROUTES.length - 1;

      if ((event.translationX > 0 && canSwipePrev) || (event.translationX < 0 && canSwipeNext)) {
        translateX.value = event.translationX * 0.4;
      }
    })
    .onEnd((event) => {
      const idx = currentIndexRef.current;
      if (idx === -1) { translateX.value = withSpring(0); return; }

      const threshold = 80;
      if (event.translationX > threshold && idx > 0) {
        runOnJS(goToTab)(idx - 1);
      } else if (event.translationX < -threshold && idx < TAB_ROUTES.length - 1) {
        runOnJS(goToTab)(idx + 1);
      }
      translateX.value = withSpring(0);
    })
    .onFinalize(() => {
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
