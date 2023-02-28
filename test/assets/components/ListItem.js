import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity
      onPress={() => {
        deleteHandler(el.key);
      }}
    >
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});
