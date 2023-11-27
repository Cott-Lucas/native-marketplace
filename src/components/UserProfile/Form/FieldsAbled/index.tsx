import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { InputContainer } from "../styled";
import { AddressText, Input } from "./styled";
import DefaultButton from "../../../common/DefaultButton";
import DropDownComponent from "../../../common/DropDownComponent";

const FieldsAbled = () => {
  const [select, setSelect] = useState("");

  const Data = [{value: "endereço de teste", disabled: true}]

  return (
    <>
      <InputContainer>
        <Input value="Lucas Ottaviani" />
      </InputContainer>
      <InputContainer>
        <Input value="lucasottavini97@outlook.com" />
      </InputContainer>
      <InputContainer></InputContainer>
        <Input value="(14) 99104-0564" />
      </InputContainer>
      <DropDownComponent data={Data} placeholder="Seus endereços" setSelected={setSelect}/>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmar Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>

      <AddressText
        onPress={() => {
          Alert.alert("A");
        }}
      >
        Gerenciar Endereço
      </AddressText>

      <DefaultButton marginVertical={10} buttonText="Salvar alterações" buttonHandle={() => {
          Alert.alert("A");
        }} buttonType="primary" />
    </>
  );
};

export default FieldsAbled;
