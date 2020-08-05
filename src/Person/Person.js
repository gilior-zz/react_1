import React from 'react'
import   './Person.css'
const person = (props) => {
    return (
        <div className="Person">

            <p onClick={props.person_click}>
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
