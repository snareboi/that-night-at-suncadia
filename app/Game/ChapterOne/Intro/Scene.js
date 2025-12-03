"use client"
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import React, { useEffect, useState } from "react";


export default function Scene() {
    const [scene, updateScene] = useState(0);
    const [currChoices, updateChoices] = useState(0);
    const [text, updateText] = useState(null);

    function changeScene(newScene, newChoice) {
      updateScene(newScene);
      updateChoices(newChoice);
    }
    
    useEffect (() => {
        async function getScenes() {
            const query = `*[_type == "scene"] | order(id) {
                id,
                chapter,
                section,
                text,
                "slug":slug.current
            }`;
            
            const content = await client.fetch(query);
            updateText(content);
        }
        getScenes();
    }, [React.useRef()]);

    const choices = [
      (
          <div className="text-left text-red-500 font-bold">
              <button className="md:hover:underline cursor-pointer p-1" onClick={(() => changeScene(1, 1))}>"I'm coming"</button>
              <br/>
              <button className="md:hover:underline cursor-pointer p-1" onClick={(() => changeScene(2, 1))}>"Can you give me a minute?"</button>
          </div>
      ),
      (
        <div className="text-left text-red-500 font-bold">
          <button className="md:hover:underline cursor-pointer p-1" onClick={(() => changeScene(3, 2))}>Continue</button>
        </div>
      ),
      (
        <div className="text-left text-red-500 font-bold">
          <button>Continue</button>
        </div>
      )
    ];

    return (
        <div className="mx-auto max-w-prose space-y-8 py-8">
            <article className="p-2 prose md:prose-md prose-primary mx-auto max-h-125 overflow-y-scroll">
                <PortableText value={text ? replaceInBlocks(text[scene].text, "Ellie") : ""} components={[]} />
                <br/>
                {choices[currChoices]}
            </article>
        </div>
                
    )
}


//replaces all of the <> in the sanity block text with the player's selected name
function replaceInBlocks(blocks, playerName) {
  return blocks.map(block => {
    if (!block.children) return block;

    const newChildren = block.children.map(child => {
      if (child.text) {
        return {
          ...child,
          text: child.text.replace(/<>/g, playerName)
        };
      }
      return child;
    });

    return { ...block, children: newChildren };
  });
}

