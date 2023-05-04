import React, { useEffect } from 'react'
import { BiArrowBack, BiArrowToRight, BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const CourseInfo = () => {
    useEffect(() => {
        document.title = 'School | Course Info'
    }, [])

    const navigate = useNavigate()

    return (
        <div className='overscroll-contain'>
            <div className='w-full font-mono font-bold text-lg'>

                {/* the top section */}
                <div className='w-full mb-9 flex flex-row justify-start align-middle text-center items-center'>
                    <h1 className="text-gray-500 font-mono font-semibold"> Current Semester </h1>
                    <div className="flex items-end mx-2 justify-end">
                        <BiRightArrowAlt className="text-gray-500 font-mono text-lg font-semibold" />
                    </div>
                    {/* This would have model schema created */}
                    <h2 className="text-blue-600 font-mono font-semibold"> Harmattan Semester <span> 2022/2023 </span> </h2>
                </div>

                <button onClick={() => { navigate(-1) }} className=' flex flex-row justify-start text-black hover:text-red-700 text-center items-center align-bottom '>
                    <BiArrowBack className=" mr-1 font-mono text-center text-lg font-semibold" /> Back
                </button>

                <div className="mt-9 ">
                    {/* This would have model schema created */}
                    <h2 className="text-gray-500 font-mono font-bold text-xl"> 100 level Courses </h2>
                </div>

                {/* The chat table */}
                <div className="mt-2">

                    <div className="w-full">
                        {/* The table for filling */}
                        <div className="mt-2">
                            <div className="w-full">
                                <div className="grid grid-cols-3 py-5 px-3">
                                    <div>
                                        <h2 className="mx-1 text-lg"> Course Code </h2>
                                    </div>
                                    <div>
                                        <h2 className="mx-2 text-lg"> Course Title </h2>
                                    </div>
                                </div>
                                <div className="bg-white grid grid-cols-3 rounded-lg shadow-lg hover:shadow-slate-800 py-2 px-3 mb-4">
                                    <div className="mx-3 flex justify-start items-center">
                                        <h2 className="text-slate-600 text-base"> MTH 101 </h2>
                                    </div>
                                    <div className=" flex justify-start text-center items-center">
                                        <h2 className="text-slate-600 text-center text-base"> Elementary Mathematics 1 </h2>
                                    </div>
                                    <div className="mx-3 flex justify-center items-center">
                                        <Link to='/courses/student/course-content' className="py-1 px-3 bg-blue-600 text-base text-white hover:bg-blue-700 rounded-md shadow-lg shadow-slate-300" > View Info </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* <StudentList /> */}
                    {/* { results && <StudentList recordsUpload={results}  /> } */}
                </div>
            </div>
        </div>


    )
}

export default CourseInfo
