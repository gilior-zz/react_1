import React, {useState} from 'react';

const UserInput = (props) => {

    return (
        <input type="text" onChange={props.on_user_name_change} value={props.name}/>
    )
}

export default UserInput
