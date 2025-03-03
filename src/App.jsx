
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
    <header >
        <Nav />
      </header>
<Background/>



<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
 <Front/>
  <div className='flex gap-3 justify-center'>

  <Button title='Services'/>
  <Button title='More'/>
  </div>
</div>
    </div>
    </>
  )
}

export default App
