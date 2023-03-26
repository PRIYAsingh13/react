import React, { useState } from "react";

function App() {
  const [data , setData] = useState('priya')
  const [counter , setCounter] = useState(0)

  function apple() {
    alert("hii");
  }
  function second(){
    setData('singh')

    
  }
  function count(){
    setCounter(counter + 1)

  }
  // console.log('=')

  return (
    <div>
      <h1>{data}</h1>
      <h1>{counter}</h1>

      <button onClick= {() => apple()}>click me</button>
      <button onClick= {() => alert('i am the best')}>click me</button>
      <button onClick={second}>update Data</button>
      <button onClick={count}>count</button>

    </div>
  );
}
export default App;
