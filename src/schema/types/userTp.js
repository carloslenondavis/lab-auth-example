'use strict';
import { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString    
} from 'graphql';

export default new GraphQLObjectType({
    name: 'UserTp',
    description: 'the type for user',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: 'user autonumeric id'
        },
        uuid: {
            type: GraphQLID,
            description: 'user uuid'
        },
        name: {
            type: GraphQLString,
            description: 'user name'
        },
        secret: {
            type: GraphQLString,
            description: 'user password'
        }
    })
});