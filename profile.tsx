import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 60 }}>👤</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>@user_name</Text>
      <Text>User Full Name</Text>
      <Text>useremail@gmail.com</Text>
      <Text>DD/MM/YYYY</Text>
    </View>
  );
}
