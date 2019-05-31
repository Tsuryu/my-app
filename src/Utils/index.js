import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore} from 'redux';
import rootReducer from './../reducers';
import { middlewares } from './../createStore';

export const findComponentBy = (component, attributeValue) => {
    return component.find(`[data-test='${attributeValue}']`);
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}