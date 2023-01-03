import React from "react";
import Instructions from "./../instruction/Instructions";

const Main = () => {
    return (
        <div className="container mb-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* <div className="card">
                        <div className="card-body"> */}
                            <Instructions />
                            {/* <div className="text-center"> */}
                                <button type="submit" className="btn btn-xl btn-primary">Go & play!</button>
                            {/* </div> */}
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Main;