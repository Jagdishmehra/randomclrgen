import { useState } from "react";

const RandomClr=()=>{   
const [change, setchange]=useState('#ffffff')

const handleclr=()=>{
    setchange(hexclr);
}
function randomclr(length){
    return Math.floor(Math.random()*length);
}
const hex=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
let hexclr="#"
// console.log(typeof(hexclr))
for(let i=0;i<6;i++) //we looped over the value to extract a random value from the loop
//we are looping till 6 digits cuz our hex consist of 6 digit nummber and a #
  { hexclr+=hex[randomclr(hex.length)]
    // console.log((hexclr));
  }
  return(
    <>
    <button className="bg-red-100 p-2 rounded-lg text-lg mx-[40%] mt-2" onClick={handleclr}>
    Generate Random Color</button><span className="mx-[42%]">Color Code: {hexclr}</span>
    <div className="mt-4" style={{backgroundColor:change,height:"100vh"}}>   
    </div>
    
    </>
  );
}
export default RandomClr;
