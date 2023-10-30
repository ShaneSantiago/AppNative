import React from "react";
import { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Styles/StylesSignupLegal";
import { TextInputMask } from "react-native-masked-text";
import * as ImagePicker from "expo-image-picker";
import { handleCepChange } from "./Requires/AddressRequire";
import { useNavigation } from "@react-navigation/native";

const SignupLegal = () => {
  const [step, setStep] = useState("1");
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [typeTaxation, setTypetaxation] = useState("");
  const [typeCompany, setTypeCompany] = useState("");
  const [cep, setCep] = useState("");
  const [addressData, setAddressData] = useState({});
  const [number, setNumber] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cardCnpj, setCardCnpj] = useState(null);
  const [contractImage, setContractImage] = useState(null);
  const [contractChange, setContractChange] = useState(null);
  const [balance, setBalance] = useState(null);
  const [imageAddress, setImageAddress] = useState(null);

  const [cpfSocio1, setCpfSocio1] = useState("");
  const [percentParticipationSocio1, setPercentParticipationSocio1] =
    useState("");
  const [socio1Signature, setSocio1Signature] = useState("");

  const [cpfSocio2, setCpfSocio2] = useState("");
  const [percentParticipationSocio2, setPercentParticipationSocio2] =
    useState("");
  const [socio2Signature, setSocio2Signature] = useState("");

  const [cpfSocio3, setCpfSocio3] = useState("");
  const [percentParticipationSocio3, setPercentParticipationSocio3] =
    useState("");
  const [socio3Signature, setSocio3Signature] = useState("");

  const [cpfAttorney1, setCpfAttorney1] = useState("");
  const [percentParticipationAttorney1, setPercentParticipationAttorney1] =
    useState("");

  const [cpfAttorney2, setCpfAttorney2] = useState("");
  const [percentParticipationAttorney2, setPercentParticipationAttorney2] =
    useState("");

  const [cpfAccountOperator1, setCpfAccountOperator1] = useState("");
  const [cpfAccountOperator2, setCpfAccountOperator2] = useState("");

  const [nameError, setNameError] = useState("");
  const [adddressError, setAddressError] = useState("");
  const [errorParners, setErrorParners] = useState("");
  const [errorAttorney, setErrorAttorney] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [errorValidateCpf, setErrorValidateCpf] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleContract, setModalVisibleContract] = useState(false);
  const [isModalVisibleChange, setModalVisibleChange] = useState(false);
  const [isModalVisiblebalance, setModalVisibleBalance] = useState(false);
  const [isModalVisibleAddress, setModalVisibleAddress] = useState(false);

  const navigation = useNavigation();

  const onSubmit = () => {
    if (
      name === "" &&
      selectedDate === "" &&
      typeTaxation === "" &&
      typeCompany === ""
    ) {
      setNameError("Campo obrigatório");
    } else {
      setStep("2");
    }
  };

  const onSubmitStep2 = () => {
    if (
      addressData.bairro === undefined ||
      addressData.logradouro === undefined ||
      addressData.localidade === undefined ||
      addressData.uf === undefined ||
      complemento === "" ||
      number === ""
    ) {
      setAddressError("Campo obrigatório");
    } else {
      setStep("3");
    }
  };

  const onSubmitAttorneys = () => {
    if (
      cpfSocio1 === "" ||
      percentParticipationSocio1 === "" ||
      socio1Signature === "" ||
      cpfSocio2 === "" ||
      percentParticipationSocio2 === "" ||
      socio2Signature === "" ||
      cpfSocio3 === "" ||
      percentParticipationSocio3 === "" ||
      socio3Signature === ""
    ) {
      setErrorParners("Campo obrigatório");
    } else if (
      cpfSocio1.length !== 14 ||
      cpfSocio2.length !== 14 ||
      cpfSocio3.length !== 14
    ) {
      setErrorValidateCpf("Verifique se você digitou todos os digitos do CPF");
    } else {
      setStep("5");
    }
  };

  const onSubmitAttorney = () => {
    if (
      cpfAttorney1 === "" ||
      percentParticipationAttorney1 === "" ||
      cpfAttorney2 === "" ||
      percentParticipationAttorney2 === "" ||
      cpfAccountOperator1 === "" ||
      cpfAccountOperator2 === ""
    ) {
      setErrorAttorney("Campo obrigatório");
    } else {
      navigation.navigate("sucessSignup");
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalContract = () => {
    setModalVisibleContract(!isModalVisibleContract);
  };
  const toggleModalChange = () => {
    setModalVisibleChange(!isModalVisibleChange);
  };
  const toggleModalBalance = () => {
    setModalVisibleBalance(!isModalVisiblebalance);
  };
  const toggleModalAddress = () => {
    setModalVisibleAddress(!isModalVisibleAddress);
  };

  const handleCep = (text) => {
    handleCepChange({ setCep, setAddressData, text });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setCardCnpj(result);
    }
  };

  const pickImageContract = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setContractImage(result);
    }
  };

  const pickImageContractChange = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setContractChange(result);
    }
  };

  const pickImageBalance = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setBalance(result);
    }
  };

  const pickImageAddress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result !== null && result !== undefined && !result.cancelled) {
      setImageAddress(result);
    }
  };

  const onSubmitFormImage = () => {
    if (
      cardCnpj &&
      cardCnpj.canceled === false &&
      contractImage &&
      contractImage.canceled === false &&
      contractChange &&
      contractChange.canceled === false &&
      balance &&
      balance.canceled === false &&
      imageAddress &&
      imageAddress.canceled === false
    ) {
      setStep("4");
    } else {
      setErrorImage("Selecione um arquivo");
    }
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAvoidingView
              style={{ flex: 1, backgroundColor: "white" }}
              contentContainerStyle={{ alignItems: "center" }}
              extraScrollHeight={100}
            >
              {step === "1" ? (
                <>
                  <View style={styles.container}>
                    <Text style={styles.label}>Razão Social?</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite aqui"
                      onChangeText={(text) => {
                        const sanitizedText = text.replace(/\.|-/g, "");
                        setName(sanitizedText);
                      }}
                      placeholderTextColor={nameError ? "red" : "#A9A9A9"}
                    />
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.label}>Data de abertura</Text>
                    <TextInputMask
                      style={styles.input}
                      type={"datetime"}
                      options={{
                        format: "DD/MM/YYYY",
                      }}
                      value={selectedDate}
                      onChangeText={(formatted, extracted) => {
                        setSelectedDate(formatted);
                      }}
                      placeholder="DD/MM/AAAA"
                      placeholderTextColor={nameError ? "red" : "#A9A9A9"}
                    />
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.label}>Tipo de tributação</Text>
                    <TextInput
                      style={styles.input}
                      value={typeTaxation}
                      placeholder="Simples Nacional, Lucro Presumido, Lucro Real, Isenta"
                      onChangeText={(text) => setTypetaxation(text)}
                      placeholderTextColor={nameError ? "red" : "#A9A9A9"}
                    />
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.label}>Natureza da pessoa</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite seu nome"
                      value={typeCompany}
                      onChangeText={(text) => setTypeCompany(text)}
                    />
                  </View>
                  <View style={styles.container}>
                    <Text style={styles.label}>Tipo de empresa?</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="MEI, Empresario Individual, Etc"
                      placeholderTextColor={nameError ? "red" : "#A9A9A9"}
                    />
                  </View>
                  <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Avançar</Text>
                  </TouchableOpacity>
                </>
              ) : null}

              {step === "2" ? (
                <>
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
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.bairro}
                      placeholder="Bairro"
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>Número</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Número"
                      value={number}
                      keyboardType="numeric"
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
                      onChangeText={(text) => setNumber(text)}
                    />

                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                      style={styles.input}
                      value={complemento}
                      placeholder="Complemento"
                      onChangeText={(text) => setComplemento(text)}
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.localidade}
                      placeholder="Cidade"
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>Estado</Text>
                    <TextInput
                      style={styles.input}
                      value={addressData.uf}
                      placeholder="Estado"
                      placeholderTextColor={adddressError ? "red" : "#A9A9A9"}
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
                        onPress={onSubmitStep2}
                      >
                        <Text style={styles.buttonText}>Avançar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              ) : null}

              {step === "3" ? (
                <>
                  <View style={styles.container}>
                    {cardCnpj ? (
                      <>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImage}
                        >
                          <Text style={styles.buttonText}>
                            Alterar imagem Cartao CNPJ
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModal}>
                          <View style={styles.uploadButton}>
                            {cardCnpj && cardCnpj.canceled ? (
                              <Text style={{ margin: 20 }}>
                                Favor selecionar arquivo
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
                            {cardCnpj.assets && cardCnpj.assets[0] ? (
                              <Image
                                source={{
                                  uri: cardCnpj.assets[0].uri,
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
                        {errorImage !== "" ? (
                          <>
                            <Text style={styles.errorText}>
                              Por favor, selecione o documento
                            </Text>
                          </>
                        ) : null}

                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImage}
                        >
                          <Text style={styles.buttonText}>
                            Foto do Cartao CNPJ atual
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}

                    {contractImage ? (
                      <>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageContract}
                        >
                          <Text style={styles.buttonText}>
                            Alterar imagem de contrato social
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModalContract}>
                          <View style={styles.uploadButton}>
                            {contractImage && contractImage.canceled ? (
                              <Text style={{ margin: 20 }}>
                                Favor selecionar arquivo
                              </Text>
                            ) : (
                              <Text style={{ margin: 20 }}>
                                Visualizar contrato social
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
                            {contractImage.assets && contractImage.assets[0] ? (
                              <Image
                                source={{
                                  uri: contractImage.assets[0].uri,
                                }}
                                style={styles.modalImage}
                                resizeMode="contain"
                              />
                            ) : null}
                            <Button
                              title="Fechar"
                              onPress={toggleModalContract}
                            />
                          </View>
                        </Modal>
                      </>
                    ) : (
                      <>
                        {errorImage !== "" ? (
                          <>
                            <Text style={styles.errorText}>
                              Por favor, selecione o documento
                            </Text>
                          </>
                        ) : null}
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageContract}
                        >
                          <Text style={styles.buttonText}>
                            Foto do contrato social
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}

                    {contractChange ? (
                      <>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageContractChange}
                        >
                          <Text style={styles.buttonText}>
                            Foto alteração contrato social (se tiver)
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModalChange}>
                          <View style={styles.uploadButton}>
                            {contractChange && contractChange.canceled ? (
                              <Text style={{ margin: 20 }}>
                                Favor selecionar arquivo
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
                            {contractChange.assets &&
                            contractChange.assets[0] ? (
                              <Image
                                source={{
                                  uri: contractChange.assets[0].uri,
                                }}
                                style={styles.modalImage}
                                resizeMode="contain"
                              />
                            ) : null}
                            <Button
                              title="Fechar"
                              onPress={toggleModalChange}
                            />
                          </View>
                        </Modal>
                      </>
                    ) : (
                      <>
                        {errorImage !== "" ? (
                          <>
                            <Text style={styles.errorText}>
                              Por favor, selecione o documento
                            </Text>
                          </>
                        ) : null}
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageContractChange}
                        >
                          <Text style={styles.buttonText}>
                            Foto alteração contrato social (se tiver)
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}

                    {balance ? (
                      <>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageBalance}
                        >
                          <Text style={styles.buttonText}>
                            Alterar imagem de ultimo balanço
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModalBalance}>
                          <View style={styles.uploadButton}>
                            {balance && balance.canceled ? (
                              <Text style={{ margin: 20 }}>
                                Favor selecionar arquivo
                              </Text>
                            ) : (
                              <Text style={{ margin: 20 }}>
                                Visualizar documento
                              </Text>
                            )}
                          </View>
                        </TouchableOpacity>

                        <Modal
                          visible={isModalVisiblebalance}
                          transparent={true}
                          animationType="slide"
                        >
                          <View style={styles.modalContainer}>
                            {balance.assets && balance.assets[0] ? (
                              <Image
                                source={{
                                  uri: balance.assets[0].uri,
                                }}
                                style={styles.modalImage}
                                resizeMode="contain"
                              />
                            ) : null}
                            <Button
                              title="Fechar"
                              onPress={toggleModalBalance}
                            />
                          </View>
                        </Modal>
                      </>
                    ) : (
                      <>
                        {errorImage !== "" ? (
                          <>
                            <Text style={styles.errorText}>
                              Por favor, selecione o documento
                            </Text>
                          </>
                        ) : null}
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageBalance}
                        >
                          <Text style={styles.buttonText}>
                            Foto do último balanço (se tiver)
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}

                    {imageAddress ? (
                      <>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageAddress}
                        >
                          <Text style={styles.buttonText}>
                            Alterar imagem comprovante de endereço
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModalAddress}>
                          <View style={styles.uploadButton}>
                            {imageAddress && imageAddress.canceled ? (
                              <Text style={{ margin: 20 }}>
                                Favor selecionar arquivo
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
                            {imageAddress.assets && imageAddress.assets[0] ? (
                              <Image
                                source={{
                                  uri: imageAddress.assets[0].uri,
                                }}
                                style={styles.modalImage}
                                resizeMode="contain"
                              />
                            ) : null}
                            <Button
                              title="Fechar"
                              onPress={toggleModalAddress}
                            />
                          </View>
                        </Modal>
                      </>
                    ) : (
                      <>
                        {errorImage !== "" ? (
                          <>
                            <Text style={styles.errorText}>
                              Por favor, selecione o documento
                            </Text>
                          </>
                        ) : null}
                        <TouchableOpacity
                          style={styles.button}
                          onPress={pickImageAddress}
                        >
                          <Text style={styles.buttonText}>
                            Foto do comprovante de endereço
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  <View style={styles.containerStepButton}>
                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={(text) => setStep("2")}
                    >
                      <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={onSubmitFormImage}
                    >
                      <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}

              {step === "4" ? (
                <>
                  <View>
                    <Text style={styles.label}>CPF do Sócio 1</Text>
                    {errorValidateCpf && cpfSocio1.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do Sócio 1"
                      value={cpfSocio1}
                      onChangeText={(text) => setCpfSocio1(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      % de Participação do Sócio 1
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a % de Participação do Sócio 1"
                      value={percentParticipationSocio1}
                      onChangeText={(text) =>
                        setPercentParticipationSocio1(text)
                      }
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      Sócio 1 Assina em Conjunto, Sozinho ou Não Assina
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a assinatura do Sócio 1"
                      value={socio1Signature}
                      onChangeText={(text) => {
                        const cleanedText = text.replace(/[._-]/g, "");
                        setSocio1Signature(cleanedText);
                      }}
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>CPF do Sócio 2</Text>
                    {errorValidateCpf && cpfSocio2.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do Sócio 2"
                      value={cpfSocio2}
                      onChangeText={(text) => setCpfSocio2(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      % de Participação do Sócio 2
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a % de Participação do Sócio 2"
                      value={percentParticipationSocio2}
                      onChangeText={(text) =>
                        setPercentParticipationSocio2(text)
                      }
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      Sócio 2 Assina em Conjunto, Sozinho ou Não Assina
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a assinatura do Sócio 2"
                      value={socio2Signature}
                      onChangeText={(text) => {
                        const cleanedText = text.replace(/[._-]/g, "");
                        setSocio2Signature(cleanedText);
                      }}
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>CPF do Sócio 3</Text>
                    {errorValidateCpf && cpfSocio3.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do Sócio 3"
                      value={cpfSocio3}
                      onChangeText={(text) => setCpfSocio3(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      % de Participação do Sócio 3
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a % de Participação do Sócio 3"
                      value={percentParticipationSocio3}
                      onChangeText={(text) =>
                        setPercentParticipationSocio3(text)
                      }
                      keyboardType="numeric"
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      Sócio 3 Assina em Conjunto, Sozinho ou Não Assina
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a assinatura do Sócio 3"
                      value={socio3Signature}
                      onChangeText={(text) => {
                        const cleanedText = text.replace(/[._-]/g, "");
                        setSocio3Signature(cleanedText);
                      }}
                      placeholderTextColor={errorParners ? "red" : "#A9A9A9"}
                    />
                  </View>

                  <View style={styles.containerStepButton}>
                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={(text) => setStep("3")}
                    >
                      <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={onSubmitAttorneys}
                    >
                      <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}

              {step === "5" ? (
                <>
                  <View style={styles.container}>
                    <Text style={styles.label}>CPF procurador 1</Text>
                    {errorValidateCpf && cpfAttorney1.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do procurador 1"
                      value={cpfAttorney1}
                      onChangeText={(text) => setCpfAttorney1(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      % de participação do procurador 1
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite porcentagem de participação procurador 1"
                      value={percentParticipationAttorney1}
                      onChangeText={(text) =>
                        setPercentParticipationAttorney1(text)
                      }
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>CPF procurador 2</Text>
                    {errorValidateCpf && cpfAttorney2.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite CPF do procurador 2"
                      value={cpfAttorney2}
                      onChangeText={(text) => setCpfAttorney2(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      % de participalão procurador 2
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite a % de participação procurador 2"
                      value={percentParticipationAttorney2}
                      onChangeText={(text) =>
                        setPercentParticipationAttorney2(text)
                      }
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>
                      Operador da conta (Pessoa que vai gerenciar a conta)
                    </Text>
                    <Text style={styles.label}>CPF do operador 1</Text>
                    {errorValidateCpf && cpfAccountOperator1.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do Operator 1"
                      value={cpfAccountOperator1}
                      onChangeText={(text) => setCpfAccountOperator1(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />

                    <Text style={styles.label}>CPF do operador 2</Text>
                    {errorValidateCpf && cpfAccountOperator2.length !== 14 ? (
                      <Text style={{ color: "red", marginLeft: 10 }}>
                        {errorValidateCpf}
                      </Text>
                    ) : null}
                    <TextInputMask
                      type="cpf"
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                      }}
                      style={styles.input}
                      placeholder="Digite o CPF do operador 2"
                      value={cpfAccountOperator2}
                      onChangeText={(text) => setCpfAccountOperator2(text)}
                      keyboardType="numeric"
                      placeholderTextColor={errorAttorney ? "red" : "#A9A9A9"}
                    />
                  </View>

                  <View style={styles.containerStepButton}>
                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={(text) => setStep("4")}
                    >
                      <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.buttonStep}
                      onPress={onSubmitAttorney}
                    >
                      <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignupLegal;
