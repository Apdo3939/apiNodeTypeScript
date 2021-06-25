Rodar a aplicação com o comando:
### node src/server.js
### yarn dev

Acessar a aplicação no navegador:
### http://localhost:8081

Parar a aplicação com o comando:
### Control + c

instalar a dependencia express com o comando:
### yarn add express -D
### yarn add @types/express -D

instalar a dependencia tsc node dev com o comando:
### yarn add ts-node-dev -D

instalar as dependencias de typeorm e bancos de dados sqlite:
### yarn add typeorm reflect-metadata sqlite3

Criar migrations com o typeorm:
### yarn typeorm migration:create -n CreateUsers

Criar as tabelas:
### yarn typeorm migration:run

Reverter as tabelas e as migrations(se houver algum tipo de erro):
### yarn typeorm migration:revert

Criar as entities
### yarn typeorm entity:create -n nome-entity

Gerar id automaticamente pela aplicação:
### yarn add uuid
### yarn add @types/uuid -D

Instalar as dependencias para capturar erros de forma assincrona:
### yarn add express-async-errors

Instalar as bibliotecas para para o jsonwebtoken:
### yarn add jsonwebtoken
### yarn add @types/jsonwebtoken -D

Instalar as bibliotecas para criptografar senhas no banco de dados:
### yarn add bcryptjs
### yarn add @types/bcryptjs -D

Instalar as bibliotecas referente ao class-transformer(customização da classe)
### yarn add class-transformer
