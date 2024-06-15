import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const starIcon = {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

function Experience() {
    const timeline = [
        {
            icon: starIcon,
            date: 'August 2023 - December 2024',
            title: 'Master of Science (M.S) ',
            subtitle: 'Computer Science & Engineering',
            desc: 'University at Buffalo-SUNY, Buffalo, NY, USA',
        },
        {
            icon: starIcon,
            date: 'August 2017 - May 2021',
            title: 'Bachelor of Technology (B.Tech) ',
            subtitle: 'Electrical and Electronics Engineering',
            desc: 'Jawaharlal Nehru Technological University, Hyderbad, India',
        }
    ];

    return (
        <>
            <h1 className='SkillsHeading' style={{marginTop:'100px'}}> My <b> Education </b> </h1>

            <div className="App" style={{marginTop:'60px',minHeight:'70vh'}}>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                        const contentStyle =
            i === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : undefined;
                        const arrowStyle =
            i === 0
                ? { borderRight: '7px solid  rgb(33, 150, 243)' }
                : undefined;

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
                                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
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
