import { View, Text } from "react-native";
import React, { SetStateAction } from "react";
import { ArrowIcon, DropDown, DropDownContainer } from "./styled";

const arrowIcon = require("../../../../assets/icons/arrow-down.png");

interface DropDownProps {
  data: Object[];
  placeholder: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}

const Data = [
  {
    value: "teste 1",
  },
  {
    value: "teste 2",
  },
];

const DropDownComponent = ({
  data,
  placeholder,
  setSelected,
}: DropDownProps) => {
  const noAddress = [{ value: "Sem endereços no momento!", disabled: true }];
  const checkedData = (data?.length <= 0) ? noAddress : data;

  return (
    <DropDownContainer>
      <DropDown
        setSelected={setSelected}
        data={checkedData}
        placeholder={placeholder}
        save="value"
        search={false}
        arrowicon={<ArrowIcon source={arrowIcon} />}
      />
    </DropDownContainer>
  );
};

export default DropDownComponent;
