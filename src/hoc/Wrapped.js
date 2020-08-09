import React from 'react'


const Hoc_Wrapped = (Wrapped_Component,className) => {
    return props=> (
        <div className={props.className}>
           <Wrapped_Component {...props}> </Wrapped_Component>    
        </div>
    )
}

export default Hoc_Wrapped