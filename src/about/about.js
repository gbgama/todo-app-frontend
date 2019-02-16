import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='About' small=''></PageHeader>

        <p className="about-text">A simple React app for managing notes. The backend is provided by a Node.js restful api with MongoDB as the database.</p>
        
    </div>
)