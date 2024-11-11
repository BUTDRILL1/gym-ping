import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import Header from '../../components/Header'

function SignInPage() {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center my-10'>
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage