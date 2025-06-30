"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [Generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));

  }
  return (


    <div className='bg-purple-200 mx-auto max-w-lg my-16 p-8 rounded-lg flex flex-col gap-8 shadow-lg shadow-purple-950/30'>
      <h1 className='font-bold text-2xl'>Generate Your Short URLs Here</h1>
      <div className='flex flex-col gap-2'>
        <input className='hover:scale-105 px-4 py-2 bg-amber-50 focus:outline-purple-900 rounded-md' type="text" value={url} placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input className='hover:scale-105 px-4 py-2 bg-amber-50 focus:outline-purple-900 rounded-md' type="text" value={shorturl} placeholder='Enter preferred short URL text ' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} className='bg-purple-900 rounded-lg p-3 py-2 my-4 font-bold shadow-lg text-white hover:  hover:shadow-lg hover:shadow-purple-950/50 hover:scale-105 hover:bg-purple-700'>Generate</button>
      </div>
      {Generated && <> <span className='font-bold text-shadow-lg'>Your Link:</span><code> <Link target="_blank" href={Generated}>{Generated}</Link> 
      </code> </>}
     
    </div>
  )
}

export default Shorten
