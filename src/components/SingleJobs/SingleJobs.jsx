import React from 'react';
import { Link } from 'react-router-dom';

const SingleJobs = ({ singlejobs }) => {
    const {id, companyImage, jobTitle, companyName, jobType, salary, location } = singlejobs;
    console.log(singlejobs);
    return (
        <div>
            
            <div className='md:flex justify-between items-center mx-auto md:w-10/12 border mt-6 p-8'>
                <div className='md:flex'>
                    <div className='mr-5'>
                        <img style={{ width: "300px" }} className='bg-blue-200 px-12 py-14' src={companyImage} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-600'>{jobTitle}</h3>
                        <p className='text-slate-400'>{companyName}</p>
                        <div className='flex gap-3 my-2'>
                            {
                                jobType.map(job => <p className='border-2 px-3 py-1 border-blue-500 text-blue-500'>{job}</p>)
                            }
                        </div>
                        <div className='md:flex gap-3'>
                            <div className='flex text-state-400'>
                                <span><svg className='text-slate-400 w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                </span>
                                <p className='text-slate-400'>{location}</p>
                            </div>
                            <p className='text-slate-400'>Salary:{salary}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn bg-blue-600 border-none hover:bg-blue-400'>
                    <Link to={`/job/${id}`}>View details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;