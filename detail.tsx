import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text } from "react-native";

export default function DetailScreen() {
  const params = useLocalSearchParams();

  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        source={{ uri: params.urlToImage as string }}
        style={{ height: 220, borderRadius: 12, marginBottom: 15 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 5 }}>
        {params.title}
      </Text>

      <Text style={{ color: "gray", marginBottom: 10 }}>
        {params.author}
      </Text>

      <Text style={{ fontSize: 16 }}>
        {params.content}
      </Text>
    </ScrollView>
  );
}
