import React from 'react'
import Error_Boundary from "../Error_Boundary/Error_Boundary";
import Person from "./Person/Person";

const Persons = (props) =>

    (
        <div>
            {props.persons.map((item, index) =>
                <Person

                    on_person_click={() => {
                        props.on_remove_person(index)
                    }}
                    name={item.name}
                    age={item.age}
                    input_change={(event) => {
                        props.on_name_change(event, index)
                    }}>
                    <mark>hello ya all</mark>
                </Person>
            )}
        </div>
    )


export default Persons
