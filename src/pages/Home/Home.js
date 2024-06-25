import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
function Home() {
    return (
        <div className='page-content'>
            <h1> Dive Center - PADI </h1>
            <LoginForm />
        </div>
    )
}export default Home