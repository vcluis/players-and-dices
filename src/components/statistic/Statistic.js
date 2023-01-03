import React from "react";
import { Fragment } from "react";

const Statistic = ({name, values}) => {

    const renderedValues = values.map(element => <li>{element}</li>);

    return (
        <Fragment>
            <div>Name: {name}</div>
            <div>
                Obtained values:
                <ul>
                    {renderedValues}
                </ul>
            </div>
        </Fragment>
    );
}

export default Statistic;