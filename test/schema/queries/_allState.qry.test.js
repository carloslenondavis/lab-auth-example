import { graphql } from 'graphql';
import schema from './../../../src/schema';
import { allStates } from './../../../src/schema/queries';

describe('#SCHEMA/QUERIES ALLSTATE', () => {
    test('It should return all state records', () => {
        const query = ` 
        {
            query: allStates {
                id
                uuid
                name
            }
        }`;

        return graphql(schema, query, {}).then((result) => {            
            const { data } = result;
            expect.assertions(2);
            expect(result).not.toHaveProperty('errors');
            expect(data.query.length).toBeGreaterThan(0);
        });
    });
});