import React, { useState } from 'react';
import Child_props from './Child_props';

function Parent_props() {

    const [child_Data , sendChild_Data] = useState("");

   function handleDataFromChild(data){
    sendChild_Data(data)
   }

    return (
        <>
        <h1>Data from Child : {child_Data}</h1>
        <Child_props sendParent_Data={handleDataFromChild}/>
        </>
    )
}

export default Parent_props
