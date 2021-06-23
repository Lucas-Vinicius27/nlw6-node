<h1 align="center">NLW Edição 6 Trilha de Node!</h1>
<h2>API de Valorização!</h2>

Está aplicação consiste em:
- Cadastro de usuários.
- Cadastro de Tags (elogios possíveis).
    - Somente usuário administrador.
- Cadstro de elogios.
    - ID do usuário que recebe o elogio.
    - ID do usuário que envia o elogio.
    - ID da tag.
    - Mensagem.
    - Data da criação.
- Autenticação de usuário.
    - Gerar token JWT.
    - Validar usuário logado nas rotas necessárias.
- Listagem de usuários.
- Listagem de tags.
- Listagem de elogios por usuário.
<h2>Dependências Necessárias!</h2>
O que você precisa ter para rodar essa aplicação:

- Node versão LTS de preferência.
- NPM ou YARN (de preferência YARN).

O que você precisa fazer para rodar essa aplicação:
- Rodar o comando abaixo no terminal para instalar as dependências
```bash
yarn
```
- Rodar o comando abaixo no terminal para criar as tabelas com as migrations
```bash
yarn typeorm migration:run
```
- Rodar o comando abaixo no terminal para iniciar o servidor
```bash
yarn dev
```