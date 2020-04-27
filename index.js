/* eslint-disable quotes */
import 'react-native-gesture-handler';
import {AppRegistry, YellowBox} from 'react-native';
import App from './screen/App';
import {name as appName} from './app.json';
// eslint-disable-next-line prettier/prettier
YellowBox.ignoreWarnings(["Require cycle:"]);
AppRegistry.registerComponent(appName, () => App);
