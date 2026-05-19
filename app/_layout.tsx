import { Stack } from "expo-router";
import { AppState, useColorScheme } from "react-native";
import { onlineManager, focusManager, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';
import { StatusBar } from "expo-status-bar"; 
export default function RootLayout() {
  const colorScheme = useColorScheme();
  onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

focusManager.setEventListener((onFocus) => {
  const subscription = AppState.addEventListener('change', (status) => {
    onFocus(status === 'active');
  });
  return () => subscription.remove();
});

  const queryClient = new QueryClient();
  return( 
   <QueryClientProvider client={queryClient}>
  {/* <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} /> */}
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='(tabs)' />
  </Stack>
  </QueryClientProvider>
  );
}
