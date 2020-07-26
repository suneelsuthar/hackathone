import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {
  DrawerContent,
  HomeScreen,
  SplashScreen,
  TrackByCountry,
} from './../screens';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {View, TouchableOpacity} from 'react-native';
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const [state, setState] = useState(false);

  const navigation = useNavigation();

  const closedrawer = () => {
    setState(false);
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const opendrawer = () => {
    setState(true);
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      {state ? (
        <TouchableOpacity onPress={() => closedrawer()}>
          <FeatherIcon name="menu" size={30} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => opendrawer()}>
          <FeatherIcon name="menu" size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

function RootDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#00a9ff',
        inactiveTintColor: '#00a9ff',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Drawer.Screen
        name="TrackByCountry"
        component={TrackByCountry}
        options={{
          headerShown: null,
        }}
      />
    </Drawer.Navigator>
  );
}

const AuthStack = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: null,
        }}
      />

      <RootStack.Screen
        name="HomeDrawer"
        component={RootDrawer}
        options={{
          headerStyle: {backgroundColor: '#9e0303', evolution: 5},
          headerTintColor: 'white',
          title: 'COVID-19 TRACKER',
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
export default AuthStack;
