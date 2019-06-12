import App from './App.js';
import { shallow } from 'enzyme';
import { findComponentBy, testStore } from '../src/Utils';
import React from 'react';


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App component', ()=> {
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts: [{
                title: 'example title 1',
                body: 'some text to test'
                },{
                    title: 'example title 2',
                    body: 'some text to test'
                },{
                    title: 'example title 3',
                    body: 'some text to test'
                }
            ]
        };
        wrapper = setUp(initialState);
    });

    it('Should render without error', () =>{
        const component = findComponentBy(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});

