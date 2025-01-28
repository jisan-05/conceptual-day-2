import React from "react";

const FeedBack = ({ feedBackData }) => {
    // console.log(feedBackData);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
            {feedBackData.map((feed, idx) =>  (
                <div key={idx} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <img
                                src={feed.userImg}
                                className="w-12 h-12 rounded-full border mr-4 border-blue-600"
                                alt=""
                            />
                            <h2 className="card-title">{feed.name}</h2>
                            <p className="text-right ">{new Date().toLocaleDateString()}</p>
                        </div>
                        <p>{feed.review}</p>
                        <div className="card-actions justify-end items-center">
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                    defaultChecked
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                />
                                <input
                                    type="radio"
                                    name="rating-1"
                                    className="mask mask-star"
                                />
                            </div>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedBack;
