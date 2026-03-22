// import { useState } from "react"

import { useState } from "react"



// import { use, useState } from "react"

// // const [num,write]=useState(0)


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
// 

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
// 
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

// //   function submitt(e){
//     e.preventDefault()
//     console.log("form submittedg")


//   }

  
//   return(
//     <>
//     <form onSubmit={(e)=>{ submitt(e) }}>
//       <input type="text " placeholder=" enter your name" />
//       <button> submitt</button>
//     </form>
//     </>
//   )
// }
// export default App






// two way data winding 




function App(){
const[title,settitle]=useState()
const[details,setdetails]=useState()
const[task,settask]=useState([])




  function submmit(e){
    e.preventDefault()
    const copytask=[...task]
    copytask.push({title,details})
    
    settask(copytask)


    settitle('')
    setdetails('')
    
  }


  function del(idx){
  const copytask = [...task]
  copytask.splice(idx,1)
  settask(copytask)
}
  return (

    <>

    <div className="parent">
      <div className="child1">
        <form onSubmit={(e)=>{submmit(e)}}>
          <h1> Add Notes</h1>
          <input 
          type="text"  
          placeholder="Enter your name" 
          className="inn"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          
          />
          <br />  
          <input 
          type="text" 
          placeholder="Enter your notes"  
          className="innn"
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value)
          }}
        
          />
          <br />
          <button className="g">submit</button>
        </form>
      </div>

      <div className="child2">
      
      {task.map(function(elem,idx){
        return <div key={idx} className="child3"><h1>{elem.title}</h1>
        <p>{elem.details}</p>
        <button onClick={()=>del(idx)}>delete </button></div>
        
      })} 
      
      
      </div>
      
    </div>
    </>
  )
}
export default App