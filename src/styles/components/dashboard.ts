import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
  height: 100vh;

`;

export const Header = styled.div`
  background: ${p => p.theme.colors.purpleLight};
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: ${p => p.theme.spacing.vertical};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 80%;
`;

export const User = styled.div`
  display: flex;
  align-items:center;
  cursor: pointer;
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const UserName = styled.div`
  font-size: ${p => p.theme.fontSizes.default};
  color: ${p => p.theme.colors.textInPupleBase};
  margin: ${p => p.theme.spacing.horizontal};
`;

export const ProffyContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 80%;
  padding: 1.5rem;
  @media(max-width: 575px) {
    justify-content:center;
    margin: ${p => p.theme.spacing.vertical};
  }
`;

export const ProffyImgLogo = styled.img`
  @media(max-width: 1300px) {
    width: 40.0rem;
  }
  @media(max-width: 1124) {
    width: 30.0rem;
  }
  @media(max-width: 890px) {
    width: 25.0rem;
  }
  @media(max-width: 575px) {
    width: 86%;
  }
`;

export const ProffyImgIlustracao = styled.img`
  @media(max-width: 1300px) {
    width: 50.0rem;
  }
  @media(max-width: 1124px) {
    width: 45.0rem;
  }
  @media(max-width: 1100px) {
    width: 40.0rem;
  }
  @media(max-width: 1020px) {
    width: 35.0rem;
  }
  @media(max-width: 685px) {
    width: 25.0rem;
  }
  @media(max-width: 575px) {
    display: none
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 42vh;
  @media(max-width: 955px) {
    height: 49vh;
  }
  @media (max-width: 785px){
    height: 50vh;
  }
  @media (max-width: 510px) {
    height: 53vh;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  @media (max-width: 785px) {
    flex-direction: column;
  }

  @media (max-width: 510px){
    margin-top: 7rem;
  }
`;

export const Welcome = styled.div`
  font-weight: 400;
  color: ${p => p.theme.colors.textBase};
  font-size: ${p => p.theme.fontSizes.default};
  @media(max-width: 1080px) {
    font-size: ${p => p.theme.fontSizes.small};
  }
  @media(max-width: 955px) {
    font-size: 1.4rem;
  }
  @media (max-width: 785px){
    width: 100%;
    font-size: 3.0rem;
  }
  @media (max-width: 785px){
    font-size: 2.0rem;
  }
  @media (max-width: 375px){
    font-size: ${p => p.theme.fontSizes.small};
  }
`;

export const Bold = styled.div`
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.tiny};
  @media(max-width: 1080px) {
    font-size: ${p => p.theme.fontSizes.default};
  }
  @media(max-width: 955px) {
    font-size: 1.4rem;
  }
  @media (max-width: 785px){
    width: 100%;
    font-size: 4.0rem;
  }
  @media (max-width: 510px){
    font-size: 3.0rem;
  }
  @media (max-width: 375px){
    font-size: 2.0rem;
  }
`;

export const Connections = styled.div`
  text-align: right;
  font-size: ${p => p.theme.fontSizes.small};
  padding: ${p => p.theme.spacing.vertical};
  @media(max-width: 1080px) {
    font-size: 1.4rem;
  }

  @media (max-width: 785px){
    width: 100%;
    font-size: 1.8rem;
    text-align: right;
  }
  @media (max-width: 510px){
    font-size: 1.4rem;
  }
  @media (max-width: 375px){
    font-size: 1.2rem;
  }
`;

export const Actions = styled.div`
  margin: ${p => p.theme.spacing.vertical};
  display: flex;
  button + button {
    margin-left: ${p => p.theme.spacing.default};
  }
  @media(max-width: 785px) {
    width: 100%;
  }
  @media (max-width: 510px){
    flex-direction: column;
    
    button + button {
      margin: ${p => p.theme.spacing.vertical};
    }
  }
`;

export const btnAction = styled.button`
  display: flex;
  justify-content: space-around;
  border: none;
  align-items:center;
  border-radius: 0.8rem;
  width: 20.0rem;
  padding: 2.5rem;
  color: ${p => p.theme.colors.shape01};
  text-decoration-line: none;
  
  @media(max-width: 955px) {
    width: 15.0rem;
    padding: 2rem;
  }
  @media (max-width: 785px){
    width: 80%;
    padding: 4.0rem;
  }
  @media (max-width: 510px){
    width: 100%;
    padding: 4rem;
    justify-content: space-evenly;
  }

  @media (max-width: 420px){
    padding: 3rem;
  }
`;

export const Estudy = styled(btnAction)`
  background: ${p => p.theme.colors.primary};
  :hover, :focus {
    background: ${p => darken(0.1, p.theme.colors.primary)}
  }
` ;

export const Job = styled(btnAction)`
  background: ${p => p.theme.colors.greenDarken};
  :hover, :focus {
    background: ${p => darken(0.1, p.theme.colors.greenDarken)}
  }
` ;