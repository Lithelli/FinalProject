import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DrawerNavigation from './App'
import Home from './src/pages/Home'


AppRegistry.registerComponent(appName, () => DrawerNavigation);
