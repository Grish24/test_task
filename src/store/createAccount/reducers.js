const initialState={
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    sign_up_with_google:false,
    step_third:false,
};

export  const createAccount = (state = initialState,action) => {
  switch (action.type) {
     case 'CREATE_FIRST_NAME' :
         return  {
             ...state,
             first_name : action.payload
         };
      case 'CREATE_LAST_NAME' :
          return {
              ...state,
              last_name: action.payload
          };
      case 'CREATE_EMAIL' :
          return {
              ...state,
              email: action.payload
          };
      case 'CREATE_PASSWORD' :
          return {
              ...state,
              password: action.payload
          };
      case 'NEXT_STEP' :
          return {
              ...state,
              step_third: action.payload
          };
      default : return state
  }
  return  state;
};

export default createAccount;