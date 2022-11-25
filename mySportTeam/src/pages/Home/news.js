import React from "react";
import {View, Text, ScrollView, StyleSheet, RefreshControl} from "react-native";
import useGet from "../../hooks/useGet";
import ArticleItem from "../../components/Fragments/ArticleItem";

const News = () => {
  const [data, loading, refresh] = useGet(`/api/actus?populate=*`, {defaultValue: [], format: e => e.data});

  if (loading) return (<View><Text>Loading...</Text></View>);
  return (
    <ScrollView style={styles.container} 
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