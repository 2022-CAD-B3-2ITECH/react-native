import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from "react-native"
import Button from "./components/Button";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button style={{marginHorizontal: 10}} >
        hello world
      </Button>
    </SafeAreaView>
  )
};

export default App;
