import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findComponentBy, checkProps } from './../../Utils/findUtil';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component', () => {
    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'test header',
                description: 'some test description'
            }
            component = setUp(props);
        });        

        it('It should render without errors', () => {       
            const wrapper = findComponentBy(component, 'wrapper');
            expect(wrapper.length).toBe(1);
        });

        it('It should render a H1', () => {
            const header = findComponentBy(component, 'header');
            expect(header.length).toBe(1);        
        });

        it('It should render a description', () => {
            const description = findComponentBy(component, 'description');
            expect(description.length).toBe(1);        
        });
    });

    describe('Have no props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('It should not render', () => {       
            const wrapper = findComponentBy(component, 'wrapper');
            expect(wrapper.length).toBe(0);
        });
    });
    
    describe('Checking propTypes', () => {
        it('Should not throw a warning', () => {
            const eexpectedProps = {
                header: 'test header',
                description: 1123
            }

            const propsError = checkProps(Headline, eexpectedProps);
            expect(propsError).toBeUndefined(); 
        });
    });
});