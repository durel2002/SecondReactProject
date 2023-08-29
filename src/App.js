import React,{useId}  from 'react';

import './App.css';
//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
// we used useId to generate a unique id
const useid = useId();
function App() {
  return (
   <div className="form">
   <form>
      <label htmlFor={useid}>Enter your name </label>
     <input id={useid}  type="text" placeholder="UserName" /><br/>
     <input type="Password" placeholder="Password"/><br/>
     <p> Forgot Password? </p>
     <button type="submit"> Submit </button>
     
   </form>
   </div>
  );
}

export default App;
