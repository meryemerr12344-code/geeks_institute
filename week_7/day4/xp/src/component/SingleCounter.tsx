import { useState } from 'react'

function SingleCounter() {

 const [count, setCount] = useState(0)
 
 const handleClick = () => {
  setCount(count + 1),[]
 }  

 if(count === 5 ){
  throw new Error('I crashed!')
 }
   return (
  
  <div className="flex flex-col items-center gap-8 mt-10">
    
    <button className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition" onClick={handleClick}>
      {count}
    </button>
    
    </div> 
   
)
}
export default SingleCounter;