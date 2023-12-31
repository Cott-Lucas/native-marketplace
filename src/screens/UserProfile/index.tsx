import React from "react";
import { Container, DeleteAcc, LogOutBtn, LogOutText } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserProfile/Form";
import UserAds from "../../components/UserProfile/UserAds";
import { Alert } from "react-native";

const Data = [
  {
    id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 3 jogos acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "2",
    productImage:
      "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
    price: "2600",
    title: "Playstation 5 novo com 1 jogo acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 2 jogos acompanhando",
    publishedData: "14/02/23",
  },
];

const UserProfile = () => {
  const handleDeleteAcc = () => {
    Alert.alert(
      "Você tem certeza?",
      "Ao fazer isso você excluirá sua conta para sempre",
      [{
        text: "Sim",
        onPress: ()=>{
          Alert.alert("Você deletou a sua conta")
        }
      }, {
        text: "Não"
      }
    ]
    );
  };
  const handleLogOut = () => {
    Alert.alert(
      "Desconectar",
      "Você deseja desconectar?",
      [{
        text: "Sim",
        onPress: ()=>{
          Alert.alert("Deslogando")
        }
      }, {
        text: "Não"
      }
    ]
    );
  };

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 120 }}>
        <DefaultTitle fontSize={20} title="MEU PERFIL" />
        <ProfileInfo />
        <Form />
        <UserAds product={Data} seller={false}/>
        <LogOutBtn onPress={handleLogOut}>
          <LogOutText>Sair da sua conta</LogOutText>
        </LogOutBtn>
        <DeleteAcc onPress={handleDeleteAcc}>Excluir Conta</DeleteAcc>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
