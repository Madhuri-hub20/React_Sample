import React, { useState } from 'react'

function Child_props({ sendParent_Data }) {

    const [data, setData] = useState("");

    function handleClick() {
        sendParent_Data(data);
    }

    return (
        <>
            <div>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type='text' value={data}
                    onChange={(e) => setData(e.target.value)} />
                    <div>&nbsp;</div>
                <button className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white"
                    onClick={handleClick}>Submit data From Parent</button>
            </div>
        </>
    )
}

export default Child_props
