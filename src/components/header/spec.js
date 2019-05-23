import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findComponentBy } from './../../Utils/findUtil';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {       
        const wrapper = findComponentBy(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const wrapper = findComponentBy(component, 'logoImg');
        expect(wrapper.length).toBe(1);        
    });
})