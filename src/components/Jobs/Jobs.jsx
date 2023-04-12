import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Jobs = ({ job }) => {
    console.log(job)
    const {id, companyImage, jobTitle, companyName, jobType, location, salary } = job
    return (
        <div className='border-2 p-8'>
            <img className='w-36' src={companyImage} alt="" />
            <h2 className='text-2xl font-bold mt-8 text-slate-600'>{jobTitle}</h2>
            <p className='text-slate-400 my-2'>{companyName}</p>
            <div className='flex gap-3'>
                {
                    jobType.map(type => <p className='border-2 px-3 py-1 border-blue-500 text-blue-500'>{type}</p>)
                }
            </div>
            <div className='flex my-3'>
                <p className='text-slate-500 mr-3'><FontAwesomeIcon icon={faLocationDot} className='mr-2'/>{location}</p>
                <p className='text-slate-500'>Salary: {salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='btn bg-blue-500 text-white border-none hover:bg-blue-800'>View details</button></Link>
        </div>
    );
};

export default Jobs;