// import { useState } from "react"

import { useState } from "react"

// import { use, useState } from "react"

// function App(){
// const [num,write]=useState(0)


// function inn(){
//   write(num+1)
// }

// function dee(){
//   write(num-1)
// }

// function deee(){
//   write(num+5)
// }
//   return (
//     <>
//   <h1>{num}</h1>
//   <button onClick={inn}>increase</button>
//   <button onClick={dee}>decrease</button>
//   <button onClick={deee}>increase by 5 </button>
  

//     </> 
//   )
// }
// export default App

// import { use, useState } from "react"
// function App(){


//   let [read,write]=useState({user:'paras',age:22})
//   function chh(){
//     let neww={...read}
// neww.user='PARAS'
// neww.age=21
// write(neww)
//   }
//   return(
//     <>
//     <h1>hii i am {read.user} and i am {read.age} old </h1>
//     <button onClick={chh}> change</button>
    
//     </>
//   )
// }
// export default App


//batch update  
// function App(){

//   let [num,setnum]=useState(10)
//   function clicked(){
//     setnum(pre=>(pre+1))
//     setnum(pre=>(pre+1))
//     setnum(pre=>(pre+1))


//   }
//   return(
//     <>

//     <h1>{num}</h1>
//     <button onClick={clicked}>click</button>
//     </>
//   )
// }
// export default App




// from handle 

function App(){
  function submitt(e){
    e.preventDefault()
    console.log("form submittedg")

  }
  return(
    <>
    <form onSubmit={(e)=>{ submitt(e) }}>
      <input type="text " placeholder=" enter your name" />
      <button> submitt</button>
    </form>
    </>
  )
}
export default App