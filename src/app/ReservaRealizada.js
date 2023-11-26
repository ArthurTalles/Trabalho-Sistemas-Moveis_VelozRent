import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import Estilos from "../estilos/Estilos";

const localidadesDisponiveis = [
  "Aeroporto de São Paulo",
  "Shopping SP Market",
  "Moema",
  "Vila Olimpia",
  "Itaim Bibi",
  "Brooklin",
];

const ReservaRealizada = ({ navigation }) => {
  const [localidadeSorteada, setLocalidadeSorteada] = useState("");

  useEffect(() => {
    sortearLocalidade();
  }, []);

  const sortearLocalidade = () => {
    const localidadeSorteadaIndex = Math.floor(Math.random() * localidadesDisponiveis.length);
    const localidadeSorteada = localidadesDisponiveis[localidadeSorteadaIndex];
    setLocalidadeSorteada(localidadeSorteada);
  };

  const dataReserva = "2023-12-01";
  const metodoPagamento = "Pix";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={Estilos.textStyle}>Reserva Realizada!</Text>

      <Text style={Estilos.textStyle}>Data da Reserva: {dataReserva}</Text>

      {localidadeSorteada && (
        <Text style={Estilos.textStyle}>
          Localidade Selecionada: {localidadeSorteada}
        </Text>
      )}

      {metodoPagamento === "Cartão" && (
        <View>
          <Text>Informações do Cartão (fictícias):</Text>
          <Text>Número do Cartão: **** **** **** 1234</Text>
          <Text>Nome do Titular: John Doe</Text>
          <Text>Data de Validade: 12/25</Text>
          <Text>Código de Segurança: 123</Text>
        </View>
      )}

      <Button
        title="Concluir"
        onPress={() => navigation.navigate("ListaCarros")}
        style={Estilos.buttonStyle}
      />
    </View>
  );
};

export default ReservaRealizada;
