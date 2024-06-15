import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
    return (
        <div className='AboutPage'>
            <div className='AboutText'>
                <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                <p>
                    Hello there &#x1F44B;, 
                    <br></br>
                    <br></br>
                    I'm <b>Dharma Acha</b>, a passionate Software Engineer specializing in Frontend
                    Development with comprehensive Full Stack knowledge. I hold a Master of Science in Computer
                    Science and Engineering from the <b>State University of New York at Buffalo</b>, where I honed my
                    skills in Machine Learning, Deep Learning, and Data-intensive Computing and Algorithms Analysis and Design
                    <br></br>
                    <br></br>
                    With extensive experience at <b> Cognizant </b> as a <b>Full Stack Developer</b>, I've led and contributed to
                    projects that significantly enhanced user experiences and operational efficiencies. My technical
                    prowess spans across a variety of programming languages and technologies including HTML 5, CSS 3,
                    JavaScript, React JS, Redux, Node.js, Express JS, MongoDB, and more...
                    
                </p>
            </div>

            <div>
                <Tilt>
                    <Lottie
                        className="illustration"
                        animationData={Coder}
                        loop={true}
                    />
                </Tilt>
            </div>

        </div>

    );
};

export default About;