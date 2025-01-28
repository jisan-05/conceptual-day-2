import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const {handleGoogleLogin} = useContext(authContext)  

    return (
        <div>
            <button className='btn btn-success' onClick={handleGoogleLogin}>Login With Google</button>
            <br />
            New to the user ? Please <NavLink to='/register' className='text-blue-600'>register</NavLink>
        </div>
    );
};

export default Login;