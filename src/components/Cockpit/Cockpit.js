import React, { useEffect, useRef } from 'react'
import UserInput from "../task_1/UserInput";
import UserOutput from "../task_1/UserOutput";
import Validation from "../Validation/Validation";
import Char from "../Char/Char";
import Persons_Class from '../Persons/Persons_Class'
const Cockpit = (props) => {
    const btn_hi_ref = useRef(null);
    useEffect(() => {
        btn_hi_ref.current.click();

        const timer = setTimeout(() => {
            console.log('[Cockpit.js] feched  data');
        }, 1000);

        return (() => {
            clearTimeout(timer);
            console.log('[Cockpit.js] useEffect clean up');
        })



    }, []
    )

    const hi_frm_btn = () => console.log('hi from button')
    return (
        <div>
            <button ref={btn_hi_ref} onClick={() => console.log('hi from button')}> hi from button</button>
            {
                props.show_persons ?
                    <Persons_Class toggle_persons={props.toggle_persons}
                        on_name_change={(event, index) => props.on_name_change(event, index)}
                        on_remove_person={(index) => props.remove_person(index)}
                        persons={props.persons}></Persons_Class> : null}

            <UserInput name={props.usernames[0]} on_user_name_change={props.update_user_name}></UserInput>
            <UserOutput name={props.usernames[0]}></UserOutput>
            <UserOutput name={props.usernames[1]}></UserOutput>
            <UserOutput name={props.usernames[2]}></UserOutput>
            <h2>task_list_cond</h2>
            <input onChange={props.on_update_char_state} value={props.chars} type="text" />
            <Validation txt_length={props.chars.length}></Validation>
            {
                props.chars.split('').map((char, index) =>
                    <Char on_click={(index) => {
                        props.on_remove_char(index)
                    }} char_obj={{ char, index }}></Char>
                )
            }
        </div>
    )
}

export default React.memo(Cockpit) 
