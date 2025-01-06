import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>
    // {
    //     fetch('https://api.github.com/users/ganesh16073')
    //     .then((response)=> response.json())
    //     .then((res)=>{
    //         console.log(res)
    //         setData(res)
    //     }
    //     )
    //     .catch((e)=> console.log(e)
    //     )
    // },[])

    const data=useLoaderData()
  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4 m-4' >
        Github folowers : {data.followers}
        <img src={data.avatar_url} className='w-2/12 p-3' />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>
{
    const response=await fetch('https://api.github.com/users/ganesh16073')
    return response.json()
}