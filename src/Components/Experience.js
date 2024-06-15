import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};

function Experience() {
    const timeline = [
      
        {
            icon: workIcon,
            date: 'November 2021 - August 2023',
            title: 'SOFTWARE ENGINEER',
            subtitle: 'COGNIZANT TECHNOLOGY SOLUTIONS CORP-',
            desc: 'React JS, AJAX, JSON, Redux, Javascript, Express JS, Node JS, Mongo DB, HTML, CSS, Github, Azure',

        },
        {
            icon: workIcon,
            date: 'June 2021 - November 2021',
            title: 'INTERN',
            // subtitle: 'COGNIZANT TECHNOLOGY SOLUTIONS CORP-',
            desc: 'HTML, CSS, JavaScript, Postman API, Git/GitHub, SQL, ',
        },

    ];

    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> Professional <b> Experience </b> </h1>
            <div  style={{paddingLeft:'0%', width:'100%',minHeight:'70vh', display:'flex',justifyContent:'center',alignItems:'center'}} >
                <VerticalTimeline layout="1-column">
                    {timeline.map((t, i) => {
                        const contentStyle =  { background: '#fff', color: '#000' };
                        const arrowStyle = { borderRight: '7px solid  rgb(33, 150, 243)', color: '#000' };


                        return (
              
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                date={t.date}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h3 className="vertical-timeline-element-title">{t.subtitle}</h3>
                                        {t.title && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.title}
                                            </h4>
                                        )}
                                        {t.desc && <p >{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;
