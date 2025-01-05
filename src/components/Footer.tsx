import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { Instagram, Mail } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
          <a href="https://github.com/emreylmz7" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/veysel-emre-yilmaz" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/emree.ylmz7/" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="mailto:yilmazvemre@gmail.com" target="_blank" rel="noreferrer"><Mail/></a>
      </div>
    </footer>
  );
}

export default Footer;