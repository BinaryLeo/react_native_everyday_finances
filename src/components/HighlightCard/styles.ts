import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.shape};
width: ${RFValue(300)}px;
padding:19px 23px;
padding-bottom: ${RFValue(42)}px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;

export const Header = styled.View``
export const Title = styled.Text``
export const Icon = styled(Feather)`
 color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(24)}px;
`
export const Footer = styled.View``
export const Amount = styled.Text``
export const LastTransaction = styled.Text``