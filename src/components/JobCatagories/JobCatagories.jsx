import React, { useEffect, useState } from 'react';
import SingleCata from '../SingleCata/SingleCata';

const JobCatagories = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('catagories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-slate-950  mt-6 md:mt-32'>Job Category List</h1>
                <p className='text-gray-400 mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 md:w-10/12 md:mx-auto gap-8 mx-4 mb-32'>
                {
                    catagories.map(singleCatagories => <SingleCata key={singleCatagories.id} singleCatagories={singleCatagories}></SingleCata>)
                }
            </div>
        </div>
    );
};

export default JobCatagories;