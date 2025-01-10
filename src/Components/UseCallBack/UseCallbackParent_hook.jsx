import React, { useState, useCallback } from 'react';
import UseCallbackChild_hook from './UseCallbackChild_hook';

function UseCallbackParent_hook() {

    const [count, setCount] = useState(0);

    const handleSubmit = useCallback(() => {
        setCount(count + 1);
    }, [count])


    return (
        <>
            <div>
                <h1 className='font-bold'>UseCallback hook in React</h1>
                <p>Count is : {count}</p>
                <UseCallbackChild_hook incrementCount={handleSubmit} />
            </div>
        </>
    )
}

export default UseCallbackParent_hook
