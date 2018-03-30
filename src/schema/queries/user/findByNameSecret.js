'use strict';
import {    
    GraphQLString,
    GraphQLNonNull
} from 'graphql';
import userTp from './../../types/userTp';
import User from './../../../entities/user';

export default {
    type: userTp,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        secret: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, args) {
        let userEnt = new User();
        return userEnt.findByNameSecret(args.name,args.secret);
    }
};