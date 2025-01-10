import React from 'react'

function UseCallbackChild_hook({ incrementCount }) {
    return (
        <>
            <button className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white"
                onClick={incrementCount}>Increment</button>
        </>
    )
}

export default UseCallbackChild_hook
