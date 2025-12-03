import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TimerScreen from './screens/TimerScreen';
import ReportsScreen from './screens/ReportsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f4f5f7',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#f4f5f7' },
          headerTitleStyle: { fontWeight: '600', color: '#1f2933' },
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#e5e7eb',
            paddingVertical: 6,
            height: 64,
          },
          tabBarActiveTintColor: '#a23b72',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
          tabBarIcon: ({ color, size, focused }) => {
            const iconMap = {
              Zamanlayici: focused ? 'timer' : 'timer-outline',
              Raporlar: focused ? 'stats-chart' : 'stats-chart-outline',
            };
            const name = iconMap[route.name] ?? 'ellipse';
            return <Ionicons name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Zamanlayici"
          component={TimerScreen}
        />
        <Tab.Screen
          name="Raporlar"
          component={ReportsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
