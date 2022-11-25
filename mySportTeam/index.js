/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import config from "./src/config";
import "moment/locale/fr";
import moment from "moment";
import axios from "axios";

import App from "./src/App";

moment.updateLocale("fr");
axios.defaults.baseURL = config.apiUrl;

const AppWrapper = () => {
  return (
    <App />
  )
}

AppRegistry.registerComponent(appName, () => AppWrapper);
