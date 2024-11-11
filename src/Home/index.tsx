import React from 'react';
import homebg from "./../assets/home-bg.jpeg";

function Home() {
  return (
    <div
      className='text-white h-screen'
      style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className='flex font-bold text-[110px] justify-center pt-[50px]'>Gym-Ping</h1>
      <h2 className='flex font-bold text-[30x] justify-center'>Find-Fit-Thrive!</h2>
    </div>
  )
}

export default Home;
