import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Checkbox from 'expo-checkbox';
import Estilos from "../estilos/Estilos";

const Reserva = ({ navigation }) => {
  const [extrasSelecionados, setExtrasSelecionados] = useState([]);

  const extrasDisponiveis = [
    { value: "Wi_fi_Movel", label: "Wi-Fi Móvel + R$ 45,00" },
    { value: "Seguro_Adicional", label: "Seguro Adicional + R$ 75,00" },
    { value: "Pacote_Limpeza", label: "Pacote de Limpeza + R$ 40,00" },
    { value: "Assentos", label: "Assentos de Carro para Crianças + R$ 50,00" },
    { value: "Motorista_Profissional", label: "Serviço de Motorista Profissional + R$ 200,00" },
  ];

  const toggleExtra = (extra) => {
    if (extrasSelecionados.includes(extra)) {
      setExtrasSelecionados(extrasSelecionados.filter((e) => e !== extra));
    } else {
      setExtrasSelecionados([...extrasSelecionados, extra]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={Estilos.textStyle}>Upgrades na sua reserva!</Text>

      {extrasDisponiveis.map((extra) => (
        <View key={extra.value} style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox 
            value={extrasSelecionados.includes(extra.value)}
            onValueChange={() => toggleExtra(extra.value)}
          />
          <Text>{extra.label}</Text>
        </View>
      ))}

      <Button
        title="Prosseguir"
        onPress={() =>
          navigation.navigate("Pagamento", {
            extrasSelecionados,
          })
        }
      />
    </View>
  );
};

export default Reserva;
