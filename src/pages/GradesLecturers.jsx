import React, { useEffect, useState } from 'react'
import { BiArrowToRight, BiRightArrowAlt } from "react-icons/bi";
import CourseUpload from '../components/CourseUpload';
import Results from '../components/Results';
import { useRecordsContext } from '../hooks/useRecordsContexts';

const Grade = () => {
  useEffect(() => {
    document.title = 'School | Grades'
  }, [])

  const [ toggle, setToggle ] = useState(false)

  const { results, dispatch } = useRecordsContext();
  
  // const [ getData, setGetData ] = useState(null)
  
    // useEffect(() => {
    //     fetch('http://localhost:8000/results')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then((data) => {
    //         setGetData(data)
    //     })
    // }, [])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:8000/results');
            const json = await response.json()

            if(response.status !== 200){
              console.log('error occurred')
              return
            }

            if(response.status === 200){
              console.log('A success')
                // setGetData(json)
                dispatch({ type: 'SET_RECORDS', payload: json})
            }
        }

        fetchData()
    }, [dispatch])



  return (
    <div className='overscroll-contain'>
        <div className='w-full font-mono font-bold text-lg'>

            {/* the top section */}
            <div className='w-full mb-9 flex flex-row justify-start align-middle text-center items-center'>
                <h1 className="text-gray-500 font-mono font-semibold"> Current Semester </h1>
                <div className="flex items-end mx-2 justify-end">
                    <BiRightArrowAlt className="text-gray-500 font-mono text-lg font-semibold" />
                </div>
                <h2 className="text-blue-600 font-mono font-semibold"> Rain Semester <span> 2022/2023 </span> </h2>
            </div>

            <div className="mt-9 ">
                <h2 className="text-gray-500 font-mono font-bold text-xl"> Department </h2>
            </div>
            <div className="mt-3">
                <button className="bg-green-600 hover:bg-green-700 active:bg-green-600 text-white rounded-lg px-3 py-1" onClick={() => setToggle(!toggle)}> Click here for form </button>
                {toggle && <CourseUpload toggle={setToggle} />}
            </div>

            {/* The table with the different departments assigned */}
            <div className="mt-3">
                <div className="w-full">
                    <div className="grid grid-cols-5 py-5 px-3">
                        <div>
                            <h2 className="mx-5 text-lg"> Department </h2>
                        </div>
                        <div>
                            <h2 className="mx-5 text-lg"> Course title </h2>
                        </div>
                        <div>
                            <h2 className="mx-3 text-lg"> Level </h2>
                        </div>
                        <div>
                            <h2 className="mx--6 text-lg"> Students Offering </h2>
                        </div>
                    </div>

                    <div className="w-full bg-white p-3 ">
                        {/* {results && results.map(data => (
                            <Results data={data} key={data.id} />
                        ))
                        } */}
                        
                        {results && <Results data={results} />}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grade
