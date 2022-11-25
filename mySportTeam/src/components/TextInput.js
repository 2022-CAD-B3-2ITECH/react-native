import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

const MyTextInput = (props) => {

  return (
    <TextInput {...props} style={styles.input} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10
  }
})

export default MyTextInput;