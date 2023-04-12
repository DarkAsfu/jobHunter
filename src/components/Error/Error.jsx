import React from 'react';

const Error = () => {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
            <p className="text-lg text-gray-800 mb-8">Sorry, the page you're looking for could not be found.</p>
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go Home
            </a>
        </div>
    );
};

export default Error;