import React from 'react';
import { FaReact, FaCss3Alt,FaDocker, FaGitAlt,FaGithub, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { DiNodejs, DiJavascript1,DiMysql } from 'react-icons/di';
import { SiExpress, SiMongodb,SiPostman,SiTypescript } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { SiMicrosoftazure } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';
import { FaMicrosoft} from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { SiStreamlit,SiAmazonaws, SiApachedruid,SiPostgresql, SiR, SiC, SiCplusplus, SiLinux,} from 'react-icons/si';
import { SiJquery, SiGraphql, SiRedux,SiPandas, SiPytorch, SiTensorflow, SiKeras, SiNumpy, SiJest,SiScikitlearn} from 'react-icons/si';


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
        AWS: <SiAmazonaws />,
        Mapreduce: <SiApachedruid />,
        Postgresql: <SiPostgresql />,
        R: <SiR />,
        C: <SiC />,
        Cplusplus: <SiCplusplus />,
        Linux: <SiLinux />,
        GraphQl: <SiGraphql />, // Icon for GraphQL
        Redux: <SiRedux />, // Icon for Redux
        Pandas: <SiPandas />, // Icon for Pandas
        PyTorch: <SiPytorch />, // Icon for PyTorch
        Tensorflow: <SiTensorflow />, // Icon for TensorFlow
        Keras: <SiKeras />, // Icon for Keras
        Numpy: <SiNumpy />, // Icon for NumPy
        Jest: <SiJest />, // Icon for Jest
        Scikitlearn: <SiScikitlearn />, // Icon for Scikit-Learn

    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
