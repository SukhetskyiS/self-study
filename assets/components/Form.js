import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter task..."
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addHandler(text)}
      >
        <Text style={styles.text}>Add task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: "10%",
    width: "80%",
  },
  button: {
    backgroundColor: "blue",
    width: "30%",
    height: 30,
    marginHorizontal: "35%",
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 5,
  },
});
