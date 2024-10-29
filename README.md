
# Madah - Firebase Auth

Bem-vindo ao **Madah - Firebase Auth**, um projeto focado no gerenciamento de tarefas com foco em escalabilidade e segurança. Este repositório contém o backend da aplicação, com uma integração sólida usando NodeJS & Firebase.

## 📋 Importar rotas api no Insomnia

Arquivo de rotas no Insomnia disponível em: [documentation/Insomnia.json](documentation/Insomnia.json)

---

## 📋 Descrição do Projeto

Fui contratado para liderar o desenvolvimento de uma aplicação de gerenciamento de tarefas. O foco principal do projeto é garantir uma solução modular, preparada para crescimento futuro, com qualidade de código e segurança. O projeto utiliza **Firebase** para autenticação e **Firebase Firestore** para armazenamento de dados.

### Funcionalidades

1. **Autenticação e Autorização**:
   - Registro de usuários com email e senha.
   - Autenticação via Firebase.
   - Uso de **JWT** para comunicação segura.

2. **Gerenciamento de Tarefas**:
   - CRUD de tarefas associadas ao usuário autenticado.
   - Armazenamento no Firebase Firestore.
   - Filtros por status e data de vencimento das tarefas.

3. **Arquitetura**:
   - Backend desenvolvido em **TypeScript**.
   - API RESTful documentada com **Swagger**.

4. **Segurança**:
   - Validação de permissões de usuários para operações nas suas próprias tarefas.
   - Regras de segurança configuradas no Firebase Firestore.

## 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript** para o backend.
- **Firebase Auth** para autenticação de usuários.
- **Firebase Firestore** para armazenamento de dados.
- **JWT** para segurança e autenticação.
- **Swagger** para documentação da API.

## 🛠️ Como Instalar e Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- Uma conta no [Firebase](https://firebase.google.com/)

### Passos para configurar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/marciodiasdeveloper/madah-firebase-auth.git
   ```
2. **Instale as dependências no backend:**

   No diretório principal, execute:

   ```bash
   cd madah-firebase-auth
   npm install
   ```

3. **Configuração do Firebase:**

   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Configure a autenticação via **Email/Password**.
   - Configure o Firestore com as regras de segurança para o armazenamento das tarefas.
   - Crie um arquivo `.env` no diretório do backend com suas credenciais do Firebase:

     ```env
     FIREBASE_API_KEY=your_api_key
     FIREBASE_AUTH_DOMAIN=your_auth_domain
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     FIREBASE_APP_ID=your_app_id
     ```

    - firebase database rules

    ```
    rules_version = '2';

    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if request.auth != null;
        }
      }
    }
    ```
4. **Executando o projeto:**

   Para rodar o backend, execute:

   ```bash
   cd backend
   npm run dev
   ```

5. **Acesse a aplicação:**

   O backend estará disponível em `http://localhost:8092`.

## 📖 Documentação da API

A documentação da API RESTful foi feita usando **Swagger**. Para acessá-la, inicie o servidor backend e abra:

```
http://localhost:8092/api-docs
```

## 🛡️ Regras de Segurança

As permissões de acesso às tarefas são validadas, garantindo que cada usuário só possa visualizar e modificar suas próprias tarefas. As regras básicas de segurança também foram configuradas no Firestore.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você quiser colaborar, siga os passos abaixo:

1. Faça um **fork** deste repositório.
2. Crie uma **branch** para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça o **commit** das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin feature/nova-feature`).
5. Crie um novo **Pull Request**.

## 📅 Roadmap

- [ ] Adicionar autenticação via redes sociais (Google, Facebook).
- [ ] Melhorar a UI/UX do frontend.
- [ ] Implementar testes unitários para o backend.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por Márcio Dias.
