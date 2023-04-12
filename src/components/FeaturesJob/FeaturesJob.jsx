import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';
import { addToDb } from '../../utilities/fakedb';

const FeaturesJob = () => {
    const [featuresJob, setFeaturesJobs] = useState([])
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('fetauresJobs.json')
        .then(res => res.json())
        .then(data => setFeaturesJobs(data))
    }, [])
    
    const handleViewAll = () => {
        setShowAllJobs(!showAllJobs);
    }

    const jobsToShow = showAllJobs ? featuresJob : featuresJob.slice(0, 4);

    return (
        <div className='mb-48'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-slate-950  mt-6'>Featured Jobs</h1>
                <p className='text-gray-400 mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        <div className='grid grid-cols-1 mx-auto md:w-10/12 md:grid-cols-2 gap-6'>
            {
                jobsToShow.map(job => <Jobs key={job.id} job={job}  ></Jobs>)
            }
        </div>
        <button onClick={handleViewAll} className='btn mt-10 mx-auto flex justify-center  bg-blue-500 text-white border-none hover:bg-blue-800'>{showAllJobs ? 'Show Less' : 'View All'}</button>
        </div>
    );
};

export default FeaturesJob;
