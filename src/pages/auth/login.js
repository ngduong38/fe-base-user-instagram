import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";

export default function Login(){
    const {
        register,
        handleSubmit, 
        formState: { errors }, 
        resetError
    } = useForm();

    return(
        <>
            <div className="container-login">
                <div className="left">
                    <div className="screenshot" >
                        <img id="slide" className="slideShow" src="imges/screenshot1.png"  alt=""/>
                        {/* <img id="slide" className="slideShow" src="imges/screenshot2.png" alt=""/>
                        <img id="slide" className="slideShow" src="imges/screenshot3.png" alt=""/> */}
                    </div>
                </div>

                <div className="right">
                    <div className="right-top">
                        <div className="logo"></div>
                        <form className="info" >
                            <div>
                                
                                <input
                                    placeholder="Phone number,username, or email"
                                    type="text"
                                    className="name"
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
                            </div>
                            {errors.phone && <p className={'text-danger fw-bold'}>{errors.phone.message}</p>}
                            
                            
                            <input
                                placeholder="Password"
                                type="password"
                                className="password"
                                id="password"
                                {
                                    ...register('password', {
                                        required: 'Mật khẩu không được để trống',
                                        maxLength: {
                                            value: 20,
                                            message: "Mật khẩu không được lớn hơn 20 ký tự"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Mật khẩu không được ít hơn 6 ký tự"
                                        }
                                    })
                                }
                            />
                            {errors.password && <p className={'text-danger fw-bold'}>{errors.password.message}</p>}

                            <span className="error" id="errorPassword"></span>

                            <button  id="submit" disabled type="submit">Log In</button>
                            <div className="orther">
                                <div className="line"></div>
                                <div className="or">OR</div>
                                <div className="line"></div>
                            </div>
                        </form>

                        <div className="orther-login">
                            <div className="facebook"></div>
                            <span>Log in with Facebook</span>
                        </div>  
                        <div className="error">
                        <span className="error" id="errorName"></span>
                        </div>

                        <div className="orther-password" >
                            Forgot password? 
                        </div>

                    </div>

                    <div className="right-button">
                        <div className="sign-up">
                            <div>Don't have an account? <button><Link to={'/signup'}>Sign up</Link></button></div>
                        </div>
                    </div>

                    <div className="app">
                        <div>Get the app</div>
                        <div>
                            <img src="imges/gg play.png" alt=""/>
                            <img src="imges/Microshop.png" alt=""/>
                        </div>
                    </div>
                </div>    


            </div>
        </>
    )
}