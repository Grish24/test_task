const initialState={
    imagePath:'/static/media/female-1.7a22938d.svg',
    step_second:false,
};

export const createStyle = (state = initialState,action) => {
  switch (action.type) {
      case 'IMAGE_PATH' :
          return {
              ...state,
              imagePath: action.payload
          };
      case 'NEXT_STEP_SECOND' :
          return {
              ...state,
              step_second: action.payload
          };
      default : return state
  }
};

export default createStyle