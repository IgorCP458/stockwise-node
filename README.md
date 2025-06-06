# 🛠️ StockWise API - Back-end

Este é o back-end do projeto **StockWise**, desenvolvido com **Node.js**, **Express** e **Sequelize**. Ele é responsável pela autenticação de usuários e gerenciamento básico de dados.

## 📦 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Dotenv
- Bcrypt (para hashing de senhas)
- JSON Web Token (JWT) *(se for usado para autenticação)*

---

## 📁 Estrutura atual

```
/Users
  ├── user.model.js
  ├── user.routes.js
  └── user.controller.js
/database
  └── database.js
server.js
.env
```

---

## ✅ Funcionalidades

### 🔐 Login de Usuário

- **Endpoint:** `POST /login`
- **Requisição:**
  ```json
  {
    "email": "usuario@email.com",
    "password": "sua_senha"
  }
  ```
- **Retorno esperado:**
  ```json
  {
    "message": "Login realizado com sucesso",
    "user": { "id": 1, "firstName": "Nome", ... }
  }
  ```

---

### 📝 Cadastro de Usuário

- **Endpoint:** `POST /users`
- **Requisição:**
  ```json
  {
    "firstName": "João",
    "lastName": "Silva",
    "email": "joao@email.com",
    "password": "senhaSegura123",
    "role": "admin"
  }
  ```
- **Retorno esperado:**
  ```json
  {
    "message": "Usuário cadastrado com sucesso",
    "user": { "id": 1, "firstName": "João", ... }
  }
  ```

---

### ✏️ Atualização de Usuário

- **Endpoint:** `PUT /users/:id`
- **Requisição:**
  ```json
  {
    "firstName": "João Atualizado",
    "lastName": "Silva",
    "email": "joao@email.com",
    "role": "admin"
  }
  ```
- **Retorno esperado:**
  ```json
  {
    "message": "Usuário atualizado com sucesso"
  }
  ```

---

## ⚙️ Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/IgorCP458/stockwise-node.git
   cd stockwise-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   DB_NAME=stockwise_db
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_HOST=localhost
   PORT=8080
   ```

4. Inicie o servidor:
   ```bash
   node server.js
   ```

---

## 🗃️ Banco de Dados

O banco está sendo gerenciado com Sequelize. As tabelas são criadas automaticamente com:

```js
sequelize.sync({ force: true }); // CUIDADO: isso apaga os dados!
```

---

## 🚧 Em desenvolvimento

Funcionalidades futuras planejadas:

- Validação com JWT
- Proteção de rotas autenticadas
- Rotas para produtos, estoque, e empresas
- Sistema de permissões por cargo (`role`)

---

## 🧑‍💻 Autor

Feito por ✨ Igor ✨