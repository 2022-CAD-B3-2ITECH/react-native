import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View
} from "react-native"
import Button from "./components/Button";
import TextInput from "./components/TextInput";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [comments, setComments] = useState([
    "comment1",
    "comment2",
    "comment3"
  ])

  console.log(name);

  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      {comments.map((item, id) => <Text key={id}>{item}</Text>)}
      <TextInput value={name} onChangeText={setName} style={{width: "100%"}}/>
      <Button>Envoyer</Button>
    </SafeAreaView>
  )
};

export default App;
