import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-blue-900 text-white p-4 flex justify-between fixed w-full top-0'>
      <div className='font-bold'>College Management</div>
      <div>
        <Link to='/' className='mr-4'>Home</Link>
        <Link to='/students'>Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;