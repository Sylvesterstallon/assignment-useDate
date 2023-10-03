import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
    const [date, setDate] = useState()
  
    console.log("Date" , date);
  
    return (
      <>
      <h1>Selected Date : {date}</h1>
      <input type="date" onChange={e=>setDate(e.target.value)}/>
      </>
       
    )
  
  

}

export default App
