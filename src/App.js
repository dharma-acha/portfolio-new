import { Route, Routes,Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Project from './Components/Projects';
import MoveToTop from './Components/MoveToTop';
import Lottie from 'lottie-react';
import nightsky from './LottieFiles/night-sky.json';
import HashLoader from 'react-spinners/HashLoader';
import Skillset from './Components/skillSet';
import Education from './Components/Education';
import Experience from './Components/Experience';
import GetInTouch from './Components/touch';

function App() {
    const [Loading, SetLoading] = useState(true);
    useEffect(() => {
        SetLoading(true);
        setTimeout(() => {
            SetLoading(false);
        }
            , 1900);
    }, []);
    return (
        <>
            {Loading ? (
                <div className="loader">
                    <HashLoader
                        color={'#9067C6'}
                        loading={true}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <div>
                    <Lottie className="bg" animationData={nightsky} loop={true} />
                    <Lottie className="bgtwo" animationData={nightsky} loop={true} />
                    <Lottie className="bgtemp" animationData={nightsky} loop={true} />
                    <Nav />
                    <MoveToTop />
                    <Routes>
                        <Switch>
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/skills" element={<Skillset />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/Project" element={<Project />} />
                            <Route path="/Resume" element={<Resume />} />
                            <Route path="/touch" element={<GetInTouch />} />
                            <Redirect to="/" />
                        </Switch>
                    </Routes>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
