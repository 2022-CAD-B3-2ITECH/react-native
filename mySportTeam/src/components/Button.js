import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "reacte-native";

const Button = (props) => {
  const {
    onPress,
    children
  } = props;

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {

  },
  text: {
    
  }
});

export default Button;