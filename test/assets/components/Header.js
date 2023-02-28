import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To-do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    fontStyle: "italic",
    textAlign: "center",
  },
});
