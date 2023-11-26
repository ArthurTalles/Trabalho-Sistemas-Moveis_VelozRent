import React, { useEffect, useRef } from "react";
import { Animated, ImageBackground, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";

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

export default () => (
  <View style={Estilos.appContainer}>
    <ImageBackground
      source={require("../imagens/background.jpg")}
      resizeMode="cover"
      style={Estilos.appImage}
      imageStyle={{ opacity: 0.3 }}
    >
      <FadeInView
        style={
          (Estilos.appFadein, { height: 200, margin: 30, borderRadius: 10 })
        }
      >
        <View>
          <Text style={Estilos.sobreText} text-overflow="clip">
            A VelozRent é uma empresa brasileira que oferece aluguel de carros
            elétricos por hora, dia ou semana, nos operamos em São Paulo,
            Oferecemos uma variedade de carros elétricos para escolher,
            incluindo carros pequenos, sedãs e SUVs
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Desenvolvido por:</Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Arthur Talles Alves</Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Edgar da Silva Santos</Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Giselly Gênesis Santana de Andrade</Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Julianna Gariglio Pinheiro</Text>
        </View>
        <View>
          <Text style={Estilos.sobreText}>Luiz Augusto Andrade Lima</Text>
        </View>
      </FadeInView>
    </ImageBackground>
  </View>
);
