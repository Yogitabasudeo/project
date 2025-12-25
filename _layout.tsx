import { router, Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "NewsApp",
        headerRight: () => (
          <Text
            style={{ fontSize: 20, marginRight: 15 }}
            onPress={() => router.push("/profile")}
          >
            👤
          </Text>
        ),
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Search" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
    </Tabs>
  );
}
