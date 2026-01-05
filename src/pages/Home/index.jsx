// As iniciais das letras em maiúsculas como Container, TopBackgrond, significa que são components do styled-components

import { useRef } from "react"; //Ele retorna um objeto com uma propriedade current que pode ser mutável.
import api from "../../services/api";
import { useNavigate } from "react-router-dom"; //Navegação para outra página ao clicar no botão
import { Container, Form, ContainerInputs, InputLabel, Input } from "./styles";
import Title from "../../components/Title";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { handleApiError } from "../../utils/handlerApiError";
const Home = () => {
  const inputName = useRef();
  const inputAge = useRef(); //Três variaveis pois se trata de uma variável para cada name, age e email
  const inputEmail = useRef();

  const navigate = useNavigate(); //Para que ao clicar eu navegue para outra página

  async function registerNewUser() {
    //console.log(input.naem.current.value)
    //Toda vez que eu for buscar uma informação no banco de dados devo usar o async e o await
    try {
      const { data } = await api.post("/usuarios", {
        email: inputEmail.current.value, //Vou enviar um dado com nome email e dentro dele eu vou guardar a informação de inputEmail

        age: parseInt(inputAge.current.value), //Vou enviar um dado com nome age e dentro dele eu vou guardar a informação de inputAge
        //parseInt vai transformar tudo que estiver aqui dentro em um Int(inteiro) tranformando a string em inteiro, pois só assim o back end não dará problema

        name: inputName.current.value, //Vou enviar um dado com nome name e dentro dele eu vou guardar a informação de inputName
      }); //Ele irá acessar o meu servidor em usuários
      alert("Usuário cadastrado com sucesso!")
      navigate("/list-users");

      //após criar a função vá até o button e altere o type="submit" para type="button"
      // console.log(inputName.current.value); para que o clicar em cadastar ele me traga somente o valor dentro do input

      console.log(data); // O console.log server para guardar uma resposta pois o meu servidor sempre responde algo
    } catch (error) {
      handleApiError(error)
    }
  }


  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuários</Title>
        <div>
          <ContainerInputs>
            <InputLabel>
              Nome <span>*</span>
              <Input
                type="text"
                placeholder="Digite o seu nome"
                ref={inputName}
              />{" "}
              {/*serve para linkar cada um a sua variavel criada*/}
            </InputLabel>

            <InputLabel>
              Idade <span>*</span>
              <Input
                type="number"
                placeholder="Idade do usuário"
                ref={inputAge}
              />{" "}
              {/*serve para linkar cada um a sua variavel criada*/}
            </InputLabel>
          </ContainerInputs>
        </div>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input
            type="Email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />{" "}
          {/*serve para linkar cada um a sua variavel criada*/}
        </div>
      </Form>
      <div>
        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuários!
        </Button>
      </div>
      <Button type="button" onClick={() => navigate("/list-users")}>
        Ver lista de usuários
      </Button>
      {/* Para que ao clicar me leve para outra página */}
    </Container>
  );
};
export default Home;

/* 
 Antes de começar a criar a estrutura hmtl fazer uma análise para podermos adicionar os elementos
 <h1 style={{ color: "red", fontSize: 55 }}>Você é Pichuruco Biruleibe</h1> podemos estilizar no individual dessa forma dentro do container 
 import {App, App2} quando estiver dois arquivos ou duas funções
 
 Aula 12 estilizando a tela de cadastro de usários

Verificação

import Userimage from "/../assetes¹.."
import Trash from "./assets"

const value = true

<img src={value? trash : Userimage}
se o value for ?(verdadeiro) quero a imagem Trash :(else) Userimage
 */
