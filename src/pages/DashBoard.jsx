import React, { useEffect, useState } from 'react'
import { AiOutlineFolder } from 'react-icons/ai'
import { BiBookOpen } from 'react-icons/bi'

const DashBoard = () => {
    useEffect(() => {
        document.title = 'School | DashBoard'
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
        <div className='overscroll-contain overflow-visible'>
            <div className='w-full font-mono font-bold text-lg'>

                {/* the top section */}
                <div className='w-full mb-3'>
                    <h1> Afternoon, Mr George </h1>
                </div>

                {/* The upper contents */}
                <div>
                    {/* work on the grid functionality */}
                    <div className='grid lg:grid-cols-2 gap-10 mb-3'>

                        {/* Cards go here*/}

                        {/* card one */}
                        <div className='w-full p-2 bg-white rounded overflow-hidden shadow-lg relative  hover:shadow-slate-800'>
                            <div>
                                <div className='w-full flex flex-row my-2'>
                                    <div className='w-1/2 flex items-start justify-start '>
                                        <AiOutlineFolder className='text-3xl text-lime-500 ' />
                                    </div>
                                    <div className='w-1/2 flex justify-end '>
                                        <div className='py-0.5 px-2 bg-lime-500 flex justify-center rounded-md shadow-lg cursor-pointer hover:shadow-slate-200 active:bg-lime-600'>
                                            <h3 className='text-white' > Session </h3>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className='py-1' >
                                        <h2 className='font-mono'> 0 </h2>
                                    </div>
                                    <div className='py-1' >
                                        <h6 className='font-sans text-sm font-normal'> Assigned here</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* card two */}
                        <div className='w-full p-2 bg-white rounded overflow-hidden shadow-lg relative hover:shadow-slate-800'>
                            <div>
                                <div className='w-full flex flex-row my-2'>
                                    <div className='w-1/2 flex items-start justify-start '>
                                        <BiBookOpen className='text-3xl text-lime-500 ' />
                                    </div>
                                    <div className='w-1/2 flex justify-end '>
                                        <div className='py-0.5 px-2 bg-blue-700 flex justify-center rounded-md shadow-lg cursor-pointer hover:shadow-slate-200 active:bg-blue-800'>
                                            <h3 className='text-white' > My Class</h3>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className='py-1' >
                                        <h2 className='font-mono'> 0 </h2>
                                    </div>
                                    <div className='py-1' >
                                        <h6 className='font-sans text-sm font-normal'> Assigned here</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card three */}
                        <div className='w-full p-2 bg-white rounded overflow-hidden shadow-lg relative  hover:shadow-slate-800'>
                            <div>
                                <div className='w-full flex flex-row my-2'>
                                    <div className='w-1/2 flex  items-start justify-start '>
                                        <BiBookOpen className='text-3xl text-lime-500 ' />
                                    </div>
                                    <div className='w-1/2 flex justify-end '>
                                        <div className='py-0.5 px-2 bg-orange-500 flex justify-center rounded-md shadow-lg cursor-pointer hover:shadow-slate-200 active:bg-orange-600'>
                                            <h3 className='text-white' > Outline </h3>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className='py-1' >
                                        <h2 className='font-mono'> 0 </h2>
                                    </div>
                                    <div className='py-1' >
                                        <h6 className='font-sans text-sm font-normal'> Assigned here</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card four */}
                        <div className='w-full p-2 bg-white rounded overflow-hidden shadow-lg relative  hover:shadow-slate-800'>
                            <div>
                                <div className='w-full flex flex-row my-2'>
                                    <div className='w-1/2 flex items-start justify-start '>
                                        <BiBookOpen className='text-3xl text-lime-500 ' />
                                    </div>
                                    <div className='w-1/2 flex justify-end '>
                                        <div className='py-0.5 px-2 bg-blue-400 flex justify-center rounded-md shadow-lg cursor-pointer hover:shadow-slate-200 active:bg-blue-500'>
                                            <h3 className='text-white' > My Class</h3>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className='py-1' >
                                        <h2 className='font-mono'> 0 </h2>
                                    </div>
                                    <div className='py-1' >
                                        <h6 className='font-sans text-sm font-normal'> Assigned here</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Content write-ups */}
                <div className='w-full bg-white my-5 pt-3'>

                    {/* Each box with write ups*/}
                    {test.map((data) => (

                        <div className='bg-white rounded px-2 mt-4 py-2 shadow-lg shadow-slate-200 ' key={data.id} >

                            <div className='mb-3' >
                                <h2 className='font-mono font-bold text-xl'> {data.name} </h2>
                            </div>
                            <div className='mt-3 mb-4'>
                                <h4 className='font-mono font-normal text-sm'>
                                    {data.subject}
                                </h4>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard;