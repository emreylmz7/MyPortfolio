import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpg';
import { Instagram, Mail } from "@mui/icons-material";


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/emreylmz7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/veysel-emre-yilmaz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/emree.ylmz7/" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="mailto:yilmazvemre@gmail.com" target="_blank" rel="noreferrer"><Mail/></a>
          </div>
          <h1>Emre Yılmaz</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/emreylmz7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/veysel-emre-yilmaz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/emree.ylmz7/" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="mailto:yilmazvemre@gmail.com" target="_blank" rel="noreferrer"><Mail/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;