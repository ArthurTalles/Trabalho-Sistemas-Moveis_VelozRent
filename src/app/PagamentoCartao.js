import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Estilos from "../estilos/Estilos";

const PagamentoCartao = ({ navigation }) => {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeTitular, setNomeTitular] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [codigoSeguranca, setCodigoSeguranca] = useState("");

  const handleProsseguir = () => {
    navigation.navigate("ReservaRealizada");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={Estilos.textStyle}>Pagamento com Cartão</Text>

      <Text style={Estilos.textStyle}>Número do Cartão:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          width: 200,
        }}
        keyboardType="numeric"
        onChangeText={(text) => setNumeroCartao(text)}
        value={numeroCartao}
      />

      <Text style={Estilos.textStyle}>Nome do Titular:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          width: 200,
        }}
        onChangeText={(text) => setNomeTitular(text)}
        value={nomeTitular}
      />

      <Text style={Estilos.textStyle}>Data de Validade:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          width: 200,
        }}
        placeholder="MM/AA"
        onChangeText={(text) => setDataValidade(text)}
        value={dataValidade}
      />

      <Text style={Estilos.textStyle}>Código de Segurança:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          width: 200,
        }}
        keyboardType="numeric"
        onChangeText={(text) => setCodigoSeguranca(text)}
        value={codigoSeguranca}
      />

      <Button
        title="Prosseguir"
        onPress={handleProsseguir}
        style={Estilos.buttonStyle}
      />
    </View>
  );
};

export default PagamentoCartao;
