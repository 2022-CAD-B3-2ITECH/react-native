import React from "react";
import {View, Text} from "react-native";
import useUI from "../../contexts/ui";
import {Button} from "react-native";

const Equipes = () => {
  const [ctx, setCtx] = useUI();

  return (
    <View>
      <Text>Equipes</Text>
      <Text style={{fontSize: 48}}>{ctx.theme}</Text>
      <View>
        <Button onPress={() => setCtx({...ctx, theme: "light"})} title="Light"></Button>
        <Button onPress={() => setCtx({...ctx, theme: "dark"})} title="Dark"></Button>
      </View>
    </View>
  )
}

export default Equipes;