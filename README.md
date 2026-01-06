# User CRUD Fullstack

Projeto **fullstack** de CRUD de usuários desenvolvido com **Node.js, Express, Prisma, MongoDB e React**, seguindo boas práticas de organização, padronização de erros HTTP e estrutura próxima ao ambiente profissional.

Este projeto foi construído com foco em **aprendizado prático**, **qualidade de código** e **preparação para o mercado**, simulando um cenário real de aplicação utilizada em ambientes corporativos.

---

## 🧩 Funcionalidades

### Backend

- Criar usuário
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Deletar usuário
- Validações de dados
- Padronização de erros HTTP (400, 404, 409, 500)

### Frontend

- Listagem de usuários
- Criação de usuário
- Edição de usuário
- Exclusão de usuário
- Requisições centralizadas em um handler de API
- Tratamento de estados de carregamento e erro

---

## 🛠️ Tecnologias utilizadas

### Backend

- Node.js
- Express
- Prisma ORM
- MongoDB

### Frontend

- React
- React Router DOM
- Axios

---

## 📁 Estrutura do projeto

```
user-crud-fullstack
├─ backend
│  ├─ prisma
│  ├─ src
│  │  ├─ controllers
│  │  ├─ routes
│  │  └─ server.js
│  └─ package.json
│
├─ frontend
│  ├─ src
│  │  ├─ pages
│  │  ├─ services
│  │  └─ routes.jsx
│  └─ package.json
│
├─ .gitignore
└─ README.md
```

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- MongoDB em execução (local ou cloud)
- Gerenciador de pacotes (npm ou yarn)

### Backend

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

O servidor iniciará em:

```
http://localhost:3333
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação React iniciará em:

```
http://localhost:5173
```

---

## 🔗 Endpoints da API

| Método | Rota          | Descrição               |
| ------ | ------------- | ----------------------- |
| GET    | /usuarios     | Lista todos os usuários |
| GET    | /usuarios/:id | Busca usuário por ID    |
| POST   | /usuarios     | Cria novo usuário       |
| PUT    | /usuarios/:id | Atualiza usuário        |
| DELETE | /usuarios/:id | Remove usuário          |

---

## 📌 Padrões aplicados

- Separação de responsabilidades (routes, controllers)
- Código limpo e legível
- Tratamento consistente de erros
- Estrutura preparada para escalar
- Projeto organizado para futura integração com CI/CD

---

## 🎯 Objetivo do projeto

Este projeto tem como objetivo consolidar conhecimentos em **desenvolvimento fullstack**, boas práticas de API REST e integração frontend/backend, servindo como **item de portfólio profissional**.

---

## 👤 Autor

Desenvolvido por **Willians Narciso**.
