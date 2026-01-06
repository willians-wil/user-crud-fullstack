//  AXIOS (É a utilização de biblioteca para fazer requisições Http, ele simplifica a busca e o envio de dados em um aplicativo React

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export default api;

//Importar o AXIOS no arquivo index.jsx
//OBS. toda vez que acessamos um servidor externo chamamos de promise
//Async (indica que ela pode levar tempo para ser concluída e sempre retorna uma promise)
//Await (Serve para pausar a execução da função até que uma Promise seja resolvida ou rejeitada)
