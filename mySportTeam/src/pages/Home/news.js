import React from "react";
import {View, Text, ScrollView, StyleSheet, RefreshControl} from "react-native";
import useGet from "../../hooks/useGet";
import ArticleItem from "../../components/Fragments/ArticleItem";
import useUI from "../../contexts/ui";

const News = () => {
  const [data, loading, refresh] = useGet(`/api/actus?populate=*`, {defaultValue: [], format: e => e.data});
  const [ctx] = useUI();

  if (loading) return (<View><Text>Loading...</Text></View>);
  return (
    <ScrollView style={[styles.container, {backgroundColor: ctx.theme === "light" ? "#fff" : "#000"}]}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} />}>
      {data.map((e, i) => <ArticleItem key={i} item={e} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10
  }
})

export default News;