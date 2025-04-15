#  Projeto Fullstack com Node.js e TypeScript

Este projeto foi desenvolvido como parte de um **teste técnico para uma vaga de desenvolvedor**. Ele inclui uma API em **Node.js (v20.18)** com **TypeScript**, além de **dois front-ends React** com diferentes bibliotecas de UI:

-  **Ant Front**: React + TypeScript + Ant Design  
-  **MUI Front**: React + TypeScript + Material UI  



## Estrutura de Pastas
```
.
├── docker-compose.ant.yml
├── docker-compose.mui.yml
├── back-end/
│    └── Dockerfile 
├── ant-front/
|    └── Dockerfile 
└── mui-front/ 
     └── Dockerfile 
```

---

### Clone o projeto

```bash
git clone https://github.com/vyctor-carvalho/Full_Stack_Node.git
```

---

## Rodando com Docker

> ⚠️ Como os dois front-ends utilizam a mesma porta (3000), execute apenas **um por vez**.

### Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

### Executar o Front-end com Ant Design

```bash
docker-compose -f docker-compose.ant.yml up --build
```

- Backend: [http://localhost:3300/usuarios](http://localhost:3300/usuarios)  
- Frontend (Ant Design): [http://localhost:3000](http://localhost:3000)

---

### Executar o Front-end com Material UI

```bash
docker-compose -f docker-compose.mui.yml up --build
```

- Backend: [http://localhost:3300/usuarios](http://localhost:3300/usuarios)  
- Frontend (MUI): [http://localhost:3000](http://localhost:3000)

---

## Comunicação Front ↔ Back

Os front-ends consomem a API utilizando a variável de ambiente:

```env
REACT_APP_API_URL=http://localhost:3300
```

Essa variável já está configurada nos arquivos `docker-compose`.

---

## Tecnologias Utilizadas

### Backend

- Node.js 20.18
- TypeScript
- Express

### Frontend

- React
- TypeScript
- Ant Design (`ant-front/`)
- Material UI (`mui-front/`)

---

##  Observações

- A API é compilada com TypeScript antes de iniciar.
- Os containers reiniciam automaticamente em caso de falhas (`restart: always`).
- Ambos os front-ends foram configurados para consumir a mesma API.

---