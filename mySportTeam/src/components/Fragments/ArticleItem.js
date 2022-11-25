import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import config from "../../config";
import * as SM from "react-native-size-matters";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";

const ArticleItem = (props) => {
  const {item, onPress} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${config.apiUrl}${item?.attributes?.illustration?.data?.attributes?.url}`}} />
      <View style={styles.preview}>
        <Text style={styles.title}>{item.attributes.title}</Text>
        <Text style={styles.date}>{moment(item.attributes.publishedAt).format("LL")}</Text>
        <Text>
          {item.attributes.content.slice(0, 100)}...
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => navigation.navigate("NewsSingle", {id: item.id})}>
            <Text style={styles.readMore}>Lire la suite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SM.verticalScale(10),
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  preview: {
    paddingHorizontal: SM.scale(5),
    paddingVertical: SM.verticalScale(5),
  },
  title: {
    fontSize: SM.verticalScale(20),
    fontWeight: "bold",
    color: "#333"
  },
  date: {
    fontStyle: "italic",
    textAlign: "right",
  },
  actions: {

  },
  readMore: {
    textAlign: "right",
    textDecorationLine: "underline",
  }
});

export default ArticleItem;