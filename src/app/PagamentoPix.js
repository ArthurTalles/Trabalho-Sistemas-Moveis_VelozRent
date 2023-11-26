import React from "react";
import { View, Text, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Estilos from "../estilos/Estilos";

const PagamentoPix = ({ navigation }) => {
  const handleProsseguir = () => {
    navigation.navigate("ReservaRealizada");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={Estilos.textStyle}>Pagamento PIX</Text>

      <QRCode
        value="SeuTextoAqui"
        size={200}
        logoBackgroundColor="transparent"
      />

      <Text style={Estilos.textStyle}>
        1 - Leia o código QR abaixo no aplicativo Pix {"\n"}2 - Conclua o
        depósito com seu banco
      </Text>

      <Button
        title="Prosseguir"
        onPress={handleProsseguir}
        style={Estilos.buttonStyle}
      />
    </View>
  );
};

export default PagamentoPix;
