import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const PageWelcome = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "white" }}
        contentContainerStyle={{ alignItems: "center" }}
        extraScrollHeight={100}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../../../assets/images/logo.png")}
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>
              Que bom te ver aqui. Vamos abrir a sua conta?
            </Text>

            <Text style={styles.text}>
              Para iniciar, vamos precisar de alguns dados, ok?
            </Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("signup")}
            >
              <Text style={styles.buttonText}>Cadastro pessoa física</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("signup/legal")}
            >
              <Text style={styles.buttonText}>Cadastro pessoa juridica</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default PageWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    width: 300,
    fontSize: 30,
    textAlign: "center",
    color: "#191970",
    fontWeight: "500",
  },
  text: {
    width: 300,
    textAlign: "center",
    fontSize: 28,
    margin: 20,
    color: "#46388a",
    fontWeight: "400",
  },
  containerButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#191970",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 300,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
