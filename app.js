import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  pretty: true
}));

app.listen(4000);