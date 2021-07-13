import React from 'react';
import { useForm } from 'react-hook-form';

import coaching from '../../images/ad-new-usp-1.png';
import diet from '../../images/ad-new-usp-2.png';
import onetoone from '../../images/ad-new-usp-3.png';



import './styles.css';

const Appointment = () => {
    const {register,handleSubmit,formState: {errors}} = useForm();

    const onSubmit = (data,r) => {
        console.log(data);

        r.target.reset();


    }
    return (
        <div className="container">
            <div className="appointmentcomponent">

                <div className="features">
                    <div className="f1">

                        <div className="relatedimage"><img src={coaching} alt="Personalised Coaching" /></div>
                        <div className="relatedtext">Personalised<br /> Coaching</div>
                    </div>
                    <div className="f1">

                        <div className="relatedimage"><img src={diet} alt="Diet Plans" /></div>
                        <div className="relatedtext">Diet Plans</div> 
                    </div>
                    <div className="f1">

                        <div className="relatedimage"><img src={onetoone} alt="One-to-One Interaction" /></div>
                        <div className="relatedtext">One-to-One<br /> Interaction</div>
                    </div>
                </div>    

                    <div className="appointment">

                        <div className="formoutline">

                            <div className="appointmentSchedule"><p>Schedule an<br /> Appointment</p></div>
                            <div className="visitorText"><p>Here, let visitors know what will happer when they complete your form</p></div>

                            <div className="actualForm">
                                <form onSubmit={handleSubmit(onSubmit)} className="theform">
                                    <input placeholder="First Name"
                                        {...register("firstName",{
                                            required: true,
                                            maxLength: 20
                                        })}
                                    />
                                    <input placeholder="Last Name" {...register("lastName", { maxlength: 20 })} />
                                    
                                    <input placeholder="Email" {...register("email", { maxlength: 40 })} />
                                    {/* {errors?.email?.type === "maxLength" && (
                                        <p>enter a valid emailid</p>
                                    )} */}
                                    <input placeholder="Number" {...register("phoneNum", { maxlength: 10 })} />
                                    {/* {errors?.lastName?.type === "maxLength" && (
                                        <p>Phone number cannot exceed 10 characters</p>
                                    )} */}
                                    <select placeholder="Type of Appointment" {...register("gender")}>
                                        <option value="1">Appointment1</option>
                                        <option value="2">Appointment2</option>
                                        <option value="3">Appointment3</option>
                                </select>
                                    <input type="submit" value="Submit" className="submitButton" />
                                </form>

                            </div>
                        </div>
                    </div>
    
            </div>
        </div>
    )
}

export default Appointment
