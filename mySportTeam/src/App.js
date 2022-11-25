import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from "./contexts/ui";

import Home from "./pages/Home";
import Equipes from "./pages/Equipes";

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)
            }}

          />
          <Stack.Screen
            name="Equipes"
            component={Equipes}
            options={{
              tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account-group" color={color} size={size} />)
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;