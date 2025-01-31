import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(authContext);

    return (
        <div>
            <div className='w-96 mx-auto mt-10'>
                <h2 className="text-3xl text-center my-3">Your User Profile</h2>
                <img src={user.photoURL} alt="" className="mx-auto" />
                <p className="text-2xl">Name : {user.displayName}</p>
                <p className="text-2xl">Email : {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;
