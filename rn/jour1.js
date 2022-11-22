import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const Jour1 = (props) => {

  console.log(props);

  const _handleClick = () =>  {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity style={styles.container1} onPress={_handleClick}>
        <Image source={{uri: "https://cdn.motor1.com/images/mgl/m6K7e/s3/bmw-e30-m3-by-redux.jpg"}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.container21} >

        </TouchableOpacity>
        <TouchableOpacity style={styles.container22}>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "red"
  },
  container2: {
    flex: 1,
    flexDirection: "row"
  },
  container21: {
    flex: 1,
    backgroundColor: "green"
  },
  container22: {
    flex: 1,
    backgroundColor: "yellow"
  },
  image: {
    resizeMode: "contain",
    width: "100%", 
    flex: 1
  }
});

export default Jour1;
