//WE use react hook 
import React ,{useState} from 'react';


function App() {
  const[count,setCount]=useState(10)
   //Decrementing the counting
  function decrementCount(){
    setCount(prevCount=>prevCount-1) 
  }
  //Incrementing the counting
  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }
 //It return
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
