import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiArrowToRight, BiRightArrowAlt } from "react-icons/bi";

const Course = () => {
  useEffect(() => {
    document.title = 'School | Courses'
  }, [])

  const [test, setTest] = useState([
    { name: 'Tony', subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sollicitudin ex eget gravida.  Cras scelerisque euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nibh vel scelerisque mollis.', id: 1 },
    { name: 'Tracy', subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sollicitudin ex eget gravida.  Cras scelerisque euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nibh vel scelerisque mollis.', id: 2 },
    { name: 'Black', subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sollicitudin ex eget gravida.  Cras scelerisque euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nibh vel scelerisque mollis.', id: 3 },
    { name: 'John', subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sollicitudin ex eget gravida.  Cras scelerisque euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nibh vel scelerisque mollis.', id: 4 },
    { name: 'James', subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sollicitudin ex eget gravida.  Cras scelerisque euismod bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum nibh vel scelerisque mollis.', id: 5 }
]
)


  return (
    <div className='overscroll-contain'>
      <div className='w-full font-mono font-bold text-lg'>

        {/* This is a admin(course rep) page */}
        {/* the top section */}
        <div className='w-full mb-9 flex flex-row justify-start align-middle text-center items-center'>
          <h1 className="text-gray-500 font-mono font-semibold"> Current Semester </h1>
          <div className="flex items-end mx-2 justify-end">
            <BiRightArrowAlt className="text-gray-500 font-mono text-lg font-semibold" />
          </div>
          <h2 className="text-blue-600 font-mono font-semibold"> Rain Semester <span> 2022/2023 </span> </h2>
        </div>

        <div className="mt-9 ">
          <h2 className="text-gray-500 font-mono font-bold text-xl"> My Class Arms </h2>
        </div>

        {/* A fill-in semester form and course outline */}
        {/*  aimed at giving access to lecturers and passing information */}

        <div className='w-full pl-0.5 mt-4 my-5 pt-1'>
          {/* a form for only the admin(course rep and assistant) */}
          <section>
            <form className="w-4/6 pl-16 pr-20 pb-8 ml-20 rounded-xl bg-white shadow-md shadow-slate-500" action="">
              <div className="flex items-center justify-center pt-5 pb-5">
                <h1 className="text-2xl font-bold"> Course fill-in </h1>
              </div>
              <div className="flex flex-col mb-5">
                <label className="mr-2.5 text-base" htmlFor="course code"> Course Code:
                </label>
                <input
                  type="text"
                  name="text"
                  id="course-code"
                  placeholder="LRN101"
                  className="bg-white pl-2 border-slate-500 pr-44 py-1.5 border-solid border rounded-lg"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="mr-2.5 text-base" htmlFor="course code"> Course Title:
                </label>
                <input
                  type="text"
                  name="text"
                  id="course-code"
                  placeholder="Learning of Technology"
                  className="bg-white pl-2 border-slate-500 pr-44 py-1.5 border-solid border rounded-lg"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="mr-2.5 text-base" htmlFor="course code"> Course Coordinator:
                </label>
                <input
                  type="text"
                  name="text"
                  id="course-code"
                  placeholder="Dr. Mr. John Doe"
                  className="bg-white pl-2 border-slate-500 pr-44 py-1.5 border-solid border rounded-lg"
                />
              </div>
              <div className="flex flex-col mb-5">
                <input type="button" className="w-full bg-blue-600 hover:bg-blue-700  
                        py-2.5 rounded-lg text-white font-bold" value="Submit" />
              </div>
            </form>
          </section>

          {/* The table for filling */}
          <div className="mt-28">
            <div className="w-full">
              <div className="grid grid-cols-4 py-5 px-3">
                <div>
                  <h2 className="mx-2 text-lg"> Course code </h2>
                </div>
                <div>
                  <h2 className="mx-2 text-lg"> Course title </h2>
                </div>
                <div>
                  <h2 className="mx-2 text-lg"> Course coordinator </h2>
                </div>
              </div>
              <div className="bg-white grid grid-cols-4 rounded-lg shadow-lg hover:shadow-slate-800 py-2 px-3 mb-4">
                <div className="mx-2 flex justify-start items-center">
                  <h2 className="text-slate-600 text-base"> TNT104 </h2>
                </div>
                <div className="mx-2 flex justify-start items-center">
                  <h2 className="text-slate-600 text-base"> Management for information tech </h2>
                </div>
                <div className="mx-2 flex justify-start items-center">
                  <h2 className="text-blue-600 text-base"> Dr Mrs Anyaogu Mandaline </h2>
                </div>
                <div className="mx-2 flex justify-center items-center">
                  <Link href='/user/course-info' className="py-1 px-3 bg-blue-600 text-base text-white hover:bg-blue-700 rounded-md shadow-lg shadow-slate-300" > View Info </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
