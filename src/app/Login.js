import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  Modal,
} from "react-native";
import Estilos from "../estilos/Estilos";

const Login = ({ navigation }) => {
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  let parametros = {
    navigation: navigation,
    activity: setActivity,
    modalVisible: setModalVisible,
    description: setDescription,
  };

  const handleLogin = () => {
    if (!user || !password) {
      setDescription("Preencha todos os campos obrigatórios!");
      setModalVisible(true);
      return;
    }

    setActivity(true);

    setTimeout(() => {
      setActivity(false);
      navigation.navigate("ListaCarros");
    }, 2000);
  };

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={Estilos.centeredView}>
          <View style={Estilos.modalView}>
            <Text style={Estilos.modalText}>{description}</Text>
            <View style={Estilos.button}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title="Fechar"
                color="darkblue"
              />
            </View>
          </View>
        </View>
      </Modal>
      <Image style={Estilos.logo} source={require("../imagens/logo.png")} />
      <Text style={Estilos.login}>E-mail:</Text>
      <TextInput
        autoCorrect={false}
        placeholder={"Digite seu e-mail"}
        placeholderTextColor="grey"
        style={Estilos.textInput}
        clearButtonMode="always"
        value={user}
        onChangeText={(value) => setUser(value)}
      />
      <Text style={Estilos.login}>Senha:</Text>
      <TextInput
        autoCorrect={false}
        placeholder={"Digite sua senha"}
        placeholderTextColor="grey"
        secureTextEntry={true}
        style={Estilos.textInput}
        clearButtonMode="always"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <View style={Estilos.button}>
        <Button title="Login" onPress={handleLogin} color="black" />
      </View>
      <View style={{ marginTop: 10 }}>
        <ActivityIndicator size="large" color="#00ff00" animating={activity} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
