import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";
import UserOutput from "./task_1/UserOutput";
import UserInput from "./task_1/UserInput";


// class App extends Component {
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

    const [show_persons_state, show_persons_state_update] = useState(false)

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

    const on_name_change = (event) => {
        update_name(`from input: ${event.target.value}`)
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
        margin: 'auto'
    }

    const toggle_persons = () => {
        show_persons_state_update(!show_persons_state);
    }

    let persons_2 = null;
    if (show_persons_state) {
        persons_2 = <div>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
                person_click={on_person_click.bind(this, 'from person')}
                input_change={on_name_change}
            >

                <mark>hello ya all</mark>
            </Person>
            {/*<br/>*/}

            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>
                <mark>hello ya all</mark>
            </Person>

            {/*<br/>*/}

            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}>
                <mark>hello ya all</mark>
            </Person>

        </div>;
    }
    return (

        <div className='App'>


            <button style={style} onClick={() => {
                on_btn_click('from button');
            }}>click me
            </button>
            <button onClick={toggle_persons}>show/hide persons</button>
            {/*<button onClick={update_name.bind(this,'from buton')}>click me</button>*/}

            {show_persons_state && <div>
                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                    person_click={on_person_click.bind(this, 'from person')}
                    input_change={on_name_change}
                >

                    <mark>hello ya all</mark>
                </Person>
                {/*<br/>*/}

                <Person
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age}>
                    <mark>hello ya all</mark>
                </Person>

                {/*<br/>*/}

                <Person
                    name={personsState.persons[2].name}
                    age={personsState.persons[2].age}>
                    <mark>hello ya all</mark>
                </Person>
                <h4>persons_2</h4>
                {persons_2}
            </div>}
            {/*<br/>*/}
            <br/>
            <UserInput name={usernameState[0]} on_user_name_change={update_user_name}></UserInput>
            <UserOutput name={usernameState[0]}></UserOutput>
            <UserOutput name={usernameState[1]}></UserOutput>
            <UserOutput name={usernameState[2]}></UserOutput>


        </div>
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
export default App;

