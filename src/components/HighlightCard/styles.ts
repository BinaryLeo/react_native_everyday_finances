import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px; 
  margin-right: 16px;
  height: ${RFValue(300)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(40)}px; 
`;
export const Footer = styled.View``;
export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: 38px;
`;
export const LastTransaction = styled.Text` 
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
