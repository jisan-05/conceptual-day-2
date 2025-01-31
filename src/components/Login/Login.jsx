import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { handleGoogleLogin, handleLogin } =
        useContext(authContext);

    const [error, setError] = useState();
    const location = useLocation()
    const  navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(() => {
                navigate(location.state.from)
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    

    const googleLoginHandler = () =>{
        handleGoogleLogin()
        .then(()=> {
            navigate(location.state.from)
        })
    }


    return (
        <div>
            <form
                className="flex flex-col items-center mt-10 space-y-3"
                onSubmit={handleSubmit}
            >
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
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
                <div className="text-red-600">{error ? error.split("/")[1] : ""}</div>
                
                {/* ----------------------------- */}
                <button className="btn btn-success" onClick={googleLoginHandler}>
                    Login With Google
                </button>
                <br />
                New to the user ? Please{" "}
                <NavLink to="/register" className="text-blue-600">
                    register
                </NavLink>
            </form>
        </div>
    );
};

export default Login;
