import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Reagister = () => {

    const heandelRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }
    return (
        <div>
            <Navbar />
            <div className=''>
                <h2 className='text-4xl font-semibold text-black text-center my-10'>Register your account</h2>

                <form onSubmit={heandelRegister} className="card-body lg:w-1/2 md:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter your photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center'>Already Have An Account ? <Link className='text-blue-600 font-bold'>Login</Link></p>
            </div>

        </div>
    );
};

export default Reagister;