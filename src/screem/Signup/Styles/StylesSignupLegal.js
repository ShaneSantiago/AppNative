import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  label: {
    marginLeft: 10,
    marginTop: 5,
    color: "#191970",
    fontWeight: "600",
    fontSize: 16,
  },
  input: {
    width: 300,
    borderColor: "#191970",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#191970",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 300,
  },
  containerStepButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonStep: {
    backgroundColor: "#191970",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    width: 135,
  },
  containerUpoload: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  containerUploadCam: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageUpload: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  imageUploadCam: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  errorText: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default styles;
