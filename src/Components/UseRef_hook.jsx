import React,{useState, useRef, useEffect} from 'react'
import NavBar from '../NavBar';

function UseRef_hook() {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        console.log(count.current);
        count.current = count.current + 1 ;
    },[inputValue])

    return (
        <>
        <NavBar/>
        <h1 className='font-bold'>UseRef hook in React</h1>
        <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <h1>Render Count : {count.current}</h1>
        </>
    )
}

export default UseRef_hook
