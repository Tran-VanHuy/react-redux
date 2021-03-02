const initialState = {

      list : [],
      acctiveID : null, 
}

const hobbyReducer = (state = initialState , action) => {

      switch(action.type) {

            case 'ADD_HOBBY': {

                  return {

                        ...state,
                        list :[...state.list, ...action.payload],
                  };
            }
            
            case 'SET_ACTIVIE_HOBBY': {

                  return state;
            }

            case 'Add_Products' : {

                  return {

                        ...state,
                        list :[...state.list, ...action.addload],
                  };
            }

            default:

                  return state;
      }
}

export default hobbyReducer;