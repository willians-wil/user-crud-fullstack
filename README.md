# User CRUD Fullstack - Aplicação Fullstack com React, Node.js e Prisma

Projeto **fullstack** de CRUD de usuários desenvolvido com **Node.js, Express, Prisma, MongoDB e React**, seguindo boas práticas de organização, padronização de erros HTTP e estrutura próxima ao ambiente profissional.

Este projeto foi construído com foco em **aprendizado prático**, **qualidade de código** e **preparação para o mercado**, simulando um cenário real de aplicação utilizada em contexto profissional.

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

## 🔄 CI/CD (Integração e Entrega Contínua)

Este projeto foi estruturado seguindo boas práticas que facilitam a futura implementação de **CI/CD (Continuous Integration / Continuous Deployment)**.

### Integração Contínua (CI)
- Estrutura organizada e modular
- Separação clara entre backend e frontend
- Padronização de scripts (`npm run dev`, `npm install`)
- Uso de variáveis de ambiente com `.env.example`
- Código preparado para testes automatizados

### Entrega Contínua (CD)
- Projeto preparado para execução em ambientes distintos
- Configuração pronta para pipelines de deploy automatizado
- Possibilidade de integração com ferramentas como **GitHub Actions**, **Docker** ou serviços de cloud no futuro

> ⚠️ Atualmente, o pipeline de CI/CD não está implementado, mas o projeto foi organizado desde o início para suportar esse fluxo de forma simples e escalável.

---

## 🎯 Objetivo do projeto

Este projeto tem como objetivo consolidar conhecimentos em **desenvolvimento fullstack**, boas práticas de API REST e integração frontend/backend, servindo como **item de portfólio profissional**.

---

## 📌 Status do projeto

✅ Funcionalidades principais concluídas  
🔄 Projeto estável, com estrutura preparada para evolução e melhorias futuras  

Atualmente, o projeto encontra-se **funcional e organizado**, simulando um cenário real de aplicação fullstack utilizada em ambiente profissional.

---

## 🛣️ Próximos passos (Roadmap)

- [ ] Implementar autenticação (login e senha)
- [ ] Adicionar confirmação de exclusão no frontend
- [ ] Melhorar UX com feedback visual (loading e mensagens)
- [ ] Criar testes automatizados no backend
- [ ] Configurar pipeline de CI/CD


## 👤 Autor

Desenvolvido por **Willians Narciso**.

