import React, {useState, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useGet from "../../hooks/useGet";
import config from "../../config";
import * as SM from "react-native-size-matters";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import axios from "axios";

const NewsSingle = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;
  const [data, loading, refresh] = useGet(`/api/actus/${id}?populate=*`, {defaultValue: null, format: e => e.data});
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!data) return;
    navigation.setOptions({title: data.attributes.title});
  }, [data])

  const _handleCommentSend = async () => {
    try {
      if (!comment) return;
      await axios.post(`/api/comments`, {
        data: {
          content: comment,
          actu: {
            id
          }
        }
      })
      setComment("");
      await refresh();
    } catch (e) {
      console.error(e);
    }
  }

  console.log(data);

  if (loading) return (<View><Text>Loading...</Text></View>);
  return( 
    <ScrollView>
      <Image style={styles.image} source={{uri: `${config.apiUrl}${data?.attributes?.illustration?.data?.attributes?.url}`}} />
      <View style={styles.content}>
        <Text style={styles.title}>{data?.attributes?.title}</Text>
        <Text style={styles.date}>{moment(data?.attributes.publishedAt).format("LL")}</Text>
        <Text style={styles.description}>{data?.attributes?.content}</Text>
      </View>
      <Text style={{marginLeft: 10, fontSize: 20, fontWeight: "bold", color: "#333"}}>Commentaires:</Text>
      <View style={styles.commentContainer}>
        {data?.attributes?.comments?.data?.length === 0 ? 
          <Text style={{marginTop: 5, fontStyle: "italic"}}>Pas de commentaires, ajoutez le votre ;-) </Text>
        : data?.attributes?.comments?.data?.map((item) => (
          <View key={item.id} style={styles.comment}>
            <Text>{item?.attributes?.content}</Text>
            <Text style={{textAlign: "right"}}>{moment(item?.attributes?.createdAt).format("LLL")}</Text>
          </View>
        ))}
      </View>
      <View style={styles.commentFormContainer}>
        <View style={{flex: 1, marginRight: 10}}>
          <TextInput value={comment} onChangeText={setComment} placeholder="Votre commentaire" />
        </View>
        <TouchableOpacity style={styles.commentButton} onPress={_handleCommentSend}>
          <MaterialCommunityIcons name="send" size={SM.verticalScale(38)} color="#333" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: SM.verticalScale(20),
    color: "#333",
    fontWeight: "bold",
  },
  date: {
    fontStyle: "italic",
  },
  description: {
    marginTop: 10
  },
  commentContainer: {
    paddingHorizontal: 10,
  },
  comment: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginTop: 5
  },
  commentText: {

  },
  commentFormContainer: {
    padding: SM.verticalScale(10),
    flexDirection: "row",
    alignItems: "center"
  }
});

export default NewsSingle;