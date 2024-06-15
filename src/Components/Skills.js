import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGitAlt,FaGithub, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiJavascript1,DiMysql } from 'react-icons/di';
import { SiExpress, SiMongodb,SiPostman,SiTypescript } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { SiMicrosoftazure } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { SiStreamlit } from 'react-icons/si';

import { SiJquery } from 'react-icons/si';


const Skills = ({ skill }) => {
    const icon = {
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        MySQL: <DiMysql />,
        Postman:<SiPostman/>,
        Github: <FaGithub/>,
        CSS:<FaCss3Alt/>,
        Bootstrap: <FaBootstrap />,
        Docker:<FaDocker />,
        Html:<FaHtml5 />,
        Azure: <SiMicrosoftazure/>,
        Android: <FaAndroid/>,
        VisualStudio: <FaMicrosoft/>,
        Sass: <SiSass/>,
        GoogleColab: <FaGoogle/>,
        Python: <DiPython/>,
        Streamlit: <SiStreamlit/>,
        jQuery: <SiJquery/>,
        Typescript:<SiTypescript/>,
        
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
