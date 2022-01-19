import React from "react";

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

//equivalent to {props.message || 'Loading...'} in the div above
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;