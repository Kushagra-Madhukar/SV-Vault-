import React from 'react'
import "./Pages.css"

const About = () => {
    return (
        <div className="ab-div">
            <h2>About the project</h2>
            <p className="ab-p">This project was made under the tasks given during the Sparks foundation web development internship in which a basic banking system using any tech stack was to be build. The current project has been built using the <strong>MERN</strong> stack.</p>
            <h3>Frontend - </h3>
            <ol className="ab-ol">
                <li><strong>ReactJS -</strong>Entirely based on functional components and hooks</li>
                <li><strong>CSS3-</strong> purely used customized CSS for styling, no bootstrap</li>
                <li><strong>Axios-</strong> for communicating with backend</li>
                <li><strong>React Router-</strong> for routing</li>
            </ol>
            <h3>Backend and Database - </h3>
            <ol className="ab-ol">
                <li><strong>ExpressJS -</strong> Server framework for <strong>NodeJs</strong> used for backend rendering</li>
                <li><strong>mongoose -</strong> To communicate with database</li>
                <li><strong>MongoDB Atlas -</strong> Database</li>
            </ol>
        </div>
    )
}

export default About
