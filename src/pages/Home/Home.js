import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
function Home() {
    return (
        <div>
            <div className='page-content'>
            <h1> Dive Center - PADI </h1>
            <LoginForm />
        </div>
        <div className='islalogo'>
            <img id = "isla" src='./isla_san andres.webp' alt="Isla Caribe logo" />  
        </div>
    </div> 
    )
}export default Home