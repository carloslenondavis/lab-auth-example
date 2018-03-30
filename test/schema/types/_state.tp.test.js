import 'jest';
import * as graphql from 'graphql';
import StateTp from './../../../src/schema/types/stateTp';

describe('#SCHEMA/TYPES STATE', () => {
    
    describe('Fields', () => {
        let stateTpFields = StateTp.getFields();

        describe('id', () => {
            test('It should be declared', () => {
                expect(stateTpFields).toHaveProperty('id');
            });
            
            test('It should be declared as INT type', () => {
                expect(stateTpFields.id.type).toMatchObject(graphql.GraphQLInt);
            });
        });
        
        describe('uuid', () => {
            test('It should be declared', () => {
                expect(stateTpFields).toHaveProperty('uuid');
            });
            
            test('It should be declared as ID type', () => {
                expect(stateTpFields.uuid.type).toMatchObject(graphql.GraphQLID);
            });
        });
        
        describe('name', () => {
            test('It should be declared', () => {
                expect(stateTpFields).toHaveProperty('name');
            });
            
            test('It should be declared as STRING type', () => {
                expect(stateTpFields.name.type).toMatchObject(graphql.GraphQLString);
            });
        });        
    });    
});