import React from 'react';
import { findComponentBy, checkProps } from './../../Utils/index';
import Button from './index';
import { shallow } from 'enzyme';

describe('Button component', () => {
    describe('Checking propTypes', () => {
        it('It should not throw warning', () => {
            const expectedProps = {
                text: 'Button text test',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', ()=> {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                text: 'test text',
                emitEvent: mockFunc
            };

            wrapper = shallow(<Button {...props}/>);
        });

        it('It should render a button', () => {
            const button = findComponentBy(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('It should emit callback on clickEvent', () => {
            const button = findComponentBy(wrapper, 'buttonComponent');
            button.simulate('click');
            expect(mockFunc.mock.calls.length).toBe(1);

        });
    })
});