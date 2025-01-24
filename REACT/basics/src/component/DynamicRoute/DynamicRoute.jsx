import React from 'react'
import {Link} from 'react-router-dom'
import Profile from './Profile'
const DynamicRoute = (props) => {
    return (
        <div>
            {
                props.data.map((item) =>
                    <>
                        <h1>Name:<Link to={'/data/'+item.id+'/'+item.name}>{item.name}</Link></h1>
                        
                    </>

                )
            }
            <Profile/>
        </div>
    )
}

export default DynamicRoute
