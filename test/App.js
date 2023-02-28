import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";

import Header from "./assets/components/Header";
import ListItem from "./assets/components/ListItem";
import Form from "./assets/components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "By milk", key: "1" },
    { text: "Wash car", key: "2" },
    { text: "By popato", key: "3" },
    { text: "Be millionare", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          key: Math.random().toString(36).substring(7),
        },
        ...list,
      ];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(
        (listOfItems) => listOfItems.key != key
      );
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem
              el={item}
              deleteHandler={deleteHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
