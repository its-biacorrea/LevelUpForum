import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import PostInsertScreen from "./src/screens/PostInsertScreen";
import PostShowScreen from "./src/screens/PostShowScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PostsListScreen from "./src/screens/PostsListScreen";
import { UserContextProvider } from "./src/context/UserContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function PostsListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="posts"
        component={PostsListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="post" component={PostShowScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  );
}

function AppContent() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="login">
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="posts" component={PostsListStack} />
        <Drawer.Screen name="add-post" component={PostInsertScreen} />
        <Drawer.Screen name="login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
