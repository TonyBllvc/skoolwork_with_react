import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import GradeSheet from './GradeSheet'

const Results = ({ data }) => {
    // const navigate = useNavigate()

    return (
        <div>
        {/* Pass an iterating check to see that it is in an array before passing data, else pass null */}
        {  Array.isArray(data) ? data.map( (pick) => (
            <div className="bg-white grid grid-cols-5 rounded-lg hover:shadow-md hover:shadow-slate-800 py-2 px-3 mb-3" key={pick.id}>
                <div className="mx-2 flex justify-start  items-center">
                    <h2 className="text-slate-600 text-base">{pick.department}  </h2>
                </div>
                <div className="mx-5 flex justify-start items-center">
                    <h2 className="text-slate-600 text-base"> {pick.course_title} </h2>
                </div>
                <div className="mx-5 flex justify-start items-center">
                    <h2 className="text-blue-600 text-base"> {pick.level} </h2>
                </div>
                <div className="mx-5 flex justify-start text-center items-center">
                    <h2 className="text-slate-600 mx-1 text-base"> {pick.students.length} </h2>
                </div>
                <div className="mx-2 flex justify-center items-center">
                    {/* <input type="button" onClick={() => navigate('/grades/grade_sheet')} className="py-1 px-3 bg-blue-600 text-base text-white hover:bg-blue-700 rounded-md shadow-lg shadow-slate-300" value="View Info" /> */}
                    {/* <button > 
            <GradeSheet records={data} />
            </button> */}
                    <Link to={`/grades/grade_sheet/${pick.id}`} className="py-1 px-3 bg-blue-600 text-base text-white hover:bg-blue-700 rounded-md shadow-lg shadow-slate-300" > View Info </Link>
                </div>
            </div>
        )) : 
        (
            <div> Nothing to display</div>
        )
        }
        </div>
    )
}

export default Results



        //     {/* {
        //     test.map((data) => (
        //     )
        //     )
        // } */}