//Toda vez que criamos um componente temos que inserir a função

// Utilizaremos a biblioteca React Router dom para a que a navegaçao de uma pagina principal para a outra seja feita
// npm install react-router-dom
import { useEffect, useState } from "react";
import api from "../../services/api";
// É um hook do React que permite executar efeitos colaterais em componentes funcionais, como buscar dados
import Button from "../../components/Button";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom"; //Navegação programática, retorna uma função que você pode usar para ir para qualquer rota.
import TopBackground from "../../components/TopBackground";
import Trash from "../../assets/trash (1).svg";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcon,
  ButtonGoback,
} from "./styles";

function ListUsers() {
  //Demonstração de como colocar um array na tela
  const [users, setUsers] = useState([]); //Estado do React (Toda vez que eu quero alterar algo na tela, visualmente fazer uma alteração na DOM)
  const navigate = useNavigate();
  //Estrutura do useEffect (Acessar uma api com async e await, usar essa estrutura)
  useEffect(() => { ////Toda vez que a tela carrega, o useEffect é chamado ou seja toda vez que uma determinada variável MUDA de valor, ele é chamado
    async function getUsers() {
      //Busco os dados na api
      const { data } = await api.get("/usuarios"); //Mostra somente a informação de nome, idade e email, ou seja só os dados
      setUsers(data);
      // const usersFromApi = await api.get("/usuarios"); //Carrega toda a informação necessária do usuário criado (config, data, headers, request, status....)
      // console.log(usersFromApi);
    }
    getUsers();
  }, []);
  //funcão na condição de deletar usuário
   async function handleDeleteUser(id) {
  const confirmDelete = window.confirm( //window.confirm Mostra uma caixa de confirmação, e espera o usuário responder
    "Tem certeza que deseja excluir este usuário?"
  )
  if (!confirmDelete) return //se confirmDelete não foi confirmado "return" pare tudo

  try{
    await api.delete(`/usuarios/${id}`)
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !==id) //O id deste usuário é diferente do id que eu quero remover? Só mantenha o usuário cujo id seja DIFERENTE do id que foi deletado
    )
  }catch(error){
  console.error("Erro ao deletar usuário", error)
  }
}

   
  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {/*Para retornar um array criado na minha tela usamos o map que retorna item por item*/}
        {users.map(
          (
            user //Dentro de chaves é javaScript, dentro de parenteses é Html. O JSX é a mistura de html e Javascript
          ) => (
            <CardUsers key={user.id}>
              {/*A kEY é um atributo especial usado ao renderizar listas de elementos para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos, sempre atribuir ao elemento pai*/}
              <AvatarUser
                // O template string é para que aceite a variável {user.id}
                src={`https://avatar.iran.liara.run/public?username=${user.id}`}
              />
              {/*Tirar o boy para que seja aleatório tanto menino, quanto menina e o user.id significa que cada usuário irá mostrar um avatar diferente*/}
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p> {/*Iterar(buscar item por item) */}
              </div>

              {/* Quando o usuário clicar no ícone, a função que apaga o usuário será executada, usando o ID desse usuário específico(LOCALMENTE sem a necessidade da chamada API)*/}
              <TrashIcon
                src={Trash}
                alt="icone-lixo"
                onClick={() => handleDeleteUser(user.id)}
              />
            </CardUsers>
          )
        )}
        ;
      </ContainerUsers>

      <ButtonGoback type="button" onClick={() => navigate("/")}>
        {" "}
        {/*navigate("/") leva para a rota raiz */}
        voltar
      </ButtonGoback>
    </Container>
  );
}

export default ListUsers;
//Eu posso usar o button criado e usá-lo em qualquer parte da minha aplicação

