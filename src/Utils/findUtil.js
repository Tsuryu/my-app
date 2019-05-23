export const findComponentBy = (component, attributeValue) => {
    return component.find(`[data-test='${attributeValue}']`);
}
