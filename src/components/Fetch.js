import React, {  useEffect, useState } from 'react'

const Fetch = () => {
    const [items,setItems]= useState([])
    useEffect(()=>{
        const myInit={
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        }
        fetch("https://jsonplaceholder.typicode.com/posts",myInit).then((res)=>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }).then((data)=>{
            setItems(data)
        })
    },[])
    
  return (
    <div>
      <div className="container">
        <ul>
            {items.map((item)=>(
                <li key={item.id}>
                <h1>{item.id}</h1><h2>{item.title}</h2>
                {item.body}
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Fetch