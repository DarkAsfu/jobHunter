import React from 'react';
import img from '../../assets/hero.png'
const Hero = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm  -my-4 w-10/12 md:w-full" />
                <div className='p-0 md:pr-96'>
                    <h1 className="text-5xl font-bold leading-snug">Find your<br />Dream job<br /><span className='text-blue-400'>from JOBHUNTER</span></h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. You can find all updated job here.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;