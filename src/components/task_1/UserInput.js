import React, {useState,useEffect} from 'react';

const UserInput = (props) => {
useEffect(()=>{
    console.log('UserInput.js useEffect')
})
    return (
        <input type="text" onChange={props.on_user_name_change} defaultValue={props.name}/>
    )
}

export default UserInput
