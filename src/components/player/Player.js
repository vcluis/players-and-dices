import { useState } from "react";
import {store, nameAction} from "../../store/store";

const Player = ({id}) => {

    const [name, setName] = useState("");

    const [isFieldDisabled, setIsFieldDisabled] = useState(false);

    const handleName = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        store.dispatch(nameAction(id, name));
        setIsFieldDisabled(true);
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="mb-5">
            <div className="row mb-2">
                <div className="col ">
                    <input type="text" name="name" id="name" value={name} onChange={handleName} className="form-control" placeholder="Enter your name" disabled={isFieldDisabled} />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="text-center">
                        <button type="submit" disabled={isFieldDisabled} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Player;