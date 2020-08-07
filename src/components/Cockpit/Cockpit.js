import React from 'react'
import UserInput from "../task_1/UserInput";
import UserOutput from "../task_1/UserOutput";
import Validation from "../Validation/Validation";
import Char from "../Char/Char";

const Cockpit = (props) =>
    (
        <div>

            <UserInput name={props.usernames[0]} on_user_name_change={props.update_user_name}></UserInput>
            <UserOutput name={props.usernames[0]}></UserOutput>
            <UserOutput name={props.usernames[1]}></UserOutput>
            <UserOutput name={props.usernames[2]}></UserOutput>
            <h2>task_list_cond</h2>
            <input onChange={props.on_update_char_state} value={props.chars} type="text"/>
            <Validation txt_length={props.chars.length}></Validation>
            {
                props.chars.split('').map((char, index) =>
                    <Char on_click={(index) => {
                        props.on_remove_char(index)
                    }} char_obj={{char, index}}></Char>
                )
            }
        </div>
    )

export default Cockpit
