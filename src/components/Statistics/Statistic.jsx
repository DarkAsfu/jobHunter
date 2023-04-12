// import React from 'react';

// const Statistic = () => {
//     return (
//         <div>
//             <h2>Statistics</h2>
//         </div>
//     );
// };

// export default Statistic;
import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'Assignment 01', value: 30 },
  { name: 'Assignment 02', value: 50 },
  { name: 'Assignment 03', value: 54 },
  { name: 'Assignment 04', value: 60 },
  { name: 'Assignment 05', value: 60 },
  { name: 'Assignment 06', value: 30 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FFF','#FFBB28', '#FFF'];
const Statistic = () => {
  return (
    <div><h1 className='text-3xl my-10 font-bold text-center'>Statistic of Assignment</h1>
    <PieChart className='mx-auto ' width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label colors={COLORS}/>
      <Tooltip />
    </PieChart></div>
  );
};

export default Statistic;
