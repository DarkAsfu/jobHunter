import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleJobs from '../SingleJobs/SingleJobs';

const AppliedJobs = () => {
    const addedJob = getShoppingCart();
    const jobs = useLoaderData();
    const appliedJobs = [];

    for (const id in addedJob) {
        const checkData = jobs.find(jb => jb.id == id);
        appliedJobs.push(checkData);
    }
const [filteredJobs, setFilteredJobs] = useState([])
    const [selectedJobType, setSelectedJobType] = useState('all');
    useEffect(() => {
        let filteredJobs = appliedJobs;
        if (selectedJobType !== 'all') {
          filteredJobs = filteredJobs.filter(job => job.jobType.includes(selectedJobType));
        }
        setFilteredJobs(filteredJobs);
      }, []);
      

    const handleAllJob = () => {
        setSelectedJobType('all');
    }

    const handleRemoteJob = () => {
        setSelectedJobType('Remote');
    }

    const handleOnsiteJob = () => {
        setSelectedJobType('Onsite');
    }
    // console.log(appliedJobs)
    return (
        <div className='my-20'>
            <h1 className='text-3xl mb-32 font-bold text-center'>Applied Jobs</h1>
            <div className="btn-group flex justify-end w-10/12 mx-auto">
                <button onClick={handleRemoteJob} className={`btn ${selectedJobType === 'Remote' ? 'btn-active' : ''}`}>Remote</button>
                <button onClick={handleOnsiteJob} className={`btn ${selectedJobType === 'Onsite' ? 'btn-active' : ''}`}>Onsite</button>
                <button onClick={handleAllJob} className={`btn ${selectedJobType === 'all' ? 'btn-active' : ''}`}>All</button>
            </div>

            <div>
                {filteredJobs.map(job => <SingleJobs key={job.id} singlejobs={job} />)}
            </div>
        </div>
    );
};

export default AppliedJobs;