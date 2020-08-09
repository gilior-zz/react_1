import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";
import Person_Class from "./Person/Person_class";
import Auth_Context from '../../context/auth-context'
class Persons_Class extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons_Class] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons_Class] shouldComponentUpdate');
        // return nextProps.age!==this.props.age 
        // || nextProps.input_change!==this.input_change 
        // || nextProps.on_person_click!==this.on_person_click;
        return true;

    }

    componentDidUpdate() {

    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('[Persons_Class] componentWillReceiveProps');

    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons_Class] getSnapshotBeforeUpdate');
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons_Class] componentDidUpdate');

    }

    render() {
        // return (
        //     <div>
        console.log('[Persons.js] rendering...')
        return (


            <Auth_Context.Consumer>
                {
                   (context)=> this.props.persons.map((item, index) => {

                        return (
                            <Person_Class key={index}

                                on_person_click={() => {
                                    this.props.on_remove_person(index)
                                }}
                                name={item.name}
                                age={item.age}
                                input_change={(event) => {

                                    this.props.on_name_change(event, index)
                                }}>
                                <mark>hello ya all</mark>
                            </Person_Class>
                        )
                    })
                }



            </Auth_Context.Consumer>


        )
    }
}

export default Persons_Class
