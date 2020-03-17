export const setCreatGender = name => ({
    type: 'SELECT_GENDER',
        payload:name
});
export const setCreateColor = value => ({
    type : 'SELECT_COLOR',
    payload:value
});
export const setStep = value => ({
    type : 'NEXT_STEP_SECOND',
    payload:value
});