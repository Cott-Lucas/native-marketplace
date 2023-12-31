import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const AdsContainer = styled.View`
  margin: 20px 0;
`;

export const DenounceText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
