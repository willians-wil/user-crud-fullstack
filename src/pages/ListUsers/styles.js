import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContainerUsers = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr; /*Separa a tela em dois, e divide uma fração para cada, se fosse 3fr 1fr dividiria em 4 partes onde seria 3 para um e 1 para outro*/
  gap: 20px;
  margin: 5px 0;

  /*Configuração de responsividade*/

  @media (max-width: 750px) {
    grid-template-columns: 1fr; /*Quando a minha tela chegar a um limite de 750 px ele quebra em apenas 1 coluna ou 1fr (uma fração)*/
  }
`;
export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between; /*distribuir os elementos de forma que o espaço restante seja dividido igualmente entre os itens*/
  align-items: center;
  gap: 20px;
  max-width: 380px; /*define a largura máxima de um elemento, impedindo que ele cresça além de um valor específico*/

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;
export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
export const AvatarUser = styled.img`
  height: 80px;
`;
export const ButtonGoback = styled.button`
  padding: 12px 35px;
  font-size: 17px;
  text-transform: capitalize;
  border-radius: 15px;
  cursor: pointer;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  outline: none;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;

  &:hover {
    /* opacity: 0.8; */
    background: #914245;
  }

  &:active {
    opacity: 0.5;
  }
`;
