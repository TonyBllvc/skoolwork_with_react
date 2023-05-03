import React, { useState } from 'react'
import { useRecordsContext } from '../hooks/useRecordsContexts';

const CourseUpload = ({ toggle }) => {
    const { dispatch } = useRecordsContext()

    // Step 1: To handle data input

    const [department, setDepartment] = useState('');
    const [course_title, setCourse_title] = useState('');
    const [level, setLevel] = useState('');
    const [students, setStudents] = useState([
        { }
     ]);

    const [pending, setPending] = useState(false);

      //step 2: To handle submit
      const handleSubmit = async (e) => {
        // Assuming there is now required attribute inside the form
        // Prevent submit with the if statement

        // if (!e.target.department || !e.target.course_title || !e.target.level) {
            // e.preventDefault();
            // alert("Fill in blanks");
            // console.log("Fill in blanks");
            // return;
        // } else {
            // Step 2.1:  A default to prevent auto reload
            e.preventDefault();
            // Step 2.2: handle each input in the form
            const results = { department, course_title, level, students };
            // Step 2.3: Make a POST request 
            // Two arguments are involved
 
            setPending(true);

            const response = await fetch('http://localhost:8000/results', {
                // To define the type of request~
                method: 'POST',
                // To save the content type being sent
                headers: { 'Content-Type': 'application/json' },
                //The data we are sending
                // Before data is parsed into the json database file,..
                //.. it must first be parsed as a string.
                // We stringify the results data input
                body: JSON.stringify(results)
                //This will then make a post request to the end point..
                // .. automatically adding the values into the json server
            })
            const json = await response.json()

            if(!response.ok){
                console.log('Nothing to load!')
            }

            if(response.ok){
                console.log("new record added")
                setPending(false);
                toggle(false)
                dispatch({type: 'CREATE_RECORD', payload: json})
            }
            // .then(() => {
            //     console.log("new blog added")
            //     setPending(false);
            //     toggle(false)
            //     // navigate(-1);
            //     // navigate();
            // })
            
            // .catch((err) => {
            //     console.log( err + 'Nothing is load!!')
            // })
        // }
    }
 
  return (
    <div>
        <div className="w-full ml-2 py-4">
            {/* a form for only the admin(course rep and assistant) */}
            <section>
                <form className="w-4/6 pl-16 pr-32 pb-8 rounded-xl bg-white shadow-md shadow-slate-500" onSubmit={handleSubmit} >
                    <div className="flex items-center justify-center pt-5 pb-5">
                        <h1 className="text-2xl font-bold"> Department fill-in </h1>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mr-2.5 text-base" htmlFor="course code"> Department:
                        </label>
                        <input
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Learn science"
                            required
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            className="bg-white pl-2 border-slate-500 pr-1 py-1.5 border-solid border rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mr-2.5 text-base" htmlFor="course code"> Course Title:
                        </label>
                        <input
                            type="text"
                            name="course-code"
                            id="course-code"
                            required
                            value={course_title}
                            onChange={e => setCourse_title(e.target.value)}
                            placeholder="LRN101"
                            className="bg-white pl-2 border-slate-500 pr-1 py-1.5 border-solid border rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mr-2.5 text-base" htmlFor="course code"> Level:
                        </label>
                        <input
                            type="text"
                            name="level"
                            id="level"
                            required
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                            placeholder="000"
                            className="bg-white pl-2 border-slate-500 pr-1 py-1.5 border-solid border rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col mb-5">

                        {!pending && <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700  
                            py-2.5 rounded-lg text-white font-bold" > Submit </button>
                        }

                        {pending && <button type="submit" className="w-full bg-gray-400  
                            py-2.5 rounded-lg text-white font-bold" disabled > Loading..  </button>
                        }
                    </div>
                </form>
            </section>
        </div>
    </div>

  )
}

export default CourseUpload
