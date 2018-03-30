import express from 'express';
import graphqlRoutes from './graphql';
import authRoutes from './auth';

const routes = express();

routes.use(graphqlRoutes);
routes.use(authRoutes);

export default routes;