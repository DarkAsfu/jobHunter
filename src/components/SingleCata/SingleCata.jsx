import React from 'react';

const SingleCata = ({singleCatagories}) => {
    console.log(singleCatagories)
    const {id, title, icon, availableJobs} = singleCatagories;
    return (
        <div className='border-2 p-14 bg-gray-100 rounded-md '>
            <img className='bg-blue-100 p-4 rounded-md' src={icon} alt="" />
            <h3 className='text-2xl font-bold leading-7 mt-8'>{title}</h3>
            <p className='text-gray-400 mt-2'>{availableJobs}+ jobs are Avaiable</p>
        </div>
    );
};

export default SingleCata;