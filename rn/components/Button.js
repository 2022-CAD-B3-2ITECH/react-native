import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Button = (props) => {
  const { children, onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress ?? (() => console.log("tu as oublié props onPress"))} style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  text: {
    color: "white"
  }
})

export default Button;