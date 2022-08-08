import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ( {darkTheme, setdarkTheme} ) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-2 dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center w-screen'>
                <Link to='/'>
                    <p className=' p-1 font-xl font-bold text-white bg-blue-500 rounded dark:bg-gray-100 dark:text-gray-900'>
                        KHOJO 🔍
                    </p>
                </Link>
                <button type='button' onClick={() => setdarkTheme(!darkTheme)} className=' bg-white-100 rounded-full border px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? "Dark 🌙" : "Light 🌞"}
                </button>
            </div>
        </div>
    )
}
