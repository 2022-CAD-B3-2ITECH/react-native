import React from 'react';
import Jour1 from "./jour1";
import {Button} from 'react-native';

const App = () => {
  return (
    <>
      <Jour1 test="hello world" />
      <Button onPress={() => console.log("hello")} title="test" />
    </>
  )
};

export default App;
