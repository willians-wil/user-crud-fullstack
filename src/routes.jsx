// ROUTER ( é um componente da biblioteca React Router que serve como um contêiner para todas as rotas/abas/listas definidas em uma aplicação)

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import Edituser from "./pages/EditUser";
const router = createBrowserRouter([
  {
    path: "/", //É o endereço que ficará em cima do navegador, é a raiz do meu projeto
    element: <Home />, //Qual elemento irei chamar nesse caso é o elemento que está dentro do indx.jsx
  },
  {
    path: "/list-users", //Está é a minha nova página
    element: <ListUsers />,
  },
  {
  path: "/edit-user/:id",
  element: <Edituser />
  }
]);

export default router;

// path e element (São criação de telas, ou páginas)
