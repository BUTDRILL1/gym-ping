import React from 'react'
import gympingName from './gympingName.svg';
import { UserButton } from '@clerk/clerk-react';

function Header() {
    return (
        <header className='flex pt-1 bg-[#8a9fa0]'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center'>
                    <a href='/'>
                        <img src={gympingName} alt="Gymping Logo" className='h-auto w-40 mr-2' />
                    </a>
                </div>
                <div className='flex gap-[56px]'>
                    <a href='/spotter'>Spotter</a>
                    <a href='/locator'>Locator</a>
                    <a href='/dashboard'>Dashboard</a>
                </div>
                <div className='p-2 mb-[6px] mr-2 rounded-md'>
                    <UserButton />
                </div>
            </div>
        </header>
    )
}

export default Header;
