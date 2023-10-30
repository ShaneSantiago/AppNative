import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/logo.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Soluções personalizadas para atender às suas metas financeiras
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acesse sua conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("welcomeSignup")}
        >
          <Text style={styles.buttonText2}>Abra sua conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
