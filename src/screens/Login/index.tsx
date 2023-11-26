import React from "react";
import BackIcon from "../../components/common/BackIcon";
import {
  Bold,
  CompanyLogo,
  Container,
  ForgetPassword,
  Input,
  InputContainer,
  Logo,
  RegisterText,
} from "./styled";
import DefaultButton from "../../components/common/DefaultButton";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const logo = require("../../../assets/images/logo2.png");
const compLogo = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>()

  const toRegister = () =>{
    navigation.navigate("Register")
  }

  const handleLogin = () => {
    Alert.alert("botão de login");
  };

  return (
    <Container contentContainerStyle={{paddingBottom: 40}}>
      <BackIcon marginLeft={20} />
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Digite seu email" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Digite sua Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry={true}
        />
      </InputContainer>
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      <DefaultButton
        buttonText="Fazer Login"
        buttonType="primary"
        marginVertical={40}
        buttonHandle={() => handleLogin()}
      />
      <RegisterText onPress={toRegister}>
        Você ainda não tem conta? <Bold>Registre-se aqui!</Bold>
      </RegisterText>
      <CompanyLogo source={compLogo}/>
    </Container>
  );
};

export default Login;
