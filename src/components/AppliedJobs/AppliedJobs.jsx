import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleJobs from '../SingleJobs/SingleJobs';

const AppliedJobs = () => {
    const addedJob = getShoppingCart();
    const jobs = useLoaderData()
    console.log(addedJob)
    console.log(jobs)
    const appliedJobs = []

    for (const id in addedJob) {
        console.log(id)
        const checkData = jobs.find(jb => jb.id == id);
        appliedJobs.push(checkData);
        // console.log(checkData)

    }
    console.log(appliedJobs)
    return (
        <div className='my-20'>
            <h1 className='text-3xl mb-32 font-bold text-center'>Applied Jobs</h1>
            
            <div>
                {
                    appliedJobs.map(singlejobs => <SingleJobs key={singlejobs.id} singlejobs={singlejobs}></SingleJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;