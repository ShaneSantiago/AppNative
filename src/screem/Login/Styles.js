import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    marginTop: 150,
    width: 150,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "#1e1673",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#191970",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  button2: {
    borderColor: "#191970",
    borderWidth: 2,
    borderRadius: 10,
    padding: 18,
    margin: 10,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  buttonText2: {
    fontSize: 18,
    color: "#46388a",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
