import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import './JobDetails.css'
import { setItem } from 'localforage';
const JobDetails = () => {
    const { id } = useParams();
    const jobData = useLoaderData();
    const [jobs, setJobs] = useState({})
    useEffect(() => {
        if (jobData) {
            const checkData = jobData.find(jb => jb.id == id);
            setJobs(checkData);
        }
    }, [id])
    const {description,location,jobTitle, educationalRequirement, experience, jobResponsibility, phone,salary} = jobs;

    return (

        <div className='md:flex mx-auto w-10/12 info my-24'>
            <div className='md:w-9/12 pr-12 '>
                <p className='mt-6'><span>Job Description:</span> {description}</p>
                <p className='mt-6'><span>Job Responsibility:</span>{jobResponsibility}</p>
                <p className='mt-6'><span>Educational requirement:</span>{educationalRequirement}</p>
                <p className='mt-6'><span>Experience:</span>{experience}</p>
            </div>
            <div className='md:w-1/4 bg-blue-500 text-slate-200 p-8 leading-10 '>
                <h3  className='font-xl font-bold'>Job Details</h3>
                <hr />
                <p><span className='text-slate-700'>Salary:</span>{salary}</p>
                <p><span className='text-slate-700'>Job Title:</span>{jobTitle}</p>
                <h3 className='font-xl font-bold'>Contact Information</h3>
                <hr />
                <p><span className='text-slate-700'>Phone:</span>{phone}</p>
                <p><span className='text-slate-700'>Email:</span>xyz@yahoo.com</p>
                <p><span>Address:</span>{location}</p>
                <button onClick={() => addToDb(id)} className='btn border-0 bg-white text-blue-600 px-4 py-1 w-full mt-4 rounded-md font-bold'>Apply Now</button>
            </div>
            
        </div>
    );
};

export default JobDetails;