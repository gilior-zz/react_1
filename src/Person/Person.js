import React from 'react'

const person = (props) => {
    return (
        <div>

            <h6 onClick={props.person_click}>
                im a person!

            my name is {props.name}  {" "}


            my age is {props.age}
                <br/>
            change my name:

            <input value={props.name} onChange={props.input_change} type="text"/>
<br/>
            {props.children}
        </h6>

        </div>

    )

}

export default person;
