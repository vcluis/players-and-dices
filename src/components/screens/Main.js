import { Link } from "react-router-dom";
import Instructions from "./../instruction/Instructions";

const Main = () => {
    return (
        <div className="container mb-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Instructions />
                    <Link to="/register" className="btn btn-primary">Go & Play</Link>
                </div>
            </div>
        </div>
    );
}

export default Main;