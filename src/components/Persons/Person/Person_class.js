import React, { Component } from "react";
import styled from "styled-components";
import Hoc_Wrapped from "../../../hoc/Wrapped";
import { PropTypes } from 'prop-types'
// import  classes_css from "./Person.module.css";

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

class Person_Class extends Component {
  
    componentDidMount() {
        this.input_element.focus();
    }
    render() {
        return (
            <div>
                <StyledDiv onClick={this.props.on_person_click}>
                    <p>
                        im a person!

                        my name is {this.props.name} {" "}


                        my age is {this.props.age}
                        <br />
                        change my name:

                        <input
                            ref={(inputEl) => { this.input_element = inputEl }}
                            onClick={(e) => { e.stopPropagation() }}
                            value={this.props.name}
                            onChange={this.props.input_change} type="text" />
                        <br />
                        {this.props.children}
                    </p>
                </StyledDiv>
            </div>
        )
    }
}
Person_Class.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default Person_Class
