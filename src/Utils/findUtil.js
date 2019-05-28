import checkPropTypes from 'check-prop-types';

export const findComponentBy = (component, attributeValue) => {
    return component.find(`[data-test='${attributeValue}']`);
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}