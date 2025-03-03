
import { useEffect } from "react";
import './App.css'
import Nav from './Component/Nav'
import Background from './Component/Background';
import Button from "./Component/Button";
import Front from "./Component/Front";

function App() {
 
  return (
    <>
    <div className='bg-black min-h-screen relative'>
    
        <Nav />
      
<Background/>



<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 text-center -translate-y-[85%] " >
<Front/>

<div className="flex gap-3 justify-center flex-wrap">
  <Button title='Service'/>
  <Button title='More'/>

</div>
</div>
    </div>
    </>
  )
}

export default App
