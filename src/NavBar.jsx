import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
         <nav>
       <ul>
         <li>
           <Link to="/">UseState_Hook</Link>
         </li>
         <li>
           <Link to="/UseEffect_hook">UseEffect_Hook</Link>
         </li>
         <li>
           <Link to="/UseRef_hook">UseRef_Hook</Link>
         </li>
         <li>
           <Link to="/UseCallbackParent_hook">UseCallbackParent_Hook</Link>
         </li>
         <li>
           <Link to="/UseForm">UseForm</Link>
         </li>
         <li>
           <Link to="/Props_Parent">Props Parent to Child</Link>
         </li>
         <li>
           <Link to="/Parent_props">Props Child to Parent</Link>
         </li>
         <li>
           <Link to="/Counter">React-Redux</Link>
         </li>
       </ul>
     </nav>
        </>
    )
}

export default NavBar
