"use client"
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { PortableText } from "next-sanity";
import React, { useEffect, useState } from "react";
import { createChoices } from "./choices";

const builder = imageUrlBuilder(client);
export default function Scene() {
    const playerName = localStorage.getItem("playerName");

    const [scene, updateScene] = useState(0);
    const [currChoices, updateChoices] = useState(0);
    const [choices, modifyChoices] = useState(createChoices());
    const [text, updateText] = useState(null);

    const [images, setImages] = useState(null);
    const [currImage, changeImage] = useState(0);


    const pictureStyle = {
      opacity: 0.8
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

        async function getPictures() {
          const query = `*[_type == "photo"] | order(id) {
            description,
            image
          }`;
          
          const pictures = await client.fetch(query);
          setImages(pictures);
        }
        getScenes();
        getPictures();
    }, [React.useRef()]);

    function changeScene(newScene, newChoice, newImage) {
      if(newImage >= 0) {
        changeImage(newImage);
      }
      updateScene(newScene);
      updateChoices(newChoice);
      
      if(newScene == 5) {
        choices[3][0] = "";
      } else if(newScene == 14) {
        choices[3][1] = "";
      }
      
    }

    return (
      <>
        {(images != null) && ( //makes sure the images list is not null
          <Image
            src={urlFor(images[currImage].image).auto("format").url()}
            fill={true}
            alt={images ? images[currImage].description : "blank background"}
            style={pictureStyle}
          />
        )}
        {console.log(playerName)}
        <section className="bg-gray-200 ml-auto mr-auto mt-10 max-w-3xl min-w-1 opacity-90 text-black">
          <div className="mx-auto max-w-prose space-y-8 py-13 p-1 text-left">
              <article className="p-2 prose md:prose-md prose-primary mx-auto max-h-125 overflow-y-scroll">
                  <PortableText value={text ? replaceInBlocks(text[scene].text, playerName) : ""} components={[]} />
                  <br/>
                  {choices[currChoices].map((choice) => 
                    choice ? 
                      <div key={choice.key}>
                      <button key={choice.key} className="md:hover:underline cursor-pointer p-1 text-left text-red-500 font-bold" 
                      onClick={() => changeScene(choice.newScene, choice.newChoice, choice.newImage)}>
                        {choice.label}
                      </button>
                    </div> : null
                  )}
              </article>
          </div>   
        </section>    
         
      </>  
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


function urlFor(source) {
 return builder.image(source);
}

