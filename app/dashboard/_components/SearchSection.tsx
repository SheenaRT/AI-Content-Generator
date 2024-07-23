import { Search } from 'lucide-react';
import React from 'react';

export default function () {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-200 via-purple-400 to-blue-300 flex justify-center flex-col items-center'>
      <h2 className='text-3xl font-bold text-white'>Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[50%]'>
          <Search className='text-gray-500'/>
          <input type='text' placeholder='Search' className='bg-transparent w-full outline-none text-black'/>
        </div>
      </div>
    </div>
  );
}
