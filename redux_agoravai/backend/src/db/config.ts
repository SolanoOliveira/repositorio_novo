import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'webacademy',
  password: 'Web@cad123',
  database: 'lojavirtual',
  logging: false,
});

export default connection;