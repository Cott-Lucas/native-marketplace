import React from "react";
import { AcceptTerms, CompanyLogo, Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const compLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>()

  const toLogin = () =>{
    navigation.navigate("Login")
  }

  return (
    <Container contentContainerStyle={{paddingBottom: 60}}>
      <BackIcon marginLeft={20}></BackIcon>
      <Title>CRIAR UMA CONTA</Title>
      <Form />
      <DefaultButton
        buttonText="FAZER REGISTRO"
        buttonType="primary"
        marginVertical={20}
        buttonHandle={() => {}}
      />
      <AcceptTerms>Ao fazer o registro aceito{'\n'} os termos de política de privacidade</AcceptTerms>
      <DefaultButton
        buttonText="FAZER LOGIN"
        buttonType="secundary"
        marginVertical={20}
        buttonHandle={toLogin}
        
      />
      <CompanyLogo source={compLogo}/>
    </Container>
  );
};

export default Register;
