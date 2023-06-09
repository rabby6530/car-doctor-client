
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
              
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img src={login} alt="login-image" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center ">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        <p className='text-center my-4' >New to Cars Doctor <Link className='text-orange-600 font-bold' to='/signUp' >Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;