import 'jest';
import * as graphql from 'graphql';
import statesInp from './../../../src/schema/inputs/statesInp';

describe('#SCHEMA/INPUTS STATE', () => {
    
    describe('Fields', () => {
        let stateInputsFields = statesInp.getFields();        
        
        describe('uuid', () => {
            test('It should be declared', () => {
                expect(stateInputsFields).toHaveProperty('uuid');
            });
            
            test('It should be declared as ID type', () => {
                expect(stateInputsFields.uuid.type).toMatchObject(graphql.GraphQLID);
            });
        });
        
        describe('name', () => {
            test('It should be declared', () => {
                expect(stateInputsFields).toHaveProperty('name');
            });
            
            test('It should be declared as STRING type', () => {
                expect(stateInputsFields.name.type).toMatchObject(graphql.GraphQLString);
            });
        });        
    });    
});