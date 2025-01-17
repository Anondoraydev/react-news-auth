 import career from '../../assets/creear.png'
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
const Career = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div>
                <img src={career} alt="" />
            </div>
        </div>
    );
};

export default Career;