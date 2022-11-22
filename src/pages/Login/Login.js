import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../coponent/AuthProvider/AuthProvider';
// import useToken from '../../Hook/useToken';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [Token] = useToken(loginUserEmail)
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const from = location.state?.from?.pathname || '/'

    // if (Token) {
    //     navigate(from, { replace: true })
    // }

    const getUserToken = email => {
        fetch(`https://doctor-portal-server-side.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate(from, { replace: true })

                }
            })
    }
    const loginSubmit = (data) => {
        console.log(data)
        singIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                getUserToken(data.email)
                // setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[800px] flex  justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-3xl text-center'> Log In </h1>
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",
                            { required: "Email Address is required" }
                        )} type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full   max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: "password  is required",
                                minLength: { value: 6, message: ' you password must be 6 character & longer ' }
                            },

                        )} type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                        <label className="label mt-2">
                            <span className="label-text">Forget password</span>
                        </label>
                        {errors.password && <p role='alert' className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                    <input className='w-full bg-slate-700 hover:bg-slate-900 cursor-pointer mt-2 text-white text-center p-3 rounded-lg' value='Log In' type="submit" />
                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <p className='mt-3'>New Doctor Portal ? <Link to='/signup' className='text-primary'>create new account</Link></p>
                    <div className="divider">OR</div>
                    <div className="grid py-4 card rounded-xl border-2 border-accent place-items-center">CONTINUE WITH GOOGLE</div>
                </div>
            </div>
        </div>
    );
};

export default Login;