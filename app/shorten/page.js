"use client";
import React, { useState } from "react";
import Link from "next/link";
const shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setshortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setshortUrl("")
        console.log(result)
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URL's</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your url"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short url"
          onChange={(e) => {
            setshortUrl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-pink-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3"
        >
          Generate
        </button>
      </div>
      {generated && <>
        <span className="font-bold text-lg">Your Link :</span> <code><Link target="_blank" href={generated}>{generated}</Link>
        </code> </>}
        
    </div>
  );
};

export default shorten;
