function App(){
  let a =20;
  function cha(){
    a++;
    console.log(a);
  }

  function the(th){
    console.log(th.target.value)
  }
  return (
    <>
    <h1>this is{a}</h1>
    <button onDoubleClick={cha} className="mt-10 ml-20 bg-black ">click</button>
    <input type="text" placeholder="name" onChange={the} />
    </>
  )
}
export default App