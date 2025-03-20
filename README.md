# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📌 blog-front
Este repositório foi criado com o intúito da criação de um blog em que professores possam postar, editar e remover atividades, avisos e outros para seus alunos e para que os alunos possam ter uma comunicação mais fluida com os temas que acontecem em sua sala de aula e escola.

# 📌 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-usadas)
- [Setup Inicial](#setup-inicial)
- [Arquitetura da Aplicação](#arquitetura-da-aplicacao)
- [Guia de Uso](#guia-de-uso)

## Sobre o Projeto
A aplicação criada tem funções como:
- Página inicial com posts publicados
- Leitura de posts
- Postagem, remoção e deleção de posts (Apenas para professores)

Foi criada para o terceiro tech challenge que nos dá como objetivo uma construção de um site que possa auxiliar alunos e professores nas postagens feitas.

## Tecnologias Utilizadas
As tecnologias usadas no front-end foram: React e typescript

## Setup Inicial
Passo a passo para rodar o projeto front-end localmente:

- Clone os repositórios:
```bash
git clone https://github.com/souleandromachado/blog-front
e
git clone https://github.com/souleandromachado/blog-api
```

- Acesse a pasta dos projetos (separadamente):
```bash
cd nome-do-projeto
```

- Instale as dependências em ambos os repositórios:
```bash
npm install
```

- Feito isso, tendo em vista que é necessário o docker instalado na máquina para que possamos executar o projeto back-end para o front-end, entre novamente na pasta do projeto back-end e execute o seguinte comando:
```bash
docker compose up -d --build
```
- Após isso, confira se está tudo certo dando o comando:
```bash
docker compose logs
```

- Estando tudo certo,volte para a pasta do projeto front-end e rode o projeto com o comando:
```bash
npm run dev
```
- Acesse no navegador: http://localhost:5173

## Arquitetura da Aplicação
📂 src/
┣ 📂 assets/ → Imagens contidas no projeto e README do projeto
┣ 📂 components/ → Pastas do projeto contendo as páginas do site
┗ 📜 App.js → Componente principal

## Guia de Uso
- Para aluno:
Primeiro será apresentado a guia inicial com todos as postagens feitas pelos professores:
[Posts](./src/assets/guia-principal.png)

E então o aluno terá a possibilidade de acessar a postagem para melhor lê-la:
[Página de post](./src/assets/tela-de-leitura.png)

- Para o professor:
Ao abrir o site ele terá a mesma visão que o aluno, para ter acesso privilegiado ele deve clicar no botão "docente", onde a seguinte tela será apresentada:
[Login docente](./src/assets/login-professor.png)

Para poder acessar a tela de docentes, se autentique com o seguinte cadastro:
E-mail: testesfiap3fsdt@gmail.com
senha: 1234

Logo em seguida a página será novamente apresentada, porém, com as configurações de admin:
[Página de post professor](./src/assets/tela-inicial-professor.png)

Clicando na primeira opção de "+Criar novo post", a tela ira mudar para uma tela de criação de posts como esta:
[Criação de post](./src/assets/tela-de-criação.png)

Caso ele queira fazer a edição de um post, deve escolher a opção "Administrar posts":
[Administrar post](./src/assets/admin-posts.png)

E quando clicar no post desejado:
[Editar post](./src/assets/editar-post.png)