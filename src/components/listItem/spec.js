import React from 'react';
import { findComponentBy, checkProps } from './../../Utils/index';
import ListItem from './index';
import { shallow } from 'enzyme';

describe('ListItem component', () => {
    describe('Checking Proptypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'example title',
                description: 'some text to test'
            }

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'example title',
                description: 'some text to test'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('It should render withoud errors', () => {
            const component = findComponentBy(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('It should render a title', () => {
            const title = findComponentBy(wrapper, 'title');
            expect(title.length).toBe(1);
        });

        it('It should render a description', () => {
            const description = findComponentBy(wrapper, 'description');
            expect(description.length).toBe(1);
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                description: 'some text to test'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('It should not render', () => {
            const component = findComponentBy(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});