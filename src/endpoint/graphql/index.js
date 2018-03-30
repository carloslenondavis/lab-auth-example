import express from 'express';
import GraphHTTP from 'express-graphql';
import schema from './../../schema';

const graphqlRoutes = express();

graphqlRoutes.use('/lab/api/graphql', GraphHTTP((req, res, parms) => {
    return {
        schema,
        pretty: process.env.NODE_ENV === 'development',
        graphiql: process.env.NODE_ENV === 'development',
        formatError: error => ({
            message: error.message,
            locations: error.locations,
            stack: error.stack ? error.stack.split('\n') : [],
            path: error.path
         })
     };
}));

export default graphqlRoutes;