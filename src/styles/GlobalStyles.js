// Ferramenta do styled-components para estlização Global
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

`;
// Use o arquivo main.jsx para importar o estilo global
//  createGlobalStyle, este arquivo esta dentro do component styled-component
