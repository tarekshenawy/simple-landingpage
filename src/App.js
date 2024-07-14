import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import { useEffect, useState } from "react";
import Content from "./Components/Content/Content";


function App() {

  useEffect(()=>{
      setInterval(() => {
        setCount(count=>{
          return count === 2 ? 0 : count+1;
        })
       
      },4000);
    
    },[])

  
  const[count,setCount]=useState(0);
  const [playlist,setPlaylist]=useState(false);
  let content =[
    {text1:"Dive Into" ,text2:"What you love"},
    {text1:"Give Into" ,text2:"your passions"},
    {text1:"give into",text2: "your passions"}
  ]
  return (
    <div >
      <Navbar/>
      <Background count={count} playlist={playlist} setplaylist={setPlaylist}/>
    <Content text ={content[count]} count={count} setcount={setCount} playlist={playlist} setplaylist={setPlaylist}/>
   
     
    </div>
  );
}

export default App;
