import React from 'react';
import ProjectBox from './ProjectBox';
import Employee from '../assets/Employee.jpg';
import finance from '../assets/finance.jpg';
// import imageClassification from '../assets/image-classification.jpg';
import Defect_tracking from '../assets/Defect_tracking.jpg';
import vgg from '../assets/vgg.jpg';
import online_store from '../assets/online_store.jpg';
import { useState } from 'react';






// const Projects = () => {
//     return (
//         <div style={{  }}>
//             <h1 className='projectHeading'>My <b>Projects</b></h1>
//             <div className='project'>
//                 <ProjectBox projectPhoto={Employee} projectName="Employability Classification of Job Applicants" />
//                 <ProjectBox projectPhoto={finance} projectName="Student Finance Database" />
//                 {/* <ProjectBox projectPhoto={imageClassification} projectName="Image Classification Using VGG-13" /> */}
//                 <ProjectBox projectPhoto={Defect_tracking} projectName="Defect Tracking System (DTS)" />
//                 <ProjectBox projectPhoto={online_store} projectName="Online Store Web Application" />
//                 <ProjectBox projectPhoto={vgg} projectName="Exploring Explainability in Deep Neural Networks with VGG Model" />
//             </div>
//         </div>
//     );
// };

// export default Projects;






const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <h1 className='projectHeading'>My <b>Projects</b></h1>
            <div className='project'>
                <ProjectBox projectPhoto={Employee} projectName="Employability Classification of Job Applicants" />
                <ProjectBox projectPhoto={finance} projectName="Student Finance Database" />
                <ProjectBox projectPhoto={Defect_tracking} projectName="Defect Tracking System (DTS)" />
                {showMore && (
                    <>
                        <ProjectBox projectPhoto={online_store} projectName="Online Store Web Application" />
                        <ProjectBox projectPhoto={vgg} projectName="Exploring Explainability in Deep Neural Networks" />
                    </>
                )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button 
                    onClick={handleShowMore}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                >
                    {showMore ? 'Show Less' : 'Show more Projects'}
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <h3 style={{ textAlign: 'center' }}>All my projects are available at <a style={{color:'white',textDecoration: 'none' }} href="https://github.com/dharma-acha" target='_blank' rel="noreferrer"><b>GitHub</b></a></h3>
            </div>
            
        </div>
    );
};

export default Projects;




