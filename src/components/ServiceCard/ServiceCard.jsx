import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
    // console.log(service);
    const {id,cost,description,image,treatment} = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className="h-44 mt-6 rounded-xl"
                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">{cost}</div>
                </h2>
                <p title={description}>{description.slice(0,120)} ...</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}>
                    <button className="badge  p-4 bg-blue-800 text-white cursor-pointer">Checkout More</button>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
