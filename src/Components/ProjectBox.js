import React from 'react';
import {FaGithub} from 'react-icons/fa';


const  ProjectBox = ({projectPhoto, projectName}) => {
    const desc = {
        'Employability Classification of Job ApplicantsDesc' : 'Python, Pandas, Scikit-Learn, Streamlit, Matplotlib',
        'Employability Classification of Job ApplicantsGithub' : 'https://github.com/dharma-acha/employability_jobApplicants',
        'Employability Classification of Job ApplicantsWebsite' : '',

        'Student Finance DatabaseDesc' : 'PostgreSQL, Streamlit, Python',
        'Student Finance DatabaseGithub' : 'https://github.com/dharma-acha/student_finance_database',
        'Student Finance DatabaseWebsite' : '',

        'Defect Tracking System (DTS)Desc' : 'React JS, Express JS, MongoDB',
        'Defect Tracking System (DTS)Github' : 'https://github.com/dharma-acha/defect_tracking_system',
        'Defect Tracking System (DTS)Website' : '',

        'Online Store Web ApplicationDesc' : 'HTML 5, CSS 3, JavaScript, Bootstrap',
        'Online Store Web ApplicationGithub' : 'https://github.com/dharma-acha/online_store_webApplication',
        'Online Store Web ApplicationWebsite' : '',

        'Exploring Explainability in Deep Neural NetworksDesc' : 'Pandas, Python, PyTorch, SHAP, Grad-CAM',
        'Exploring Explainability in Deep Neural NetworksGithub' : 'https://github.com/dharma-acha/explanability_in_deepNeuralnetworks',
        'Exploring Explainability in Deep Neural NetworksWebsite' : '',

    };
    let show ='';
    if(desc[projectName + 'Github']===''){
        show='none';
    }
    return (
        <div className='projectBox'> 
            <img className='projectPhoto' src={projectPhoto} alt="Project display" />
            <hr/> 
            <div>
                <br />
                <h3>{projectName}</h3>
                <br />
                {desc[projectName + 'Desc']}
                <br />

                <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
                    <button className='projectbtn'><FaGithub/> GitHub</button>
                </a>

            </div>
        </div>
    );
};

export default  ProjectBox;