import styled from "styled-components";

export const Button = styled.button`
  margin-top: 15px;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content; //O elemento se ajusta ao tamanho do seu conteúdo interno, seja texto, imagens
  cursor: pointer;
  border-radius: 30px;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
// Configuração com props no Button

// Props são as propriedades passadas para o componente React.
// Aqui, se a prop theme for "primary", a borda será nenhuma (none).Caso contrário, a borda será 2px sólida com a cor #ffA500 (um tom de laranja)Resumo: A borda muda dependendo do tema do botão/componente.

//  ${(props) =>
//     props.theme === "primary"
//       ? "linear-gradient(180deg, #fe7e5d, 0%, #ff6378 100%)"
//       : "transparent"};
//   color: ${(props) => (props.$variant === "primary" ? "#fff" : " #383838")};

// &:hover {
//     background: ${(props) => (props.theme === "primary" ? "black" : "gray")};
//     //opacity: "0.8" Outra configuração
//   }
//   &:active {
//     background: ${(props) => (props.theme === "primary" ? "navy" : "red")};
//     //opacity: 0.5;
//   }
// border: ${(props) =>
//     props.theme === "primary" ? "none" : "2px solid #ffA500"};
