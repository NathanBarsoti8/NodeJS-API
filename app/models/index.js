// Conexão com o banco de dados é iniciada, gerenciada e sustentada por esse arquivo index.js e pelo arquivo config.json.
// O arquivo JSON possui os dados necessários para se iniciar a conexão com a base de dados. Possui três configurações, bases de dados que estejam rodando em ambiente de desenvolvimento, em ambiente de testes e em ambiente de produção.
// Já o arquivo index.js é quem trabalha com as informações do arquivo json. 

//O 'use srict' serve para implementar um modo mais rigoroso de interpretação do javascript. Ele proíbe que certas práticas incorretas sejam realizadas. Por exemplo, criar variáveis globais implicitas.
'use strict';

//Importações necessárias para que o arquivo funcione.
//O fs é o pacote file system do node, permite ler os arquivos do sistema dentro da plataforma node.
const fs = require('fs');
//O path é o pacote responsável por gerenciar os caminhos do sistema.
const path = require('path');
//O sequelize é o pacote ORM responsável por gerir as queryes do banco de dados sem que seja necessário ficar digitando elas na mão.
const Sequelize = require('sequelize');
//A constante basename pega o caminho do arquivo e atribui como valor o nome do arquivo.
const basename = path.basename(__filename);
//A constante env é uma variável de ambiente responsável por informar qual é o banco a ser utilizado. Caso o node encontre um valor na variável de ambiente NODE_ENV essa será a base de dados utilizada na conexão. Caso não encontre nada, usará como padrão as configurações de conexão da base de desenvolvimento.
const env = process.env.NODE_ENV || 'development';
//A constante config é responsável por carregar o arquivo de configuração na variável de ambiente env.
const config = require(__dirname + './../../config/config.json')[env];
//A constante db será responsável por gerir os modelos utilizados no sequelize.
const db = {};

//Declaramos uma let que receberá a instância do sequelize com a conexão iniciada.
let sequelize;
//Verificamos se a variável de ambiente está sendo utilizada.
if (config.use_env_variable) {
  //Caso esteja sendo utilizada, definimos as configurações de acesso a base por ela.
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //Caso não esteja, definimos as configurações de acesso a base acessando o objeto config e acessando as variáveis do json.
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Esse bloco de código é responsável por ler o nome do diretório e filtrar o nome dos arquivos.
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  //Neste forEach, o node está pegando os arquivos, e por meio do laço de repetição forEach está importando o sequelize nos models da aplicação.
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  //Verificamos se o modelo possui a propriedade associate e caso seja verdareiro associamos com a constante responsável por gerir os models utilizados no sequelize.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Aqui definimos que dentro do objeto db, as variáveis sequelize e Sequelize vão correposnder as instâncias iniciadas nesta aplicação.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Realizamos um teste para certificar que a conexão com o banco de dados está de fato acontecendo. O teste já é realizado utilizando a instância do sequelize.
sequelize.authenticate()
  .then(() => console.log("Conexão realizada com sucesso"))
  .catch((error) => console.log("Falha ao se conectar: " + error))

  //Exportamos o objeto responsável por gerir os models na aplicação.
module.exports = db;
