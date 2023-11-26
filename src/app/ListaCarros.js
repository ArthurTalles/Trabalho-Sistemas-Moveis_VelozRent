import React, { useState, useEffect  } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  Button,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import Estilos from "../estilos/Estilos";
import { LinearGradient } from "expo-linear-gradient";

const App = ({ navigation }) => {
  const [carroDigitado, setCarroDigitado] = useState("");
  const [carrosEncontrados, setCarrosEncontrados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const [mostrarCarrosEncontrados, setMostrarCarrosEncontrados] =
    useState(false);

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const imageWidth = screenWidth * 0.8;

  const carrosFicticios = [
    {
      id: "1",
      nome: "Tesla Model S",
      imagem: require("../imagens/teslasf.png"),
      descricao: "Carro elétrico premium. ",
      autonomia: "557km.",
      valorDiario: 170,
    },
    {
      id: "2",
      nome: "Nissan Leaf",
      imagem: require("../imagens/leafsf.png"),
      descricao: "Carro compacto elétrico.",
      autonomia: "272km.",
      valorDiario: 130,
    },
    {
      id: "3",
      nome: "Peugeot e-208 GT",
      imagem: require("../imagens/208SF.png"),
      descricao: "Carro compacto elétrico.",
      autonomia: "220km.",
      valorDiario: 120,
    },
    {
      id: "4",
      nome: "Volvo c40",
      imagem: require("../imagens/c40sf1.png"),
      descricao: "Suv elétrico premium.",
      autonomia: "247km.",
      valorDiario: 170,
    },
    {
      id: "5",
      nome: "Peugeot e-2008",
      imagem: require("../imagens/2008SF.png"),
      descricao: "Suv elétrico.",
      autonomia: "234km.",
      valorDiario: 160,
    },
        {
      id: "6",
      nome: "BYD Seagull",
      imagem: require("../imagens/Byd1SF.png"),
      descricao: "Carro compacto elétrico.",
      autonomia: "350km.",
      valorDiario: 100,
    },
    {
      id: "7",
      nome: "BYD Dolphin ",
      imagem: require("../imagens/BydSF2.png"),
      descricao: "Carro compacto elétrico.",
      autonomia: "291km.",
      valorDiario: 110,
    },
    {
      id: "8",
      nome: " BMW iX3",
      imagem: require("../imagens/ix3sf1.png"),
      descricao: "Suv elétrico premium.",
      autonomia: "113km.",
      valorDiario: 200,
    },
    {
      id: "9",
      nome: "Fiat 500",
      imagem: require("../imagens/500sf.png"),
      descricao: "Carro compacto elétrico.",
      autonomia: "227km.",
      valorDiario: 140,
    },
    {
      id: "10",
      nome: "JAC-JS4",
      imagem: require("../imagens/EJS4SF.png"),
      descricao: "Suv elétrico.",
      autonomia: "256km.",
      valorDiario: 150,
    },
    {
      id: "11",
      nome: "JAC-EJS1",
      imagem: require("../imagens/ejs1sf.png"),
      descricao: "Compacto elétrico.",
      autonomia: "272km.",
      valorDiario: 100,
    },
     {
      id: "12",
      nome: "Porsche Taycan",
      imagem: require("../imagens/taycan.png"),
      descricao: "Esportivo elétrico.",
      autonomia: "362km.",
      valorDiario: 800,
    },
     {
      id: "13",
      nome: "Audi RS e-tron GT",
      imagem: require("../imagens/etrongt.png"),
      descricao: "Esportivo elétrico.",
      autonomia: "345km.",
      valorDiario: 750,
    },
  ];

    useEffect(() => {
    // Inicializa a lista de carros quando a tela é aberta
    setCarrosEncontrados(carrosFicticios);
    setMostrarCarrosEncontrados(true);
  }, []);

  const buscarCarro = () => {
    const resultadoBusca = carrosFicticios.filter((carro) =>
      carro.nome.toLowerCase().includes(carroDigitado.toLowerCase())
    );
    setCarrosEncontrados(resultadoBusca);
    setMostrarCarrosEncontrados(true);
  };

  const CarroItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setCarroSelecionado(item);
        setModalVisible(true);
      }}
    >
      <View style={Estilos.containerCarro}>
        <LinearGradient colors={["#000000", "#264296"]}>
          <View style={Estilos.linha} />
          <Text
            style={
              (Estilos.buttonStyle,
              { color: "white", fontWeight: "bold", alignSelf: "center" })
            }
          >
            {item.nome}
          </Text>
          <Image
            style={{
              width: imageWidth,
              height: imageWidth * 0.75,
              alignSelf: "center",
            }}
            source={item.imagem}
          />
          <View style={Estilos.containerInformacoes}>
            <Text
              style={
                (Estilos.buttonStyle,
                { color: "white", textAlign: "center", fontWeight: "bold" })
              }
            >
              {item.descricao}
            </Text>            
            <Text
              style={
                (Estilos.buttonStyle,
                { color: "white", textAlign: "center", fontWeight: "bold" })
              }
            >
            Autonomia:  {item.autonomia}
            </Text>
            <Text
              style={
                (Estilos.buttonStyle,
                { color: "white", textAlign: "center", fontWeight: "bold" })
              }
            >
              Valor Diário: R$ {item.valorDiario}
            </Text>
          </View>
          <Button
            title="Reservar"
            onPress={() => navigation.navigate("Reserva")}
          />
        </LinearGradient>
      </View>
      <View>
        <Text></Text>
      </View>
    </Pressable>
    
  );

  return (
    
      <SafeAreaView style={Estilos.safeAreaView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={Estilos.centeredView}>
          <View
            style={[
              Estilos.modalView,
              { maxHeight: screenHeight * 0.7, padding: 10 },
            ]}
          >
            <Text style={Estilos.modalTextTitle}>{carroSelecionado?.nome}</Text>
            <View style={Estilos.alignVertical}>
              <Image
                style={{
                  width: imageWidth,
                  height: imageWidth * 0.75,
                  alignSelf: "center",
                }}
                source={carroSelecionado?.imagem}
              />
              <Text style={Estilos.modalText}>
                {carroSelecionado?.descricao}
              </Text>
              <Text style={Estilos.modalText}>
                Valor Diário: R$ {carroSelecionado?.valorDiario}
              </Text>
              <Button
                onPress={() => setModalVisible(false)}
                title="Voltar"
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={Estilos.alignVertical}>
        <View style={{ flex: 0.1 }} />
        <Text style={Estilos.buttonStyle}>Buscar Carro</Text>
      </View>
      <TextInput
        autoCorrect={false}
        style={Estilos.textInput}
        clearButtonMode="always"
        placeholder="Digite o nome do carro"
        onChangeText={(value) => setCarroDigitado(value)}
      />
      <Button title="Buscar" onPress={buscarCarro} />
      {mostrarCarrosEncontrados && (
        <Text
          style={
            (Estilos.buttonStyle,
            { color: "white", textAlign: "center", fontWeight: "bold" })
          }
        >
          Carros Encontrados:
        </Text>
      )}
      <FlatList
        style={{ marginTop: 10 }}
        data={carrosEncontrados}
        renderItem={CarroItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
