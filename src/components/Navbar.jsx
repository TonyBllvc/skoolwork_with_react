import { AiOutlineFolder, AiOutlineHome, AiOutlineInfoCircle, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { BiBookOpen } from 'react-icons/bi'
import { ImSwitch } from 'react-icons/im'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="bg w-full h-full flex flex-col fixed overflow-hidden overscroll-none">
            <div className=' pl-2'>
                <div className="">
                    <h1 className='flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 text-white'> Logo </h1>
                </div>
                {/* a hr across */}
                <hr className='w-11/12 my-4
                border-white'/>
                <div>
                    <NavLink to="/" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-black active:text-black text-white hover:shadow-lg hover:shadow-slate-800'>
                        <AiOutlineHome className=' text-2xl text-white font-semibold pr-2' /> Dashboard 
                         {/* <p className='text-white active:text-black hover:text-black h-full '>Dashboard</p> */}
                          </NavLink>
                    <NavLink to="/course" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'> 
                        <AiOutlineFolder className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Courses </p></NavLink>
                    <NavLink to="/grade" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <BiBookOpen className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Grades </p> </NavLink>
                    <NavLink to="/grades" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <BiBookOpen className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Grades </p> </NavLink>
                    <NavLink to="/courses" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'> 
                        <AiOutlineFolder className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Courses </p></NavLink>
                    <NavLink to="/" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <AiOutlineInfoCircle className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'>Info</p> </NavLink>
                    {/* a hr across */}
                    <hr className='w-11/12 my-4
                    border-white'/>

                    <NavLink to="/" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <AiOutlineUser className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> My Profile</p> </NavLink>
                    <NavLink to="/" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <AiOutlineLock className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Settings</p> </NavLink>
                    <hr className='w-11/12 my-4
                    border-white'/>
                    {/* A hr across */}

                    <NavLink to="/" className=' flex items-center justify-start  font-bold text-sm w-4/5 pl-6 py-3 my-3 rounded-l-3xl hover:bg-yellow-200 active:bg-yellow-200 hover:text-blue-700 text-white hover:shadow-lg hover:shadow-slate-800 active:text-blue-600'>
                        <ImSwitch className=' text-2xl text-white font-semibold pr-2' /> <p className='text-white active:text-blue-600 hover:text-black h-full'> Logout </p></NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;