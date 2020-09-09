const devConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: '3306',
    user: 'tweets',
    password: 'ygjAY2cy4fe@QQZ',
    database: 'tweets'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
};

const prodConfig = Object.assign(
  {},
  devConfig,
  { host: 'localhost', database: 'tweets', user: 'tweets', password: 'ygjAY2cy4fe@QQZ', }

)

module.exports = {
  development: devConfig,
  production: prodConfig
}
