"use client"

import Link from "next/link"
import { useState } from "react";


export default function MainContent() {
  const [scene, setScene] = useState(1);

  async function changeScene(name) {
    setScene(scene+1);
    localStorage.setItem("playerName", name);
  }

  return (
    <>
        {(scene == 1) && (
            <div className="text-left text-red-500 font-bold">
                <h1 className="text-black">Choose a Character</h1>
                <p className="text-black font-light">This does not change anything about the game other than the name used.</p>
                <br/>
                <ul>
                <li><button onClick={() => changeScene("Patrick")} className="md:hover:underline cursor-pointer p-1">Patrick</button></li>
                <li><button onClick={() => changeScene("Joesph")} className="md:hover:underline cursor-pointer p-1">Joesph</button></li>
                <li><button onClick={() => changeScene("Kent")} className="md:hover:underline cursor-pointer p-1">Kent</button></li>
                <li><button onClick={() => changeScene("Grace")} className="md:hover:underline cursor-pointer p-1">Grace</button></li>
                <li><button onClick={() => changeScene("Shiromi")} className="md:hover:underline cursor-pointer p-1">Shiromi</button></li>
                <li><button onClick={() => changeScene("Serena")} className="md:hover:underline cursor-pointer p-1">Serena</button></li>
                </ul>
                <br/>                
            </div>
            
        )}

        {(scene == 2) && (
            <div>
                <p>
                  Every text block will end with red text at the end, which are your choices. Some are singular &quot;continues&quot; that just progress the story while others are a series of 2-5 options. Once you click a choice, you will not be able to go back.
                </p>
                <br/>
                <p>
                  NEVER PRESS THE BACK OR REFRESH BUTTON ON YOUR BROWSER! IT WILL TAKE YOU BACK TO THE CHARACTER SELECTION SCREEN AND RESTART THE ENTIRE GAME!
                </p>
                <br/>
                <p>
                  Remember that your choices may affect what happens later on. Read carefully and HAVE FUN!
                </p>
                <br/>
                <Link href="./Game"className="text-1.5xl text-red-500 font-bold md:hover:underline">Begin!</Link>
            </div>            
        )}
      <br/>
      <Link href="./" className="text-2xl text-red-500 font-bold md:hover:underline">Back</Link>
    </>
  )
}
