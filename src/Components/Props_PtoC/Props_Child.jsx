import React from 'react'

function Props_Child(props) {
    return (
        <>
        <div>
            <h1 className='font-bold'>Props</h1>
            {props.fname}
            {props.lname}
            
        </div>
        </>
    )
}

export default Props_Child
