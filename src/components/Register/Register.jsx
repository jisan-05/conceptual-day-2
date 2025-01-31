import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext);

    const [error,setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password.length < 6){
            setError("Password must need 6 character")
            return;
        }

        if(password !== confirmPassword) {
            setError("Password and Confirm Password Don't Match")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Must need 1 Lowercase in password")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Must need 1 UpperCase in password")
            return;
        }


        console.log(name,image,email,password,confirmPassword)
        handleRegister(email,password)
        .then(res => {
            manageProfile(name,image)
        })

    }

    return (
        <div>
            <form className="flex flex-col items-center mt-10 space-y-3" onSubmit={handleSubmit}>
                <div>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                </div>
                <div>
                    <p>Image</p>
                <input
                    type="text"
                    name="image"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                </div>
                <div>
                    <p>Email</p>
                <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                </div>
                <div>
                    <p>Password</p>
                <input
                    type="text"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                </div>
                <div>
                    <p>Confirm Password</p>
                <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p className="text-red-600">{error? error:""}</p>
            </form>
        </div>
    );
};

export default Register;
