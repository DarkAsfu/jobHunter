import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-slate-950  mt-10'>Blog Page</h1>
                <p className="font-bold  text-state-300 mt-5 text-gray-400  mb-8">Here Write Some question and answer</p>
            </div>

            <div className='grid md:grid-cols-2 gap-4 w-10/12 mx-auto my-10'>
                <div className='border p-10'>
                    <h2 className="font-bold text-3xl text-blue-500">When should you use context Api .</h2>
                    <p className="font-bold  text-state-300 mt-5">Answer: <span className='text-slate-700'>We should use the Context API in React when you have data or functionality that needs to be shared between multiple components in your application.<br/>For example, imagine you have a theme that you want to apply to multiple components. Rather than passing the theme data down through each level of the component tree, you can use the Context API to create a theme context that can be accessed by any component that needs it.<br/>To use the Context API, you start by creating a context object using the createContext() method. </span></p>
                </div>
                <div className='border p-10'>
                    <h2 className="font-bold text-3xl text-blue-500">What is custom hook in react</h2>
                    <p className="font-bold  text-state-300 mt-5">Answer: <span className='text-slate-700'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.<br/><em>Custom Hooks offer the flexibility of sharing logic that wasn't possible in React components before.</em></span></p>
                </div>
                <div className='border p-10'>
                    <h2 className="font-bold text-3xl text-blue-500">What is useHref?</h2>
                    <p className="mt-5">Answer: <span className='text-slate-700'>useHref - The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.<br/>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.<br/>You may be interested in taking a look at the source for the 'link' component in react-router-dom to see how it uses useHref internally to determine its own href value.</span></p>
                </div>
                <div className='border p-10'>
                    <h2 className="font-bold text-3xl text-blue-500">What is useMemo</h2>
                    <p className="font-bold  text-state-300 mt-5">Answer: <span className='text-slate-700'>The React useMemo Hook returns a memoized value.<br/>Think of memoization as The useMemo Hook only runs when one of its dependencies update.<br/> This can improve performance.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;