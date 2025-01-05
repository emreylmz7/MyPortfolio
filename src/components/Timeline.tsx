import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

import shipentegra from '../assets/images/shipentegra.png';
import mutluyazilim from '../assets/images/mutluyazılım.png';


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={mutluyazilim} alt="Mutlu Yazılım Logo" />
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mutlu Yazılım, Izmir</h4>
            <p>
              Designed and integrated APIs, managed databases, and developed responsive UIs. Key projects include the Medical Devices Tracking System and the ERP Accounting Project.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug - Sep 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={shipentegra} alt="ShipEntegra Logo" />
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ShipEntegra, Istanbul</h4>
            <p>
              Developed e-commerce web pages using React and Angular, focusing on modular and maintainable code.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          > 
            <img src="https://upload.wikimedia.org/wikipedia/tr/e/e5/S%C3%BCleyman_Demirel_%C3%9Cniversitesi_logosu.png" alt="Suleyman Demirel University Logo" />
            <h3 className="vertical-timeline-element-title">Computer Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree, Isparta</h4>
            <p>
              Suleyman Demirel University
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
