import React, { useState } from 'react'

function FunctionComp() {
    // const [inputField, setInputField] = useState("")
    let inputField= "";
const func=()=>{
    const inpText = document.getElementById("inp").value;
   // alert(inpText)
 //   const inpText = document.getElementById("disdiv").innerHTML="";
    document.getElementById("disdiv").innerHTML=inputField;

}
// console.log(inputField);
  return (
    <div>
        <input id={"inp"} type="text" value={inputField} onChange={(e)=>inputField=e.target.value} />
        <button onClick={func}>Display</button>
        <div id={"disdiv"}>{inputField}</div>
    </div>
  )
}

export default FunctionComp