import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import GradeSheet from './components/GradeSheet';
import Navbar from './components/Navbar';
import NotFound from './pages/404';
import Course from './pages/CoursesLecturers';
import Courses from './pages/CoursesStudents';
import DashBoard from './pages/DashBoard';
import Grade from './pages/GradesLecturers';
import Grades from './pages/GradesStudents';


function App() {

  return (
    <div className="w-full min-h-screen flex flex-row p-0 m-0 bg-blue-800">
      <BrowserRouter>
        <div className='w-1/5 h-full relative overflow-y-hidden overscroll-none'>
          <Navbar />
        </div>
        <div className='w-4/5 mr-5 relative min-h-screen overflow-y-visible overscroll-contain bg-slate-200 mt-4 rounded-3xl mb-8'>
          <div className="bg-blue-100 rounded-lg shadow-slate-800 overflow-visible overscroll-y-auto mt-4 pt-2 mx-4 px-2 ">
            <Routes>
              <Route exact path='/' element={<DashBoard />} />
              <Route path='/course' element={<Course />} />
              <Route path='/grade' element={<Grade />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/grades' element={<Grades />} />

              {/* Non navbar routes */}
              <Route path='/grades/grade_sheet/:id' element={<GradeSheet />} />
              <Route path='*' element={ <NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
