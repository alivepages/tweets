const devConfig = {
  client: 'mysql',
  connection: {
    host: 'ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 's2xw6kbstuk8a5qv',
    password: 'az3i36qz7zvn9s0m',
    database: 'yg190wx9dmlnqr19'
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
