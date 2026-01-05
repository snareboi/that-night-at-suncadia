"use client"
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { createChoices } from "./choices";
import { Howler } from "howler";

// const ambience = new Howl({
//   src:["/audio/Scary Intro.m4a"],
//   loop: true,
//   volume: 0.5,
// })

// ambience.play();

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


    let conditions = [
      true, //saw Mort's notebook
      1, //the game you chose (1 = JackBox, 2 = Telestrations, 3 = Poker)
      false, //Mitch gives Marlin his bed
      false, //know in depth Marlin's situation with the group
      false, //offered Alicia a job
    ]
    
    useEffect (() => {
        async function getScenes() {
            const query = `*[_type == "scene" && section == $currSection] | order(id) {
                id,
                chapter,
                section,
                text,
                "slug":slug.current
            }`;
            
            const content = await client.fetch(query, {currSection});
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
    }, [currSection]);


    function changeScene(choice) {
      let column = parseInt(choice.key);
      if(choice.remove) {
        choices[currChoices][column] = ""; 
      }
      
      if(choice.newImage >= 0) {
        changeImage(choice.newImage);
      }
      
      updateScene(choice.newScene);
      updateChoices(choice.newChoice);
      modifyConditions(choice.newScene);
      checkSpecialCondition(choice.newScene);
      if(choice.newSection != null) {
        updateSection(choice.newSection);
        modifyChoices(createChoices(choice.newSection));
      }
    }


    //checks if a certain scene is picked to modify a condition
    function modifyConditions(scene) {
      if(currSection == "Intro") {
        if (scene == 32) {
          conditions[0] = true;
        }
      } else if (currSection == "Park") {
        if (scene == 24) {
          conditions[1] = 2;
        } else if (scene == 25) {
          conditions[1] = 3;
        }
      } else if (currSection == "Cabin") {
        if (scene == 7) {
          conditions[3] = true;
        } else if (scene == 8) {
          conditions[2] = true;
          conditions[3] = true;
        }
      }
      
    }

    //all of the special condition events happen here
    function checkSpecialCondition(scene) {
      if(currSection == "Intro") {
        if(conditions[0]) {
          choices[20][0] = {
              label: "Ask about Mort's notebook",
              newScene: 27,
              newChoice: 21,
              newImage: -1,
              removed: false,
              key: "0"
          };
          choices[34][0].newChoice = 35;
        } else if (choices[3][0] == "" && choices[3][1] == "" && choices[3][2] == "" && 
          choices[3][3] == "" && choices[3][4] == "" && scene == 4) {
          updateScene(42);
          updateChoices(33);
        }
      } else if(currSection == "Park") {
        if(conditions[0]) {
          choices[8][0] = {
              label: "Continue",
              newScene: 16,
              newChoice: 9,
              newImage: -1,
              remove: false,
              key: "0"
          }
        }
      } else if(currSection == "Cabin") {
        if(conditions[0]) {
          choices[1][3] = {
            label: "Mort's notebook",
            newScene: 10,
            newChoice: 5,
            newImage: -1,
            remove: false,
            key: "3"
          }
        }
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
        <section className="bg-gray-200 ml-auto mr-auto mt-10 max-w-3xl min-w-1 opacity-90 text-black">
          <div className="mx-auto max-w-prose space-y-8 py-13 p-1 text-left">
            <div className="fade-in" key={scene}>
              <article className="p-2 prose md:prose-md prose-primary mx-auto max-h-125 overflow-y-scroll">
                  <PortableText value={text ? replaceInBlocks(text[scene].text, playerName) : ""} components={[]} />
                  <br/>
                  {choices[currChoices].map((choice) => 
                    choice ? 
                      <div key={choice.key}>
                      <button key={choice.key} className="md:hover:underline cursor-pointer p-1 text-left text-red-500 font-bold" 
                      onClick={() => changeScene(choice)}>
                        {choice.label}
                      </button>
                    </div> : null
                  )}
              </article>
              </div>
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



