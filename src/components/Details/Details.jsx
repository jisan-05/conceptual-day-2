import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
    const singleData = useLoaderData();

    const { id, treatment, image, description } = singleData;

    console.log(singleData);
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                        <p className="mb-5">{description}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_5")
                                    .showModal()
                            }
                        >
                            Book Appointment
                        </button>

                            <Modal></Modal>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
