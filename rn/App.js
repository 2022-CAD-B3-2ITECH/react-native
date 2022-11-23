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
import useGet from "./hooks/useGet";

const App = () => {
  const [data, loading] = useGet("https://api.open-meteo.com/v1/forecast?latitude=44.837788&longitude=-0.579180&daily=temperature_2m_max,temperature_2m_min&timezone=GMT", null);
  const {count, add, substract} = useCounter(0);

  console.log(data);

  if (loading || data === null) return <Text>Loading...</Text>;
  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 48}}>{count}</Text>
      <View style={{flexDirection: "row"}}>
        <Button title="-" onPress={substract} />
        <Button title="+" onPress={add} />
      </View>
      {loading || data === null ? <Text>Loading...</Text> : (
        <Text style={{fontSize: 48}}>{data?.daily?.temperature_2m_max[0]}</Text>
      )}
    </SafeAreaView>
  )
};

export default App;
