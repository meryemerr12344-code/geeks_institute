import { useState } from 'react'

function BuggyCounter() {

 const [count, setCount] = useState(0)
 const [count2, setCount2] = useState(0)
 const handleClick = () => {
  setCount(count + 1),[]
 }  
const handleClick2 = () => {
  setCount2(count2 + 1),[]
 }  

 if(count === 5 || count2 === 5){
  throw new Error('I crashed!')
 }
   return (
  
  <div className="flex flex-col items-center gap-8 mt-10">
  <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
    
    <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition" onClick={handleClick}>
      {count}
    </button>
    
    <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition" onClick={handleClick2}>
      {count2}
    </button> </div> 
   
)
}
export default BuggyCounter;