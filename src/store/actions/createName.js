export const setCreateName = name => ({
    type: 'CREATE_NAME_TEXT',
    payload: name
});
export const setStep = value => ({
    type: 'NEXT_STEP_FIRST',
    payload: value
});