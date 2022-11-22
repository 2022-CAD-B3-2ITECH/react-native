import React from "react";
import {
  TextInput,
  StyleSheet
} from "react-native";

const MyTextInput = (props) => {
  const {value, onChangeText, style} = props;

  return (
    <TextInput style={[styles.container, style ?? {}]}
               value={value}
               onChangeText={onChangeText} 
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5
  }
})
export default MyTextInput;