import logo from './logo.svg';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" 
         style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale)', 
          perspective: '1px', height: '100vh', overflowX: 'hidden', overflowY: 'auto'
         }}>

      <div className='parallax-layer absolute inset-0 bg-black opacity-20 transform -translateZ(1px) scale(2)'></div>

      <div className='content-container mx-auto w-3/4 bg-white bg-opacity-80 p-8 rounded-md shadow-md relative top-1/2 transform -translate-y-1/2'>
        <h1 className='text-4xl font-bold text-blue-800 mb-4'>Home-Main</h1>
        <p className='text-gray-700 leading-relaxed'>
            Here is the content of a personal blog, sharing bits and pieces of life and technical experience.
        </p>  
      </div>
    </div>
  )
}

export default App;
