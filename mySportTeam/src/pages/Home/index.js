import React from "react";
import * as RNav from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import News from "./news";
import NewsSingle from "./news_single";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsSingle" component={NewsSingle} />
    </Stack.Navigator>
  )
}

export default Home;