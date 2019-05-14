import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

const findByDataTestAttribute = (component, attributeValue) => {
    return component.find(`[data-test='${attributeValue}']`);
}

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {       
        const wrapper = findByDataTestAttribute(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const wrapper = findByDataTestAttribute(component, 'logoImg');
        expect(wrapper.length).toBe(1);        
    });
})