import { useContext } from 'react'
import { RecordsContext } from '../context/RecordsContext';

// to check and ensure that we are within the component tree
export const useRecordsContext = () => {

    const context = useContext(RecordsContext); 

    if(!context){
        throw Error('useRecordsContext must be used inside a WorkoutsContextProvider')
    } 

    return context; 

}

// export default useWorkoutsContext;