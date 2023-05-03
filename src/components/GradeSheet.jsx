import React, { useEffect } from 'react'
import { BiArrowBack, BiArrowToRight, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { useRecordsContext } from '../hooks/useRecordsContexts';
import StudentList from './StudentList';

const GradeSheet = () => {
  useEffect(() => {
    document.title = 'School | GradesSheets'
  }, [])

  const navigate = useNavigate()

  const { results, dispatch } = useRecordsContext();

  const { id } = useParams()


  useEffect(() => {

    // check the problem here
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/results/' + id);
      const json = await response.json()

      if (response.status !== 200) {
        console.log('error occurred')
        return
      }

      if (response.status === 200) {
        console.log('A success')
        // setGetData(json)
        dispatch({ type: 'SET_RECORDS', payload: json })
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

        <button onClick={() => { navigate(-1) }} className=' flex flex-row justify-start text-center items-center align-bottom '>
          <BiArrowBack className="text-black mr-1 font-mono text-center text-lg font-semibold" /> Back
        </button>

        <div className="mt-9 ">
          <h2 className="text-gray-500 font-mono font-bold text-xl"> Results Uploads </h2>
        </div>

        {/* The chat table */}
        <div className="mt-28">

          <div className="w-full">
            <div>
              {/* {results.map((data) => ( */}
              {results && (
                <div className='bg-white rounded px-2 mt-4 py-2 shadow-lg shadow-slate-200 ' >
                  <div className='mb-3' >
                    <h2 className='font-mono font-bold text-xl'>
                      {/* Hello */}
                      {results.department}
                    </h2>
                  </div>
                  <div title='mt-3 mb-4'>
                    <h4 className='font-mono font-normal text-sm'>
                      {/* {results.subject} */}
                      {results.course_title}
                      {/* Happy */}
                    </h4>
                  </div>
                  <div className="flex justify-end">
                    <h5 className="text-lg font-mono">
                      {/* ~ {data.author} */}
                      {/* There we go */}
                      {results.level}
                    </h5>
                  </div>

                </div>
              )
              }

            </div>
          </div>

          {/* <StudentList /> */}
          {/* { results && <StudentList recordsUpload={results}  /> } */}
        </div>
      </div>
    </div>

  )
}

export default GradeSheet
