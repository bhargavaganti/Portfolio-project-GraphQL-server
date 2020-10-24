const { server: options, mysql: db } = require('./config');
const { GraphQLServer, PubSub } = require('graphql-yoga');
const mysql = require('mysql2/promise');
const mainRoute = require('./routes/index');
const resolvers = require('./services/resolvers');
const { init_db } = require('./database');

// Define the start server function
const init = async () => {
  try {
    const connection = await mysql.createConnection(db);       // Wait to database connection
    await init_db(connection);                                 // Create database schema 

    const pubsub = new PubSub();

    const server = new GraphQLServer({
      typeDefs: './services/schema.graphql',
      resolvers,
      context: {
        connection,
        pubsub
      }
    });

    server.express.get('*', mainRoute);

    server.start(options, ({ port }) => {
      console.log(`The server is up on port: ${port}`)
    });
  } catch (err) { // Catch errors
    console.log(err);
  }
}

// Start the server
init()