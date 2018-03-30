import 'jest';
import { graphql } from 'graphql';
import schema from './../../../src/schema';
import { statesById } from './../../../src/schema/queries';
import mockData from './../../common/_mock.data.cmn';

describe('#SCHEMA/QUERIES STATE BY ID', () => {
    test('It should return the state record by using the uuid as parameter', () => {
        const query = ` 
        {
            query: statesById(uuid: \"${mockData.state.uuid}\") {
                id
                uuid
                name
            }
        }`;

        return graphql(schema, query, {}).then((result) => {            
            const { data } = result;
            expect.assertions(2);
            expect(result).not.toHaveProperty('errors');
            expect(data.query.uuid).toEqual(mockData.state.uuid);
        });
    });
});