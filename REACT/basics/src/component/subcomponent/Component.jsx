import React from 'react'
import User from './User'
import './Component.css'
const Component = () => {
    return (
        <div className='flex'>
            <h1 className='U'>This is Sub component</h1>
            <div className="content">
                <User />
                <User />
                <User />
            </div>

        </div>
    )
}

export default Component
