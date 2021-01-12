import React from 'react'
import "./Pages.css"

const About = () => {
    return (
        <div className="ab-div">
            <h2>About the project</h2>
            <p className="ab-p">This project was made by me in order to learn by applying the knowledge I got by doing courses, reading documentations and watching yt videos on web development especially the <strong>MERN</strong> stack using which this website has been made. Find more details about the tools used in this project below.</p>
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
