import { Link } from "react-router-dom";
import error from "../assets/error.gif"
const ErrorPage = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-6xl text-red-600 font-bold mb-5">Oops!!!</h2> 
            <img src={error} alt="" />

            <Link to="/" className="bg-teal-500 p-5 mt-5 inline-block text-center rounded-lg mt-5">
                Go back to Home
            </Link>


        </div>
    );
};

export default ErrorPage;