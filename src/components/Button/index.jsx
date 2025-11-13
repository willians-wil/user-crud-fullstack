// index.jsx dentro ListUsers
import { PropTypes } from "prop-types";
import { Button } from "./styles";

function DefaultButton({ children, theme, ...props }) {
  //colocar (props ou data)
  //...spread operator (Signifca pegar todo o resto)
  
  //console.log(props); Aonde estava retornando as propriedades 
  
  //functio DefaultButton (info)
  // console.log(info);
  return (
    <Button {...props} theme={theme}>
      {" "}
      {children}{" "}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string, //Criei uma variável theme="theme" no arquivo principal index.jsx
};
export default DefaultButton;

//TypeScript -> Javascript com Tipagem

//Se der erro no children fazer a validação como no exemplo abaixo

// Antes do export default colocar dessa forma

// DefaultButton.protoTypes = {
//   children: PropTypes.node.isRequired
// }
