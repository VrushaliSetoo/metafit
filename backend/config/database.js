
/* 
...
LOCAL
...
*/

const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'qualitia-dev'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'setoo'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//     },
//     debug: false,
//   },
// });



/*
...
LIVE RENDER
...
*/
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cplbgqmd3nmc73ctiq50-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'metafirdemo'),
      user: env('DATABASE_USERNAME', 'metafirdemo_user'),
      password: env('DATABASE_PASSWORD', 'h1GtlR4ALHWGpb2le3puhanHo3PDOVG2'),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env.bool('DATABASE_SSL_SELF', true),
    },
    debug: false,
  },
});

