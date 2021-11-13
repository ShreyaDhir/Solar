import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#803906',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          }
        }}
      >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Overview",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              backgroundColor="#C89D7C"
              onPress={() => navigation.openDrawer()}
            >
            </Icon>
          )
        }}
      />
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen = () => {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#803906',
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
          }
        }}
      />
    </DetailsStack.Navigator>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
