"use client"

import Link from "next/link"
// import Choice from "./Choice"
import { useState } from "react";
import { client } from "@/sanity/lib/client";


export default function MainContent() {
  const [scene, setScene] = useState(1);
  const [bio, setBio] = useState(null);

  async function changeScene(name) {
    const content = await getCharacterBio(name);
    setBio(content);
    setScene(scene+1);
    
  }

  return (
    <>
        {(scene == 1) && (
            <div className="text-left text-red-500 font-bold">
                <h1 className="text-black">Choose a Character</h1>
                <p className="text-black font-light">This does not change anything about the game other than pronouns used and the next page which will tell you how that person joined the group.</p>
                <br/>
                <ul>
                <li><button onClick={() => changeScene("Wes")} className="md:hover:underline cursor-pointer p-1">Wes</button></li>
                <li><button onClick={() => changeScene("Mason")} className="md:hover:underline cursor-pointer p-1">Mason</button></li>
                <li><button onClick={() => changeScene("Jonathan")} className="md:hover:underline cursor-pointer p-1">Jonathan</button></li>
                <li><button onClick={() => changeScene("Kendan")} className="md:hover:underline cursor-pointer p-1">Kendan</button></li>
                <li><button onClick={() => changeScene("Yoori")} className="md:hover:underline cursor-pointer p-1">Yoori</button></li>
                <li><button onClick={() => changeScene("Ana")} className="md:hover:underline cursor-pointer p-1">Ana</button></li>
                <li><button onClick={() => changeScene("Riley")} className="md:hover:underline cursor-pointer p-1">Riley</button></li>
                <li><button onClick={() => changeScene("Sarah")} className="md:hover:underline cursor-pointer p-1">Sarah</button></li>
                <li><button onClick={() => changeScene("Lilly")} className="md:hover:underline cursor-pointer p-1">Lilly</button></li>
                <li><button onClick={() => changeScene("Ellie")} className="md:hover:underline cursor-pointer p-1">Ellie</button></li>
                </ul>
                <br/>                
            </div>
            
        )}

        {(scene == 2) && (
            <div>
                {bio.map((givenBio) => (
                    <pre key={givenBio.slug} className="font-sans overflow-y-auto wrap-break-word">{givenBio.backstory}</pre>
                ))}
                <br/>
                
                <Link href="./Game/ChapterOne/Intro"className="text-1.5xl text-red-500 font-bold md:hover:underline">Begin!</Link>
            </div>            
        )}
      <br/>
      <Link href="./" className="text-2xl text-red-500 font-bold md:hover:underline">Back</Link>
    </>
  )
}

async function getCharacterBio(givenName) {
  const query = `*[_type == "character" && name == $givenName] | order(name) {
    name,
    backstory,
    "slug":slug.current
  }`;
  
  const content = await client.fetch(query, {givenName});
  
  return content;
}
