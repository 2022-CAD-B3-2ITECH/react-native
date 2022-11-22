import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import moment from "moment";

const App = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss"));

  useEffect(() => {
    let id = setInterval(() => {
      setTime(moment().format("hh:mm:ss"));
    }, 1000);
    return () => clearInterval(id);
  }, [])

  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 48}}>{time}</Text>
    </SafeAreaView>
  )
};

export default App;
