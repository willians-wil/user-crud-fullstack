// ROUTER ( é um componente da biblioteca React Router que serve como um contêiner para todas as rotas/abas/listas definidas em uma aplicação)

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
  {
    path: "/", //É o endereço que ficará em cima do navegador, é a raiz do me projeto
    element: <Home />, //Qual elemento irei chamar nesse caso é o elemento que está dentro do indx.jsx
  },
  {
    path: "/lista-de-usuarios", //Está é a minha nova página
    element: <ListUsers />,
  },
]);

export default router;

// path e element (São criação de telas, ou páginas)
