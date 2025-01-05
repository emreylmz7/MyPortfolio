import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/emreylmz7/Monetra" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/Monetra" target="_blank" rel="noreferrer"><h2>Monetra: ERP App</h2></a>
                <p>Monetra ERP is a .NET Core-based modern software that optimizes business processes and integrates areas like finance, sales, and inventory.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/WeatherApp" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/WeatherApp" target="_blank" rel="noreferrer"><h2>Weather App</h2></a>
                <p>The Weather App is an Angular project that fetches real-time weather data using a simple API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/ECommerceApp" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/ECommerceApp" target="_blank" rel="noreferrer"><h2>Ollie Shop: E-Commerce App</h2></a>
                <p>Ollie Shop is a scalable e-commerce platform built with ASP.NET Core, featuring microservices, role-based authentication, and real-time updates. It integrates PostgreSQL, MongoDB, and Redis for a seamless shopping experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/AIQuizApp" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/AIQuizApp" target="_blank" rel="noreferrer"><h2>Quizify: Quiz App</h2></a>
                <p>Quizfy is a React-based quiz app powered by Gemini AI. Users can select a topic, answer questions, and view their results. The app fetches quiz data from an external API for an interactive experience</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/HotelApp" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/HotelApp" target="_blank" rel="noreferrer"><h2>Residensea: Hotel App</h2></a>
                <p>Residensea Hotel API is a .NET Core 7-based hotel management system with features for customer, reservation, and staff management. It includes secure APIs, JWT authentication, and email notifications.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/CarBookingApp" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/CarBookingApp" target="_blank" rel="noreferrer"><h2>CarBook: Rent a Car App</h2></a>
                <p>Car Book Rent a Car App is an ASP.NET Core Web API for managing vehicle rentals with user-friendly interfaces and real-time updates. It supports vehicle listing, renting, returning, and account management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/MovieApp" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/MovieApp" target="_blank" rel="noreferrer"><h2>FlickZone: Movie App</h2></a>
                <p>A modern movie browsing app built with Angular and Tailwind CSS. Explore movies, search for titles, and view detailed film information with a responsive, user-friendly design.</p>
            </div>
            <div className="project">
                <a href="https://github.com/emreylmz7/BoatTourApp" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/emreylmz7/BoatTourApp" target="_blank" rel="noreferrer"><h2>Aqua Voyage: Boat Tour App</h2></a>
                <p>Aqua Voyage is a promotional app for a luxury boat tour company. This application provides information about Aqua Voyage’s services and tour routes. Please note that no reservation functionality is provided.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;