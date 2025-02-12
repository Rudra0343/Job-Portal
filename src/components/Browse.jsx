import React from 'react'
import Navbar from './shared/Navbar'

const randomJobs = [1,2,3];

const Browse = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1>Search Results ({randomJobs.length})</h1>
                
            </div>
        </div>
    )
}

export default Browse
