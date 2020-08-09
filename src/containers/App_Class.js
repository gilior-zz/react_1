import React, { Component } from 'react'
import classes_css from "./App.module.css";
import { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons_Class from "../components/Persons/Persons_Class";
import With_Class from '../hoc/With_Class'
class App_Class extends Component {
    state = {
        show_persons: true,
        persons: [
            { id: 1, name: 'a', age: 1 },
            { id: 2, name: 'b', age: 2 },
            { id: 3, name: 'c', age: 3 },
        ],
        char_state: '',
        usernameState: [
            'a',
            'b',
            'c'],
        show_cockpit: true,
        click_number: 0
    }

    constructor(props) {
        super(props);
        console.log('app class ctor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[aApp_Class] shouldComponentUpdate');
        return true;
        // return false;
    }

    remove_person = (index) => {
        console.log(index)
        let cloned = [...this.state.persons]
        cloned.splice(index, 1);
        // this.state.persons = cloned;
        this.setState({ persons: cloned })
    }

    remove_char = (index) => {
        let splited = this.state.char_state.split('')
        splited.splice(index, 1);
        let new_str = splited.join('');
        console.log(new_str)
        // this.state.char_state = new_str;
        this.setState({ char_state: new_str })
    }

    update_char_state = (event) => {
        this.state.char_state = event.target.value;
    }

    on_name_change = (event, index) => {
        const clone_arr = [...this.state.persons];
        const clone_per = clone_arr[index];
        clone_per.name = ` ${event.target.value}`;
        // this.state.persons = clone_arr;
        // this.setState({ persons: clone_arr,click_number: this.state.click_number+1 })
        this.setState((prevState, props) => {
            return { persons: clone_arr, click_number: prevState.click_number + 1 }
        })
        // update_name(`from input: ${event.target.value}`)

    }

    componentWillUnmount() {
        console.log('componentWillUnmount')

    }

    toggle_persons = () => {
        // this.state.show_persons = !this.state.show_persons;
        this.setState({ show_persons: !this.state.show_persons })
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    on_btn_click = () => {
        this.update_name('from buton')
    }

    update_name = (new_name) => {
        this.state.persons = [
            {
                name: new_name,
                age: 20
            },
            {
                name: 'name B new',
                age: 30
            },
            {
                name: 'name C new',
                age: 40
            },
        ]
    }


    render() {
        let classes = [];
        if (this.state.persons.length < 2) {
            // classes = [];
            console.log(this.state.persons.length)

            classes.push('blue');
        }
        if (this.state.persons.length < 1) {
            // classes = [];
            console.log(classes)
            classes.push('red');
        }
        console.log('render')
        return (
            <With_Class className={classes_css.App}>
                <h1>{this.props.title}</h1>
                <div className={[classes.join(' ')]}>
                    color depends on items length
                </div>
                <button className={classes_css.Button} onClick={() => {
                    this.on_btn_click('from button');
                }}>click me
                </button>

                <button onClick={this.toggle_persons}>show/hide persons</button>
                <button onClick={() => { this.setState({ show_cockpit: !this.state.show_cockpit }) }}>show/hide cockpit</button>

                {this.state.show_cockpit ?
                    <Cockpit persons={this.state.persons} show_persons={this.state.show_persons} toggle_persons={this.toggle_persons}
                        on_name_change={this.on_name_change}
                        on_remove_person={this.remove_person}
                        update_user_name={this.update_user_name} on_update_char_state={this.update_char_state}
                        chars={this.state.char_state}
                        on_remove_char={(index) => {
                            this.remove_char(index)
                        }} usernames={this.state.usernameState}></Cockpit> : null}
            </With_Class>

        )
        // if (this.)

    }
}

export default App_Class
