import React from "react";
// First Name
// Last Name
// Email (Logged in user's email)
// phone number
// Appointment data .
// address
// "Make Appointment" button

const Modal = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="text-black">
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            {/* <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                }
            >
                open modal
            </button> */}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between">
                            <p>First Name :</p>
                            <input
                                type="text"
                                name="Fname"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-between">
                           <p> Last Name :</p>
                            <input
                                type="text"
                                name="Lname"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-between">
                            <p>Email :</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-between">
                            <p>Phone Number :</p>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-between">
                            <p>Appointment Date :</p>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <div className="flex justify-between">
                            <p>
                            Address :
                            </p>
                            <input
                                type="text"
                                name="address"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Make Appointment</button>

                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
