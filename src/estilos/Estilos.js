import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonStyle: {
    marginVertical: 10,
    width: "50%",
  },
  textStyle: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    width: "50%",
    fontWeight: "bold",
  },
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  login: {
    color: "white",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    marginTop: 20,
    fontSize: 15,
    height: 40,
    width: 350,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 0,
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 16,
    width: 120,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  imagemPersonagem: {
    width: 200,
    height: 350,
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
  },
  logo: {
    width: 250,
    height: 40,
    alignSelf: "center",
  },
  escudoLogo: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  detalhePersonagem: {
    color: "white",
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  detalheDescricaoPersonagem: {
    color: "white",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
  },
  detalheDescricaoPersonagemAmarelo: {
    color: "yellow",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "justify",
  },
  linkPersonagem: {
    color: "#66ccff",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
  },
  alignVertical: {
    alignSelf: "center",
  },
  appContainer: {
    flex: 1,
  },
  appImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  appFadein: {
    width: 250,
    height: 50,
    alignSelf: "center",
  },
  sobreText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center", 
  },
  containerCarro: {
    borderRadius: 5,
    margin: 5,
    padding: 2,
    elevation: 3,
  },
  containerInformacoes: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});