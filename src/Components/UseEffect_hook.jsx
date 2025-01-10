import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';

function UseEffect_hook() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://random-data-api.com/api/v2/users?size=5')
            .then(response => response.json())
            .then(res => {
                console.log(res);
                setData(res)
            });


    }, [])
    return (
        <>
            <NavBar/>
            <h1 className='font-bold'>useEffect hook in React</h1>
            <ul>

                {data.map(item => (
                    <li key={item.id}>
                        <p>
                            Name : {item.first_name}
                            {item.last_name}
                            Email : {item.email}
                        </p>
                        <p>
                            Gerder : {item.gender}
                            Mobile No : {item.phone_number}
                        </p>
                    </li>
                ))}

            </ul>
        </>
    )


}
export default UseEffect_hook