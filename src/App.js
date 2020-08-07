import React, {useState} from 'react';
import classes_css from './App.module.css';
import Person from "./Person/Person";
import UserOutput from "./task_1/UserOutput";
import UserInput from "./task_1/UserInput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import Radium, {StyleRoot} from "radium";
import styled from 'styled-components'

// class App extends Component {
const StyledButton = styled.button`
  background-color: ${(props) => true ? 'green' : 'red'};
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
        margin: auto;
        &:hover{
            background-color: lightgreen;
            color: black
        }
`
const App = (props) => {
    const update_name = (new_name) => {

        setPersonsState({
            persons: [
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
        })
    }

    const [personsState, setPersonsState] = useState({
        persons: [
            {
                name: 'name A',
                age: 20
            },
            {
                name: 'name B',
                age: 30
            },
            {
                name: 'name C',
                age: 40
            },
        ]
    })

    const [other_state, other_state_update] = useState('other_state')

    const [usernameState, usernameStateUpdate] = useState([
        'a',
        'b',
        'c'
    ])

    const [show_persons_state, show_persons_state_update] = useState(true)

    const update_user_name = (event) => {
        usernameStateUpdate([
            event.target.value,
            'b',
            'c'
        ])
    }
    // render() {
    const on_person_click = (new_name) => {
        update_name(new_name)
    }

    const on_name_change = (event, index) => {
        const clone_arr = [...personsState.persons];
        const clone_per = clone_arr[index];
        clone_per.name = ` ${event.target.value}`;
        setPersonsState({persons: clone_arr})
        // update_name(`from input: ${event.target.value}`)
    }

    const on_btn_click = () => {
        update_name('from buton')
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        margin: 'auto',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    const toggle_persons = () => {
        show_persons_state_update(!show_persons_state);
    }

    let persons_2 = null;
    // if (show_persons_state) {
    //
    //     persons_2 = <div>
    //         <Person
    //             name={personsState.persons[0].name}
    //             age={personsState.persons[0].age}
    //             person_click={on_person_click.bind(this, 'from person')}
    //             input_change={on_name_change}
    //         >
    //
    //             <mark>hello ya all</mark>
    //         </Person>
    //         {/*<br/>*/}
    //
    //         <Person
    //             name={personsState.persons[1].name}
    //             age={personsState.persons[1].age}>
    //             <mark>hello ya all</mark>
    //         </Person>
    //
    //         {/*<br/>*/}
    //
    //         <Person
    //             name={personsState.persons[2].name}
    //             age={personsState.persons[2].age}>
    //             <mark>hello ya all</mark>
    //         </Person>
    //
    //     </div>;
    // }
    const remove_person = (index) => {
        console.log(index)
        let cloned = [...personsState.persons]
        cloned.splice(index, 1);
        setPersonsState({persons: cloned})
    }

    const [char_state, char_state_update] = useState('')

    const update_char_state = (event) => {
        char_state_update(event.target.value)
    }

    const remove_char = (index) => {
        let splited = char_state.split('')
        splited.splice(index, 1);
        let new_str = splited.join('');
        console.log(new_str)
        char_state_update(new_str);
    }
    let classes = [];
    if (personsState.persons.length < 2) {
        // classes = [];
        console.log(personsState.persons.length)

        classes.push('blue');
    }
    if (personsState.persons.length < 1) {
        // classes = [];
        console.log(classes)
        classes.push('red');
    }
    return (
        <StyleRoot>
            <div className={classes_css.App}>
                <div className={[classes.join(' ')]}>
                    color depends on items length
                </div>

                {/*<StyledButton onClick={() => {*/}
                {/*    on_btn_click('from button');*/}
                {/*}}>click me*/}
                {/*</StyledButton>*/}
                {/*<button style={style} onClick={() => {*/}
                {/*    on_btn_click('from button');*/}
                {/*}}>click me*/}
                {/*</button>*/}
                <button className={classes_css.Button} onClick={() => {
                    on_btn_click('from button');
                }}>click me
                </button>
                <button onClick={toggle_persons}>show/hide persons</button>
                {/*<button onClick={update_name.bind(this,'from buton')}>click me</button>*/}

                {/*{show_persons_state && <div>*/}
                {/*    <Person*/}
                {/*        name={personsState.persons[0].name}*/}
                {/*        age={personsState.persons[0].age}*/}
                {/*        person_click={on_person_click.bind(this, 'from person')}*/}
                {/*        input_change={on_name_change}*/}
                {/*    >*/}

                {/*        <mark>hello ya all</mark>*/}
                {/*    </Person>*/}
                {/*    /!*<br/>*!/*/}

                {/*    <Person*/}
                {/*        name={personsState.persons[1].name}*/}
                {/*        age={personsState.persons[1].age}>*/}
                {/*        <mark>hello ya all</mark>*/}
                {/*    </Person>*/}

                {/*    /!*<br/>*!/*/}

                {/*    <Person*/}
                {/*        name={personsState.persons[2].name}*/}
                {/*        age={personsState.persons[2].age}>*/}
                {/*        <mark>hello ya all</mark>*/}
                {/*    </Person>*/}
                {/*    <h4>persons_2_refactor</h4>*/}
                {/*    {persons_2}*/}
                {/*    <h4>persons_3_iteration</h4>*/}
                {personsState.persons.map((item, index) =>
                    <Person
                        key={item.age}
                        on_person_click={() => {
                            remove_person(index)
                        }}
                        name={item.name}
                        age={item.age}
                        input_change={(event) => {
                            on_name_change(event, index)
                        }}>
                        <mark>hello ya all</mark>
                    </Person>
                )}
                {/*</div>}*/}
                {/*<br/>*/}
                <br/>
                <UserInput name={usernameState[0]} on_user_name_change={update_user_name}></UserInput>
                <UserOutput name={usernameState[0]}></UserOutput>
                <UserOutput name={usernameState[1]}></UserOutput>
                <UserOutput name={usernameState[2]}></UserOutput>
                <h2>task_list_cond</h2>
                <input onChange={update_char_state} value={char_state} type="text"/>
                <Validation txt_length={char_state.length}></Validation>
                {
                    char_state.split('').map((char, index) =>
                        <Char on_click={(index) => {
                            remove_char(index)
                        }} char_obj={{char, index}}></Char>
                    )
                }

            </div>
        </StyleRoot>

    )
    // }


}


// }

// function App(z) {
//   return (
//     <div className="App">
//     <h1>react first</h1>
//     </div>
//   );
// }


// export default App;
export default Radium(App);
// export default Radium(App) ;

