import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";

export default function Signup() {
    const {
        register, 
        formState: { errors }, 
    } = useForm();

    return(
        <>
        <div className = "containers">
            <div className="row">
                <div className="align-self-stretch">
                    <div className="col text-center">
                        <div className="logo-signup"></div>
                        <p className="info"> Sign up to see photos and videos form your friends.</p>
                        <button type="submit" className="btn btn-primary btn-block">
                            <div className="facebook-avatar"></div>
                            Login with Facebook
                        </button>
                        <p className="or">OR</p>
                        <form>
                            <div className="form-group">
                                <input
                                    placeholder="Phone number,username, or email"
                                    type="text"
                                    className="form-control"
                                    id="inputPhone"
                                    {...register('phone', {
                                        required:"Please enter your phone number", 
                                        minLength:{
                                            value :10 , 
                                            message :"Phone Number must be at least 10 characters"
                                        },
                                        maxLength: {
                                            value: 11,
                                            message:'Phone Number cannot exceed more than 11 characters'
                                        }
                                    })}
                                />
                                {errors.phone && <p className={'text-danger fw-bold'}>{errors.phone.message}</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Full Name"
                                    type="text"
                                    className="form-control"
                                    id="inputFullName"
                                    {...register('fullName', {
                                        required:"Please enter your phone full name", 
                                        minLength:{
                                            value :0 , 
                                            message :"Full Name must be at least 0 characters"
                                        },
                                        maxLength: {
                                            value: 36,
                                            message:'Full Name cannot exceed more than 36 characters'
                                        }
                                    })}
                                />
                                {errors.fullName && <p className={'text-danger fw-bold'}>{errors.fullName.message}</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Username"
                                    type="text"
                                    className="form-control"
                                    id="inputUsername"
                                    {...register('userName', {
                                        required:"Please enter your Username", 
                                        minLength:{
                                            value :0 , 
                                            message :"Username must be at least 0 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:'Username cannot exceed more than 20 characters'
                                        }
                                    })}
                                />
                                {errors.userName && <p className={'text-danger fw-bold'}>{errors.userName.message}</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Password"
                                    type="text"
                                    className="form-control"
                                    id="inputPassword"
                                    {...register('password', {
                                        required:"Please enter your password", 
                                        minLength:{
                                            value :0 , 
                                            message :"Password must be at least 0 characters"
                                        },
                                        maxLength: {
                                            value: 11,
                                            message:'Password cannot exceed more than 11 characters'
                                        }
                                    })}
                                />
                                {errors.password && <p className={'text-danger fw-bold'}>{errors.password.message}</p>}
                            </div>
                            <p className="policy">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                            <br/>
                            <p className="policy">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                            <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                        </form> 
                    </div>
                    <div className="col-bottom text-center">
                        <p>Have a account?<a href="#"><Link to={'/login'}>Login</Link></a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}