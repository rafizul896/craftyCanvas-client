import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from 'react-toastify';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleClickShow = () => {
        setShow(!show)
    }
    const onSubmit = (data) => {
        const { email, password, userName, photoURL } = data
        setRegisterError('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters ar longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at leat one uppercase Characters.')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at leat one lowercase Characters.')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result)
                updateUserProfile(userName, photoURL)
                    .then(() => {
                        navigate()
                    })
                toast.success("Registration Success", {
                    theme: "colored",
                });
                location.reload()
            })
            .catch(error => {
                toast.error('Registration Invalid!', {
                    theme: "colored",
                });
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-[100vh] p-0">
            <div className="hero-content md:w-1/2 flex-col border mb-10 bg-base-100 shadow md:pb-0 px-0 py-10 rounded-2xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold">Register your account</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-base-200"
                                {...register("userName", { required: true })}
                            />
                            {errors.userName && <span className="text-red-500 p-1">Please Enter your name</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-base-200"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 p-1">Please Enter your email address</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your photo URL link" className="input input-bordered bg-base-200"
                                {...register("photoURL", { required: true })}
                            />
                            {errors.photoURL && <span className="text-red-500 p-1">Please Enter your photo URL</span>}
                        </div>
                        <div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered bg-base-200"
                                    {...register("password", { required: true })}
                                />
                                <div onClick={handleClickShow} className="absolute top-[64%] right-3 cursor-pointer">
                                    {
                                        show ? <IoEyeOffOutline /> : <IoEyeOutline />
                                    }
                                </div>
                            </div>
                            {registerError && <span className="text-red-500 p-1">{registerError}</span>}
                        </div>
                        <div className="flex gap-1 items-center">
                            <input type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms" className="label">
                                <span className="label-text font-semibold-alt link link-hover">Accept Term & Conditions</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white hover:bg-[#5144e6] bg-[#6a60e2] rounded-full">Register</button>
                        </div>
                        <p className="text-sm mt-2 text-center">Already Have An Account ? <Link to="/login" className="text-orange-700 font-medium">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;