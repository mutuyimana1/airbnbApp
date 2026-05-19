import { colors } from '@/src/styles/globalStyles';
import { EvilIcons, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
        {/* // if you want you can pass headerShown to each stack screen to be shown for specific screen only */}
      <Tabs.Screen
        name='index'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='list'
        options={{
          title: 'Wish List',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          title: 'Trips',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="airbnb" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-reply-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
