"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mylist, setList] = useState([])
  useEffect(() => {
    console.log(mylist)
  },[mylist])
  const value = useRef(null)
  const mybox = (data) => {
    return 
  }
  return (
    <div className=" w-screen h-screen bg-slate-600 flex flex-col items-center p-10 gap-3 overflow-y-auto">
      <h1 className=" text-2xl font-[900] text-white">
        Todo app
      </h1>
      <input className=" text-2xl w-1/2 h-[50px]" ref={value}></input>
      <button className=" bg-blue-300 w-1/2 h-[50px] rounded-md"
        onClick={async() => {
          setList((e) => [...e,value.current.value]);
        }}
      >add</button>
      {mylist.map((v, i) => (
        <div className=" bg-white rounded-lg w-1/2 h-[70px] text-wrap text-2xl text-black">
        {v}
      </div>
      ))}
    </div>
  );
}
