import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";


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

    return (

        <div>
            <div className='class'></div>

            <button onClick={() => {
                on_btn_click('from button');
            }}>click me
            </button>
            {/*<button onClick={update_name.bind(this,'from buton')}>click me</button>*/}

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

            {/*<br/>*/}

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

