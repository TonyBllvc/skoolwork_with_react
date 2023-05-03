import { createContext, useReducer } from "react";

export const RecordsContext = createContext();

export const recordsReducer = ( state, action ) => {
    switch (action.type){
      case 'SET_RECORDS':
      return {
        results: action.payload
      }
      case 'CREATE_RECORD':
      return{
        results: [action.payload, ...state.results]
      }
    //   case 'DELETE_WORKOUT':
    //     return{
    //       workouts: state.workouts.filter((data) => data._id !== action.payload._id )
    //     }
      default:
      return state
    }

}

export const RecordsContextProvider = ({children}) => {

  const [state, dispatch ] = useReducer(recordsReducer, {
    results: null
  })


  return (
    <RecordsContext.Provider value={{...state, dispatch}}>
        { children }
    </RecordsContext.Provider>
  )
}
