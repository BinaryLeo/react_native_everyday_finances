import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const UserWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0 24px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(7.5)}px;
  margin-right: ${RFPercentage(2)}px;
`;
export const User = styled.View`
  margin-left: ${RFPercentage(2)}px;
`;
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
 //add Feather library icons
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(24)}px; 
`;