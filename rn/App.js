import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View
} from "react-native";
import moment from "moment";
import useCounter from './hooks/useCounter';
import useTimer from './hooks/useTimer';

const App = () => {
  const {count, add, substract} = useCounter(0);
  const time = useTimer();

  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 48}}>{count}</Text>
      <View style={{flexDirection: "row"}}>
        <Button title="-" onPress={substract} />
        <Button title="+" onPress={add} />
      </View>
      <Text style={{fontSize: 42}}>{time}</Text>
    </SafeAreaView>
  )
};

export default App;
