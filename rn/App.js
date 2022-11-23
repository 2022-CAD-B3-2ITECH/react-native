import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";

const Stack = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} 
                      options={{
                        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
                      }}/>
        <Stack.Screen name="Equipe" component={Equipe}
                      options={{
                        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account-group" color={color} size={size} />)
                      }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
