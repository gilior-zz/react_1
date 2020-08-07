import React, {useState} from 'react'

const Error_Boundary = (props) => {
    const [err_state, err_state_update] = useState({has_err: false, err_msg: ''});

    const component_did_catch = (err, info) => {
        err_state_update({has_err: true, err_msg: err})
    }

    return (
       // if (err_state.has_err)
   <div>
       {err_state.has_err?err_state.err_msg:props.children}
   </div>
)
}

export default Error_Boundary
