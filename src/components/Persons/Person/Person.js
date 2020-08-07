import React from 'react'
import './Person.css'
import Radium from "radium";
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
      '@media(min-width:500px)': {
            width: '450px'
        }
`
const person = (props) => {
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }

    }

    return (
        // <div onClick={props.on_person_click} className="Person" style={style}>

        // <p onClick={props.person_click}>
        <StyledDiv onClick={props.on_person_click}>
            <p>
                im a person!

                my name is {props.name} {" "}


                my age is {props.age}
                <br/>
                change my name:

                <input value={props.name} onChange={props.input_change} type="text"/>
                <br/>
                {props.children}
            </p>
        </StyledDiv>
    )

}

export default person;
// export default Radium(person);
