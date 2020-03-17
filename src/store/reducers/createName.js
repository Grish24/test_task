const initialState = {
    name: '',
    step_first: false,
};

export const createName = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NAME_TEXT' :
            return {
                ...state,
                name: action.payload
            };
        case 'NEXT_STEP_FIRST' :
            return {
                ...state,
                step_first: action.payload
            };
        default :
            return state
    }
};
export default createName;