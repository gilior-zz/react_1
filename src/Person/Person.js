import React from 'react'
import   './Person.css'
const person = (props) => {
    return (
        <div onClick={props.on_person_click} className="Person">

            {/*<p onClick={props.person_click}>*/}
            <p>
                im a person!

            my name is {props.name}  {" "}


            my age is {props.age}
                <br/>
            change my name:

            <input value={props.name} onChange={props.input_change} type="text"/>
<br/>
            {props.children}
        </p>

        </div>

    )

}

export default person;
