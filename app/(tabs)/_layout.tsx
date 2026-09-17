import { SymbolView } from 'expo-symbols';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'home',
                web: 'home',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'search',
                web: 'search',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'movie',
                web: 'movie',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'wallet',
                web: 'wallet',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'person',
                web: 'person',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
