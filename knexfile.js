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
  { host: '192.237.240.116', database: 'floreria_visitas', user: 'floreria_visitas', password: 'Visitas+32', }
)

module.exports = {
  development: devConfig,
  production: prodConfig
}
