import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import AboutImg from '../../assets/Capture.png'
const About = () => {
    return (
        <div>
             <Header/>
             <Navbar/>
             <div className="mt-5" >
                <img src={AboutImg} alt="AboutImg" h-full w-full />
             </div>
        </div>
    );
};

export default About;