import React, {Component} from "react";
import Person from "./Person/Person";
import Person_Class from "./Person/Person_class";

class Persons_Class extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons_Class] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons_Class] shouldComponentUpdate');
        // return nextProps.age!==this.props.age;
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
        return (
            <div>
                {this.props.persons.map((item, index) => {
                        console.log('rendering persons');

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
                    }
                )}
            </div>
        )
    }
}

export default Persons_Class
