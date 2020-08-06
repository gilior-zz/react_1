import React from 'react'
import './Char.css'

const Char = (props) => {
    return (
        <div onClick={() => props.on_click(props.char_obj.index)} className="Char">
            {props.char_obj.char}
        </div>
    )
}

export default Char
