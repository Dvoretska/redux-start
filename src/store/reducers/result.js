import * as actionType from '../actions.js';

let initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
     case actionType.STORE_RESULT:
       return {
         ...state,
         results: state.results.concat({id: new Date(), value: state.counter})
    };

    case actionType.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results]
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
       return {
         ...state,
         results: updatedArray
    };
  }
  return state;
};

export default reducer;