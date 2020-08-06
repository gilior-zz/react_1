import React from "react";


const Validation = (props) => {
    return (
        <div>
            Text Too {props.txt_length > 5 ? 'long' : 'short'}
        </div>
    )
}

export default Validation
