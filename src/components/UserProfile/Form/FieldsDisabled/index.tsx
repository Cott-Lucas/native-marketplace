import React from "react";
import { DropDownContainerDisabled, DropDownDisabled, InputDisabled, PlaceholderDisabled } from "./styled";
import { ArrowIcon } from "../../../common/DropDownComponent/styled";


const arrowIcon = require('../../../../../assets/icons/arrow-down.png')

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
      
      <DropDownContainerDisabled>
        <DropDownDisabled
        setSelected={()=>{}}
        data={[]}
        placeholder="Seus endereços"
        arrowicon={<ArrowIcon source={arrowIcon}/>}
        />
      </DropDownContainerDisabled>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
