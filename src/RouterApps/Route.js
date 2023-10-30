import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screem/Login/Login";
import Signup from "../screem/Signup/Signup";
import PageWelcome from "../screem/Signup/Components/PageWelcome";
import SuccessPageSignup from "../screem/Signup/Components/SucessPageSignup";
import SignupLegal from "../screem/Signup/SignupLegal";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="signup/legal"
        component={SignupLegal}
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="welcomeSignup"
        component={PageWelcome}
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="sucessSignup"
        component={SuccessPageSignup}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
