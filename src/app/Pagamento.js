import { View, Text, Button } from "react-native";
import Estilos from "../estilos/Estilos";

const Pagamento = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={Estilos.textStyle}>Pagamento PIX</Text>
      <Button
        title="Prosseguir"
        onPress={() => navigation.navigate("PagamentoPix")}
        style={Estilos.buttonStyle}
      />

      <Text style={Estilos.textStyle}>Pagamento Cartão</Text>
      <Button
        title="Prosseguir"
        onPress={() => navigation.navigate("PagamentoCartao")}
        style={Estilos.buttonStyle}
      />

      <Text style={Estilos.textStyle}>Pagamento na retirada</Text>
      <Button
        title="Prosseguir"
        onPress={() => navigation.navigate("ReservaRealizada")}
        style={Estilos.buttonStyle}
      />
    </View>
  );
};

export default Pagamento;
