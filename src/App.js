import React from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";

const App=()=>{
  return(
    <div>
      {/* Rohan */}
      <Hello>
        <p>I'm Jadu</p>
        <button>Click Me</button>
      </Hello>

      
      <Hello>
        <p>I'm the creator of the world</p>
        <button>Click Me</button>
      </Hello>

      <Hello>
        <Counter/>
      </Hello>
    </div> 
  )
}

export default App
