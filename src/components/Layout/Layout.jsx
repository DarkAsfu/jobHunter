import React from 'react';
import Hero from '../Hero/Hero';
import JobCatagories from '../JobCatagories/JobCatagories';
import FeaturesJob from '../FeaturesJob/FeaturesJob';

const Layout = () => {
    return (
        <div>
            <Hero></Hero>
            <JobCatagories></JobCatagories>
            <FeaturesJob></FeaturesJob>
        </div>
    );
};

export default Layout;