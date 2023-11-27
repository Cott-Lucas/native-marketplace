import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styled";
import DropDownComponent from "../../../common/DropDownComponent";

const FieldsDisabled = () => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Lucas Ottaviani</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>lucasottaviani97@outlook.com</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>(14) 99104-0564</PlaceholderDisabled>
      </InputDisabled>
      <DropDownComponent/>
      <InputDisabled>
        <PlaceholderDisabled>Password</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
