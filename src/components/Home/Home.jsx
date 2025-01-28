import React from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
    const services = useLoaderData()
    // console.log(services)
    const {serviceData,feedBackData} = services;
    return (
        <div className="max-w-[90%] mx-auto">
            <Banner></Banner>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 ">
                {
                    serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>

                <button className="btn bg-blue-800  mx-auto text-white block my-20">
                    <NavLink to='/alltreatments'>
                    Show More
                    </NavLink>
                </button>
                <div className="divider"></div>

                <div className="mt-10">
                <FeedBack feedBackData={feedBackData}></FeedBack>
                </div>

        </div>
    );
};

export default Home;
