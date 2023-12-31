import React from "react";
import {
  Container,
  DefaultText,
  Hr,
  Name,
  NamePhoneContainer,
  Phone,
  PrincipalInfoContainer,
} from "./styled";
import { AirbnbRating } from "react-native-ratings";

const ProfileInfo = () => {
  const Rate = 1;
  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>Lucas</Name>
            <Phone>(14) 99104-0564</Phone>
          </NamePhoneContainer>
          {!Rate ? (
            <DefaultText>Sem Avaliações</DefaultText>
          ) : (
            <AirbnbRating
              selectedColor="#5f96ed"
              showRating={false}
              isDisabled={true}
              size={16}
              defaultRating={Rate}
              starContainerStyle={{
                paddingTop: 4,
              }}
            />
          )}
        </PrincipalInfoContainer>
        <DefaultText>Usuário desde 20/04/23</DefaultText>
        <DefaultText>04 anúncios ativos</DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
