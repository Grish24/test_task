const initialState={
    gender:'',
    color_scheme:'',
    step_second:false,
};

export const createStyle = (state = initialState,action) => {
  switch (action.type) {
     case 'SELECT_GENDER' :
         return  {
             ...state,
             gender : action.payload
         };
      case 'SELECT_COLOR' :
          return {
              ...state,
              color_scheme: action.payload
          };
      case 'NEXT_STEP' :
          return {
              ...state,
              step_second: action.payload
          };
      default : return state
  }
};

export default createStyle