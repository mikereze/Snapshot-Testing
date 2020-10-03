import React from 'react';
import renderer from 'react-test-renderer';
import { Counter} from './App';

describe('Snapshot baby',() => {
    test("Test 1",() => {
        let tree =  renderer.create(<Counter counter={1}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})



describe('Check 123',() => {
    it( 'Check that test',() => {
        expect(true).toEqual(true)
    })
});

