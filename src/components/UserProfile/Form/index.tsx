import React, { useState } from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styled";
import { Alert } from "react-native";
import FieldsDisabled from "./FieldsDisabled";
import FieldsAbled from "./FieldsAbled";

const BtnImage = require("../../../../assets/icons/edit.png");

const Form = () => {
  const [editable, setEditable] = useState(false);

  const toggleEdit = () => {
    setEditable(!editable);
  };

  return (
    <Container>
      <EditBtnContainer>
        <EditBtn onPress={toggleEdit}>
          <BtnImg source={BtnImage} />
        </EditBtn>
      </EditBtnContainer>
      {!editable ? <FieldsDisabled /> : <FieldsAbled />}
    </Container>
  );
};

export default Form;
