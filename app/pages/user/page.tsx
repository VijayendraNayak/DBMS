"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from "../../components/header"; // Import the Header component

interface userdata{
name:string,
email:string,
last_login:Date,
user_type:String
}
const page = () => {
  const [data,setData]=useState<userdata[]>([])

  const getdata=async():Promise<void>=>{
    try{
      const res = await axios.get<userdata[]>("http://localhost:5000/api/get_allusers");
      console.log(res)
      setData(res.data)
      console.log(setData)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getdata();
  }, [])
  
  return (
    <div>
        <Header />
    </div>
  )
}

export default page