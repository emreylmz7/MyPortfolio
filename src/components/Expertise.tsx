import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faAngular } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faSitemap } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Angular",
    "JavaScript",
    "HTML5",
    "CSS3",
    "C#",
    "ASP.NET Core",
    "SQL",
    "Microsoft SQL Server",
    "LINQ",
    "Entity Framework",
];

const labelsSecond = [
    "Git",
    "Docker",
    "Redis",
    "MongoDB",
    "PostgreSQL",
    "MsSQL",
    "JWT Authentication",
    "Microservices",
    "RESTful APIs",
];

const labelsThird = [
    "SignalR",
    "CQRS",
    "Mediator",
    "Automapper",
    "Onion Architecture",
    "Clean Architecture",
    "Fluent Validation",
    "Identity Server",
    "Ocelot Gateway",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAngular} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have developed scalable web applications using technologies like React, Angular, and ASP.NET Core. My experience includes both frontend and backend development with a strong focus on responsive design and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Backend</h3>
                    <p>Proficient in containerization, database design, and implementing secure APIs. I have worked with tools like Docker and Redis to optimize deployment pipelines and backend performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSitemap} size="3x"/>
                    <h3>Architecture & Patterns</h3>
                    <p>Expertise in modern software architectures and design patterns such as Onion Architecture, CQRS, and Mediator. I focus on building robust systems that are scalable and maintainable.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
