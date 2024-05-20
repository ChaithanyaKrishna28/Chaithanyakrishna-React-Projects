import { useState } from "react"

function App() {
  const [color,setColor] = useState(null)

  return (
    <div className="w-full h-screen duration-300 " style={{backgroundColor:color}}>

      <h1 className="text-center font-sans text-4xl font-bold align-center text-yellow-500">BG Changer</h1>
      <p className="text-center font-sans text-2xl font-bold align-center text-yellow-500">Press a button to chnage the background Color</p>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 rounded-3xl" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl shadow-black text-white">
          <button className="px-4 py-1  rounded-full outline-none shadow-md shadow-black"
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >
            Red
          </button>

          <button className="px-4 py-1  rounded-full outline-none  shadow-md shadow-black"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >
            Blue
          </button>

          <button className="px-4 py-1  rounded-full outline-none  shadow-md shadow-black"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button className="px-4 py-1  rounded-full outline-none shadow-md shadow-black"
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}
          >
            Amber
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
