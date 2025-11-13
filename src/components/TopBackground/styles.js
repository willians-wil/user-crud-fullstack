import styled from "styled-components";

//Tem que ser somente Background e não TopBackgrouond pois não deve ter o mesmo nome do componente

export const Background = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 800px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%; //define a largura máxima que um elemento pode ter
    max-height: 100%; // para definir a altura máxima que um elemento pode ter
  }
`;
