# User CRUD Fullstack

Aplicação **fullstack** para gerenciamento de usuários, com **frontend em React** e **backend em Node.js**, desenvolvida para praticar a integração entre frontend e backend, boas práticas de API REST, organização de código e tratamento de erros.

O projeto simula um cenário real de aplicação utilizada em ambiente profissional.

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
- Consumo de API REST
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



user-crud-fullstack
├─ backend
│ ├─ prisma
│ │ └─ schema.prisma
│ │
│ ├─ src
│ │ ├─ controllers
│ │ │ └─ userController.js
│ │ │
│ │ ├─ routes
│ │ │ └─ userRoutes.js
│ │ │
│ │ └─ server.js
│ │
│ ├─ package.json
│ └─ .env.example
│
├─ frontend
│ ├─ src
│ │ ├─ pages
│ │ │ ├─ ListUsers.jsx
│ │ │ ├─ CreateUser.jsx
│ │ │ └─ EditUser.jsx
│ │ │
│ │ ├─ services
│ │ │ └─ api.js
│ │ │
│ │ ├─ routes.jsx
│ │ └─ main.jsx
│ │
│ └─ package.json
│
├─ .gitignore
└─ README.md


---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- Node.js (versão 18+ recomendada)
- MongoDB em execução (local ou cloud)
- Gerenciador de pacotes (npm ou yarn)

### Backend
```bash
cd backend
npm install
npx prisma generate
npm run dev


O servidor iniciará em:

http://localhost:3333

Frontend
cd frontend
npm install
npm run dev


A aplicação React iniciará em:

http://localhost:5173

🔗 Endpoints da API
Método	Rota	Descrição
GET	/usuarios	Lista todos os usuários
GET	/usuarios/:id	Busca usuário por ID
POST	/usuarios	Cria novo usuário
PUT	/usuarios/:id	Atualiza usuário
DELETE	/usuarios/:id	Remove usuário
📌 Padrões aplicados

Separação de responsabilidades (routes e controllers)

Código organizado e legível

Tratamento consistente de erros

Integração clara entre frontend e backend

Estrutura preparada para evolução futura

🔄 CI/CD

O projeto foi organizado com uma estrutura modular e padronizada, facilitando a futura implementação de pipelines de CI/CD.

Atualmente, não há integração automatizada configurada.

🎯 Objetivo do projeto

Consolidar conhecimentos em desenvolvimento fullstack, APIs REST e integração entre frontend e backend, servindo como item de portfólio profissional.

📌 Status do projeto

✅ Funcionalidades principais concluídas
🔄 Projeto funcional, estável e organizado

---

👤 Autor

Desenvolvido por Willians Narciso


