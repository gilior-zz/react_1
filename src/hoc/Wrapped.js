import React from 'react'


const Hoc_Wrapped = (Wrapped_Component,className) => {
    return (
        <div className={props.className}>
           <Wrapped_Component> </Wrapped_Component>    
        </div>
    )
}

export default Hoc_Wrapped