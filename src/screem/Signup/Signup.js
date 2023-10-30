import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Button } from "react-native";
import styles from "./Styles/StylesSignup";
import { useNavigation } from "@react-navigation/native";
import { handleCepChange } from "../Signup/Requires/AddressRequire";
import * as ImagePicker from "expo-image-picker";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cell, setCell] = useState("");
  const [cpf, setCpf] = useState("");
  const [step, setStep] = useState("1");
  const [cep, setCep] = useState("");
  const [addressData, setAddressData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [number, setNumber] = useState("");
  const [complemento, setComplemento] = useState("");
  const [selectedFileWithDocument, setSelectedFIleWithDocument] =
    useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageCpf, setSelectedImageCpf] = useState(null);
  const [selectedImageDocument, setSelectedImageDocument] = useState(null);
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [isCpf, setIsCpf] = useState(true);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cpfCnpjError, setCpfCnpjError] = useState("");
  const [rgError, setRgError] = useState("");
  const [cellError, setCellError] = useState("");
  const [errorEmailValidator, setErrorEmailValidator] = useState(null);

  const [errorFile, setErrorFile] = useState(null);
  const [errorFileCam, setErrorFileCam] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleDocument, setModalVisibleDocument] = useState(false);
  const [isModalVisibleDocumentCpf, setModalVisibleDocumentCpf] =
    useState(false);
  const [isModalVisibleSelfie, setModalVisibleSelfie] = useState(null);
  const [isModalVisibleSelfieDocument, setModalVisibleSelfieDocument] =
    useState(null);
  const [erroState, setErroState] = useState("");

  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalDocument = () => {
    setModalVisibleDocument(!isModalVisibleDocument);
  };

  const toggleModalDocumentCpf = () => {
    setModalVisibleDocumentCpf(!isModalVisibleDocumentCpf);
  };

  const toggleModalSelfie = () => {
    setModalVisibleSelfie(!isModalVisibleSelfie);
  };

  const toggleModalSelfieWithDocument = () => {
    setModalVisibleSelfieDocument(!isModalVisibleSelfieDocument);
  };

  const onSubmitStep2 = () => {
    if (
      name === "" ||
      email === "" ||
      rg === "" ||
      cell === "" ||
      cpfCnpj === ""
    ) {
      setNameError("Campo obrigatório");
      setEmailError("Campo obrigatório");
      setCpfCnpjError("Campo obrigatório");
      setRgError("Campo obrigatório");
      setCellError("Campo obrigatório");
    } else if (errorEmailValidator) {
      setErrorEmailValidator(
        "E-mail inválido. Certifique-se de incluir o símbolo @ e .com"
      );
    } else {
      setStep("2");
    }
  };

  const handleNextAddress = () => {
    if (
      addressData.bairro === undefined ||
      addressData.logradouro === undefined ||
      addressData.localidade === undefined ||
      addressData.uf === undefined ||
      complemento === "" ||
      number === ""
    ) {
      setErroState("Campo obrigatório");
    } else {
      setStep("3");
    }
  };

  const alertButton = () => {
    if (
      selectedImage &&
      selectedImage.canceled === false &&
      selectedImageCpf &&
      selectedImageCpf.canceled === false &&
      selectedImageDocument &&
      selectedImageDocument.canceled === false
    ) {
      setStep("4");
    } else {
      setErrorFile("Obrigatório");
    }
  };

  const onSubmitForm = () => {
    if (
      selectedFile &&
      selectedFile.canceled === false &&
      selectedFileWithDocument &&
      selectedFileWithDocument.canceled === false
    ) {
      navigation.navigate("sucessSignup");
    } else {
      setErrorFileCam("Selecione um arquivo");
    }
  };

  const handleTextChange = (text) => {
    const cleanedText = text.replace(/[.-/]/g, "");
    setCpfCnpj(cleanedText);

    if (cleanedText.length > 11) {
      setIsCpf(false);
    } else {
      setIsCpf(true);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setSelectedImage(result);
    }
  };

  const pickImageCpf = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setSelectedImageCpf(result);
    }
  };

  const pickImageDocument = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setSelectedImageDocument(result);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setSelectedFile(result);
    }
  };

  const takePhotoWithDocument = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setSelectedFIleWithDocument(result);
    }
  };

  const handleCep = (text) => {
    handleCepChange({ setCep, setAddressData, text });
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "white" }}
        contentContainerStyle={{ alignItems: "center" }}
        extraScrollHeight={100}
      >
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
        >
          <Image
            style={styles.image}
            source={require("../../../assets/images/logo.png")}
          />

          {step === "1" ? (
            <>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <KeyboardAvoidingView
                  style={{ flex: 1, backgroundColor: "white" }}
                  contentContainerStyle={{ alignItems: "center" }}
                  extraScrollHeight={100}
                >
                  <View style={styles.containerInput}>
                    <Text style={styles.label}>Como podemos te chamar?</Text>
                    <TextInput
                      style={styles.input}
                      value={name}
                      onChangeText={(text) => {
                        const sanitizedText = text.replace(/\.|-/g, "");
                        setName(sanitizedText);
                      }}
                      placeholder="Digite seu nome"
                      placeholderTextColor={nameError ? "red" : "#D3D3D3"}
                    />

                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>
                        Informe também o seu e-mail
                      </Text>
                      {errorEmailValidator ? (
                        <>
                          <Text style={{ color: "red", marginLeft: 10 }}>
                            E-mail inválido. Certifique-se de incluir o símbolo
                            @ e .com"
                          </Text>
                        </>
                      ) : null}
                      <TextInput
                        style={styles.input}
                        value={email}
                        placeholder="Digite seu email"
                        placeholderTextColor={emailError ? "red" : "#D3D3D3"}
                        onChangeText={(text) => {
                          setEmail(text);

                          if (text.includes("@") && text.includes(".com")) {
                            setErrorEmailValidator(null); // Define o email como válido
                          } else {
                            setErrorEmailValidator("E-mail inválido"); // Define o email como inválido
                          }
                        }}
                      />
                    </View>

                    <View style={styles.inputContainer}>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                          Informe seu CPF ou CNPJ
                        </Text>

                        {cpfCnpjError && cpfCnpj.length < 11 ? (
                          <>
                            <Text style={{ color: "red", marginLeft: 10 }}>
                              Faltam digitos
                            </Text>
                          </>
                        ) : null}

                        <TextInputMask
                          type="cpf"
                          options={{
                            maskType: "BRL",
                            withDDD: true,
                          }}
                          value={cpfCnpj}
                          onChangeText={(text) => {
                            if (text.length >= 14) {
                              handleTextChange(text);
                              setCpfCnpjError("");
                            } else {
                              handleTextChange("");
                              setCpfCnpjError(
                                "Preencha com pelo menos 11 caracteres"
                              );
                            }
                          }}
                          style={styles.input}
                          placeholder="Digite aqui o número"
                          placeholderTextColor={
                            cpfCnpjError ? "red" : "#D3D3D3"
                          }
                        />
                      </View>
                    </View>

                    <View style={styles.inputContainer}>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>Informe seu RG</Text>
                        {rgError && rg.length < 6 ? (
                          <>
                            <Text style={{ color: "red", marginLeft: 10 }}>
                              Verifique se o RG está correto
                            </Text>
                          </>
                        ) : null}
                        <TextInput
                          style={styles.input}
                          value={rg}
                          placeholder="Digite aqui seu RG"
                          placeholderTextColor={rgError ? "red" : "#D3D3D3"}
                          keyboardType="numeric"
                          onChangeText={(text) => setRg(text)}
                        />
                      </View>
                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.label}>
                        E o seu número de celular
                      </Text>
                      <TextInputMask
                        style={styles.input}
                        type={"cel-phone"}
                        options={{
                          maskType: "BRL",
                          withDDD: true,
                          dddMask: "(99) ",
                        }}
                        placeholder="(00) 00000-0000"
                        placeholderTextColor={cellError ? "red" : "#D3D3D3"}
                        value={cell}
                        onChangeText={(text) => setCell(text)}
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={onSubmitStep2}
                    >
                      <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </>
          ) : null}

          {step === "2" ? (
            <>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <KeyboardAvoidingView
                  style={{ flex: 1, backgroundColor: "white" }}
                  contentContainerStyle={{ alignItems: "center" }}
                  extraScrollHeight={100}
                >
                  <View>
                    <Text style={styles.label}>CEP (Código Postal)</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite o CEP"
                      value={cep}
                      onChangeText={handleCep}
                      keyboardType="numeric"
                    />

                    <Text style={styles.label}>Logradouro</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.logradouro}
                      placeholder="Logradouro"
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                    />

                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.bairro}
                      placeholder="Bairro"
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                    />

                    <Text style={styles.label}>Número</Text>
                    <TextInput
                      style={styles.input}
                      // value={addressData.bairro}
                      placeholder="Número"
                      value={number}
                      keyboardType="numeric"
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                      onChangeText={(text) => setNumber(text)}
                    />

                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                      style={styles.input}
                      // value={addressData.bairro}
                      value={complemento}
                      placeholder="Complemento"
                      onChangeText={(text) => setComplemento(text)}
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                    />

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.localidade}
                      placeholder="Cidade"
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                    />

                    <Text style={styles.label}>Estado</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.uf}
                      placeholder="Estado"
                      placeholderTextColor={erroState ? "red" : "#D3D3D3"}
                    />

                    <View style={styles.containerStepButton}>
                      <TouchableOpacity
                        style={styles.buttonStep}
                        onPress={() => setStep("1")}
                      >
                        <Text style={styles.buttonText}>Voltar</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.buttonStep}
                        onPress={handleNextAddress}
                      >
                        <Text style={styles.buttonText}>Avançar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </ScrollView>
            </>
          ) : null}

          {step === "3" ? (
            <>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                  <View style={styles.containerHeader}>
                    <Text style={styles.contanerHeaderText}>
                      Agora precisamos de alguns documentos{" "}
                    </Text>
                  </View>
                  {selectedImage ? (
                    <>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImage}
                      >
                        <Text style={styles.buttonText}>
                          Alterar imagem de RG ou CNH
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={toggleModal}>
                        <View style={styles.uploadButton}>
                          {selectedImage && selectedImage.canceled ? (
                            <Text style={{ margin: 20, color: "red" }}>
                              Favor selecionar um arquivo
                            </Text>
                          ) : (
                            <Text style={{ margin: 20 }}>
                              Visualizar documento
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>

                      <Modal
                        visible={isModalVisible}
                        transparent={true}
                        animationType="slide"
                      >
                        <View style={styles.modalContainer}>
                          {selectedImage.assets && selectedImage.assets[0] ? (
                            <Image
                              source={{
                                uri: selectedImage.assets[0].uri,
                              }}
                              style={styles.modalImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          <Button title="Fechar" onPress={toggleModal} />
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      {errorFile !== null && (
                        <Text style={styles.errorText}>
                          Por favor, selecione o documento
                        </Text>
                      )}
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImage}
                      >
                        <Text style={styles.buttonText}>
                          Foto do RG frente ou da CNH frente
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}

                  {selectedImageCpf ? (
                    <>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImageCpf}
                      >
                        <Text style={styles.buttonText}>
                          Alterar imagem CPF
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={toggleModalDocumentCpf}>
                        <View style={styles.uploadButton}>
                          {selectedImageCpf && selectedImageCpf.canceled ? (
                            <Text style={{ margin: 20, color: "red" }}>
                              Favor selecionar um arquivo
                            </Text>
                          ) : (
                            <Text style={{ margin: 20 }}>
                              Visualizar imagem CPF
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>

                      <Modal
                        visible={isModalVisibleDocumentCpf}
                        transparent={true}
                        animationType="slide"
                      >
                        <View style={styles.modalContainer}>
                          {selectedImageCpf.assets &&
                          selectedImageCpf.assets[0] ? (
                            <Image
                              source={{
                                uri: selectedImageCpf.assets[0].uri,
                              }}
                              style={styles.modalImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          <Button
                            title="Fechar"
                            onPress={toggleModalDocumentCpf}
                          />
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      {errorFile !== null && (
                        <Text style={styles.errorText}>
                          Por favor, selecione o documento
                        </Text>
                      )}
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImageCpf}
                      >
                        <Text style={styles.buttonText}>Foto do CPF</Text>
                      </TouchableOpacity>
                    </>
                  )}

                  {selectedImageDocument ? (
                    <>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImageDocument}
                      >
                        <Text style={styles.buttonText}>
                          Alterar imagem comprovante
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={toggleModalDocument}>
                        <View style={styles.uploadButton}>
                          {selectedImageDocument &&
                          selectedImageDocument.canceled ? (
                            <Text style={{ margin: 20, color: "red" }}>
                              Favor selecionar um arquivo
                            </Text>
                          ) : (
                            <Text style={{ margin: 20 }}>
                              Visualizar documento
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>

                      <Modal
                        visible={isModalVisibleDocument}
                        transparent={true}
                        animationType="slide"
                      >
                        <View style={styles.modalContainer}>
                          {selectedImageDocument.assets &&
                          selectedImageDocument.assets[0] ? (
                            <Image
                              source={{
                                uri: selectedImageDocument.assets[0].uri,
                              }}
                              style={styles.modalImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          <Button
                            title="Fechar"
                            onPress={toggleModalDocument}
                          />
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      {errorFile !== null && (
                        <Text style={styles.errorText}>
                          Por favor, selecione o documento
                        </Text>
                      )}
                      <TouchableOpacity
                        style={styles.button}
                        onPress={pickImageDocument}
                      >
                        <Text style={styles.buttonText}>
                          Comprovante (Água, Luz, Telefone)
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>

                <View style={styles.containerStepButton}>
                  <TouchableOpacity
                    style={styles.buttonStep}
                    onPress={() => setStep("2")}
                  >
                    <Text style={styles.buttonText}>Voltar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStep}
                    onPress={alertButton}
                  >
                    <Text style={styles.buttonText}>Avançar</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </>
          ) : null}

          {step === "4" ? (
            <>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                  <View style={styles.containerHeader}>
                    <Text style={styles.contanerHeaderText}>
                      Estamos quase lá,
                    </Text>
                    <Text style={styles.contanerHeaderText}>
                      agora vamos tirar uma selfie?
                    </Text>
                  </View>
                  {selectedFile ? (
                    <>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={takePhoto}
                      >
                        {selectedFile && selectedFile.canceled ? (
                          <Text style={styles.buttonText}>Tirar selfie</Text>
                        ) : (
                          <Text style={styles.buttonText}>Nova foto</Text>
                        )}
                      </TouchableOpacity>

                      <TouchableOpacity onPress={toggleModalSelfie}>
                        <View style={styles.uploadButton}>
                          {selectedFile && selectedFile.canceled ? (
                            <Text style={{ margin: 20 }}>
                              Favor tirar uma selfie
                            </Text>
                          ) : (
                            <Text style={{ margin: 20 }}>
                              Visualizar selfie
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>

                      <Modal
                        visible={isModalVisibleSelfie}
                        transparent={true}
                        animationType="slide"
                      >
                        <View style={styles.modalContainer}>
                          {selectedFile.assets && selectedFile.assets[0] ? (
                            <Image
                              source={{
                                uri: selectedFile.assets[0].uri,
                              }}
                              style={styles.modalImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          <Button title="Fechar" onPress={toggleModalSelfie} />
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      {errorFileCam !== null ? (
                        <Text style={styles.errorText}>
                          Por favor, tire uma foto
                        </Text>
                      ) : null}
                      <TouchableOpacity
                        style={styles.button}
                        onPress={takePhoto}
                      >
                        <Text style={styles.buttonText}>Selfie</Text>
                      </TouchableOpacity>
                    </>
                  )}

                  {selectedFileWithDocument ? (
                    <>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={takePhotoWithDocument}
                      >
                        {selectedFile && selectedFileWithDocument.canceled ? (
                          <Text style={styles.buttonText}>
                            Tirar selfie com documento RG ou CNH
                          </Text>
                        ) : (
                          <Text style={styles.buttonText}>
                            Nova foto com documento
                          </Text>
                        )}
                      </TouchableOpacity>

                      <TouchableOpacity onPress={toggleModalSelfieWithDocument}>
                        <View style={styles.uploadButton}>
                          {selectedFile && selectedFile.canceled ? (
                            <Text style={{ margin: 20 }}>
                              Favor tirar selfie com RG ou CNH
                            </Text>
                          ) : (
                            <Text style={{ margin: 20 }}>
                              Visualizar selfie
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>

                      <Modal
                        visible={isModalVisibleSelfieDocument}
                        transparent={true}
                        animationType="slide"
                      >
                        <View style={styles.modalContainer}>
                          {selectedFileWithDocument.assets &&
                          selectedFileWithDocument.assets[0] ? (
                            <Image
                              source={{
                                uri: selectedFileWithDocument.assets[0].uri,
                              }}
                              style={styles.modalImage}
                              resizeMode="contain"
                            />
                          ) : null}
                          <Button
                            title="Fechar"
                            onPress={toggleModalSelfieWithDocument}
                          />
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      {errorFileCam !== null ? (
                        <Text style={styles.errorText}>
                          Por favor, tire uma foto
                        </Text>
                      ) : null}
                      <TouchableOpacity
                        style={styles.button}
                        onPress={takePhotoWithDocument}
                      >
                        <Text style={styles.buttonText}>
                          Selfie com frente do documento RG ou CNH
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>

                <View style={styles.containerStepButton}>
                  <TouchableOpacity
                    style={styles.buttonStep}
                    onPress={() => setStep("3")}
                  >
                    <Text style={styles.buttonText}>Voltar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStep}
                    onPress={onSubmitForm}
                  >
                    <Text style={styles.buttonText}>Enviar</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </>
          ) : null}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
export default Signup;
