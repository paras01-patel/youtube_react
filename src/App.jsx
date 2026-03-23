// import { useState } from "react"

// 
// import { useEffect, useState } from "react"



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




// function App(){
// const[title,settitle]=useState()
// const[details,setdetails]=useState()
// const[task,settask]=useState([])




//   function submmit(e){
//     e.preventDefault()
//     const copytask=[...task]
//     copytask.push({title,details})
    
//     settask(copytask)


//     settitle('')
//     setdetails('')
    
//   }


//   function del(idx){
//   const copytask = [...task]
//   copytask.splice(idx,1)
//   settask(copytask)
// }
//   return (

//     <>

//     <div className="parent">
//       <div className="child1">
//         <form onSubmit={(e)=>{submmit(e)}}>
//           <h1> Add Notes</h1>
//           <input 
//           type="text"  
//           placeholder="Enter your name" 
//           className="inn"
//           value={title}
//           onChange={(e)=>{
//             settitle(e.target.value)
//           }}
          
//           />
//           <br />  
//           <input 
//           type="text" 
//           placeholder="Enter your notes"  
//           className="innn"
//           value={details}
//           onChange={(e)=>{
//             setdetails(e.target.value)
//           }}
        
//           />
//           <br />
//           <button className="g">submit</button>
//         </form>
//       </div>

//       <div className="child2">
      
//       {task.map(function(elem,idx){
//         return <div key={idx} className="child3"><h1>{elem.title}</h1>
//         <p>{elem.details}</p>
//         <button onClick={()=>del(idx)}>delete </button></div>
        
//       })} 
      
      
//       </div>
      
//     </div>
//     </>
//   )
// }
// export default App


//local storege =there are 4 method (1.setitem 2. getitem 3.removeitem 4.clear)



// function App(){
  

//   const data={
//     name:'dhiraj',
//     work:'farming',
//     age:23,
//     city:'chhindwara'
//   }

// localStorage.setItem('data',JSON.stringify(data))    //convert object to string 
// const d=JSON.parse(localStorage.getItem('data'))
//   return(
//     <>
    
//     </>
//   )
// }
// export default App



//API application program interface ...







// function App(){
//   const [num,setnum]=useState(0)
//   const [num2,setnum2]=useState(10)

//   useEffect(function(){
//     console.log("use efect is runing")
//   },[num2])

//   return(
  
//   <>
  
//   <h1> num1{num}</h1>
//   <h1>num2{num2}</h1>
//   <button onClick={()=>{
//     setnum(num+1)
//   }
//   } onDoubleClick={()=>{setnum2(num2+10)}}>click here </button>

//   </>
//   )
// }
// export default App




// gallery project 

// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [dataa, setdataa] = useState([]);

//   async function getdata() {
//     const response = await axios.get(
//       "https://picsum.photos/v2/list?page=2&limit=15"
//     );

//     setdataa(response.data); // ✅ correct
//   }

//   let printuserdata = "No user available";

//   if (dataa.length > 0) {
//     printuserdata = dataa.map((elem, indx) => {
//       return (
//         <div key={indx} className="">
//           <a href={elem.url} target="_blank" rel="noopener noreferrer">
//           <img src={elem.download_url} alt="" width="200" />
//           <h2>{elem.author}</h2>
//           </a>  
//         </div>
//       );
//     });
//   }

//   return (
//     <>
//       <button onClick={getdata} className="bt">
//         Get Data
//       </button>

//       <div>{printuserdata}</div>
//     </>
//   );
// }

// export default App;












//react-router-dom



import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;