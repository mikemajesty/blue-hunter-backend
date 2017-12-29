# Desafio Se você for um Dev Backend

## API
[https://blue-hunter-backend-api.herokuapp.com/](https://blue-hunter-backend-api.herokuapp.com/)

### Como executar o projeto
```npm run start```

### Como executar os testes
* ```npm run start```
* ```npm run test```

### Realizar Deploy
```npm run start```
##### Após executar o comando acima e fazer o push para o repositório do github o deploy é executado de forma automática, conforme o gif abaixo.
[![deploy.gif](https://s33.postimg.org/qtc509tzz/deploy.gif)](https://postimg.org/image/oc0dt0a3f/)

### Realizar Build
```npm run start```

## Decisões técnicas

#### <b>Automatizador de tarefas </b>
* <b>[Gulp](https://github.com/gulpjs/gulp)</b> para automatizar o deploy, build e compilar o projeto para ES6.

#### <b>Plataforma de serviço em nuvem </b>
* <b>[Heroku](https://github.com/heroku)</b> Tenho muitas aplicações no heroku, um dos motivos da escolha é que para automatizar o deploy basta clicar em 2 botões. 

#### <b>Acesso a dados</b> 
* <b>[Objection](https://github.com/Vincit/objection.js/)</b> ORM muito simples de configurar, já utilizei algumas como o sequelize, mas penso que o Objection é mais simples de usar e menos verboso.
* <b>[Knex](https://github.com/tgriesser/knex)</b> Já trabalhei com o Knexjs e gostei por ser muito simples, no projeto eu utilizo para conexão com o banco, migrations e seeds.
* <b>[PostgreSQL](https://github.com/postgres/postgres)</b> Sua sua compatibilidade com o Heroku.

#### <b>Validações</b> 
* <b>[Joi](https://github.com/hapijs/joi)</b> Validador de objetos muito simples de utilizar, minha experiência fez a diferença na escolha também.

#### <b>Testes</b> 
#### Combinação muito simples para testes, e a única que tenho experiência profissional.  
* <b>[Chai](https://github.com/chaijs/chai)</b>
* <b>[supertest](https://github.com/visionmedia/supertest)</b>
* <b>[Mocha](https://github.com/mochajs/mocha)</b>
