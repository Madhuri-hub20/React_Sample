import './App.css'
import { Route, Routes } from 'react-router-dom';
import UseState_hook from './Components/useState_hook';
import UseEffect_hook from './Components/UseEffect_hook';
import UseCallbackParent_hook from './Components/UseCallBack/UseCallbackParent_hook';
import UseRef_hook from './Components/UseRef_hook';
import UseForm from './Components/UseForm';
import Props_Parent from './Components/Props_PtoC/Props_Parent';
import Parent_props from './Components/Props_CtoP/Parent_props';
import Counter from './Components/Redux/Counter';


function App() {


  return (
    <>
      { /* <UseState_hook />
      <UseEffect_hook/>
      <UseCallbackParent_hook/>
      <UseRef_hook />
      <UseForm/>*/}
     
     <div className="App">
       <Routes>
         <Route path='/' element={<UseState_hook/>} />
         <Route path='/UseEffect_hook' element={<UseEffect_hook/>} />
         <Route path='/UseRef_hook' element={<UseRef_hook/>} />
         <Route path='/UseCallbackParent_hook' element={<UseCallbackParent_hook/>} />
         <Route path='/UseForm' element={<UseForm/>} />
         <Route path='/Props_Parent' element={<Props_Parent/>} />
         <Route path='/Parent_props' element={<Parent_props/>} />
         <Route path='/Counter' element={<Counter/>} />
       </Routes>
     </div>
    </>
  )
}

export default App
