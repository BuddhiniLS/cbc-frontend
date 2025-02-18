import { useState } from "react"
import"./testing.css"

export default function Testing(){

  const[count,setcount]=useState(0)
  const[name,setName]=useState("Students")

    function increment(){
        setcount(count+1)

        }

        function decrement(){
          setcount(count-1)
        
      }      

        function changeName(value){
        setName(value)

      
    }
    return(
        <div className="background">
            <h1>{name}</h1>
           <button className="val" onClick ={decrement}>-</button>

           <span>{count}</span>

           <button className="val" onclick={increment}>+</button>

           <div className="button-panel">
            <button onclick={()=>changeName("Students")}>Students</button>
            <button onclick={()=>{changeName("Teachers")}}>Teachers</button>
            <button onclick={()=>{changeName("Admins")}}>Admins</button>
          </div>
          

        </div>
    )
}