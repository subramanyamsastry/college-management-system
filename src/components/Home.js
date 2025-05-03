import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const students = useSelector(state => state.students);

  return (
    <div className='pt-24 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to the College Management System</h1>
      <div className='bg-white p-6 shadow-md rounded w-1/3 mx-auto text-lg'>
        Total Students: {students.length}
      </div>
    </div>
  );
}

export default Home;
