import React from 'react'

const With_Class = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default With_Class