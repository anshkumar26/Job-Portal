import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
const Navbar = () => {

    const {openSignIn} =useClerk()
    const {user} = useUser()
  return (
    <div>
        <div className='container px-4 2xl mx-auto flex justify-between items-center '>
            <img src={assets.logo} />
            {
                user
                ?<div className='flex items-center gap-3'>
                    <Link to={'/applications'}>Applied Jobs</Link>
                    <p>|</p>
                    <p>Hi, {user.firstName+""+user.lastName}</p>
                    <UserButton />
                </div> 
                :<div className='flex gap-4 max-sm:text-xs'>
                <button className='text-gray-600'>Recruiter Login</button>
                <button onClick={e=>openSignIn()} className=' bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
            </div> 
            }
        </div>
    </div>
  )
}

export default Navbar