import React, { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import Estilos from "./src/estilos/Estilos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/app/Login";
import Sobre from "./src/app/Sobre";
import Reserva from "./src/app/Reserva";
import ListaCarros from "./src/app/ListaCarros";
import Pagamento from "./src/app/Pagamento";
import PagamentoPix from "./src/app/PagamentoPix";
import PagamentoCartao from "./src/app/PagamentoCartao";
import ReservaRealizada from "./src/app/ReservaRealizada";

const Stack = createNativeStackNavigator();

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Main = ({ navigation }) => (
  <View style={Estilos.appContainer}>
    <ImageBackground
      source={require("./src/imagens/background.jpg")}
      resizeMode="cover"
      style={Estilos.appImage}
      imageStyle={{ opacity: 0.3 }}
    >
      <FadeInView style={Estilos.appFadein}>
        <Image
          style={Estilos.logo}
          source={require("./src/imagens/logo.png")}
        />
        <View>
          <Text></Text>
        </View>
        <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
        <View>
          <Text> </Text>
        </View>
  
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
      </FadeInView>
    </ImageBackground>
  </View>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0080ff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "VelozRent - Login", headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "VelozRent - Login" }}
      />
      <Stack.Screen
        name="ListaCarros"
        component={ListaCarros}
        options={{ title: "VelozRent - ListaCarros" }}
      />
      <Stack.Screen
        name="Reserva"
        component={Reserva}
        options={{ title: "VelozRent - Reserva" }}
      />
      <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{ title: "VelozRent - Pagamento" }}
      />
      <Stack.Screen
        name="PagamentoPix"
        component={PagamentoPix}
        options={{ title: "VelozRent - Pagamento Pix" }}
      />
      <Stack.Screen
        name="PagamentoCartao"
        component={PagamentoCartao}
        options={{ title: "VelozRent - Pagamento Cartão" }}
      />
      <Stack.Screen
        name="ReservaRealizada"
        component={ReservaRealizada}
        options={{ title: "VelozRent - Reserva Realizada!" }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: "VelozRent - Sobre" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
