import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 max-w-[90%] mx-auto">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
        </div>
    );
};

export default AllTreatments;
