import React, { useState } from "react";
import { Input, InputContainer, InputMask } from "./styled";

const Form = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <InputContainer>
        <Input placeholder="Nome e Sobrenome" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <InputMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          placeholder="(XX) XXXXX-XXXX"
          placeholderTextColor="#C0C0C1"
          value={phone}
          onChangeText={(val) => {
            setPhone(val);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirme sua Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
    </>
  );
};

export default Form;
