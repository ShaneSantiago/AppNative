import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const SuccessPageSignup = () => {
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
            <Text style={styles.title}>Tudo pronto!</Text>

            <Text style={styles.text}>
              Recebemos seus dados, agora e conosco. Você recebera um e-mail com
              seu usuário e senha de acesso em ate um dia útil. Fique de olho
              inclusive no seu spam de e-mail
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default SuccessPageSignup;

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
  title: {
    width: 300,
    fontSize: 30,
    textAlign: "center",
    color: "#1e1673",
    fontWeight: "500",
  },
  text: {
    width: 300,
    textAlign: "center",
    fontSize: 28,
    margin: 20,
    color: "#46388a",
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#191970",
    padding: 15,
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
