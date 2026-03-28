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
    const [currSection, updateSection] = useState("Evening");
    
    const [choices, modifyChoices] = useState(createChoices(currSection));
    const [text, updateText] = useState(null);

    const [images, setImages] = useState(null);
    const [currImage, changeImage] = useState(1);

    

    const pictureStyle = {
      opacity: 0.8
    }


    let conditions = [
      true, //saw Mort's notebook
      3, //the game you chose (1 = JackBox, 2 = Telestrations, 3 = Poker)
      false, //Mitch gives Marlin his bed
      false, //know in depth Marlin's situation with the group
      false, //watched TV before
      false, //read Mort's notebook
      4, //what you did instead of volleyball (0 = volleyball, 1 = cook, 2 = talk to Alicia, 3 = anything else, 4 = hot tub)
    ]
    
    useEffect (() => {
      //Grabs the array of scenes from choices.js file from the if statement that matches the 
      //section currently on
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

      //Fetches the pictures from the sanity and puts them in the images hook
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


    //Changes the scene and choices displayed. Also updates the picture, removes choices from 
    //recurring scenes, updates any conditions and updates choices according to special conditions
    function changeScene(choice) {
      let column = parseInt(choice.key);
      if (choice.remove) {
        choices[currChoices][column] = ""; 
      }
      
      if (choice.newImage >= 0) {
        changeImage(choice.newImage);
      }
      
      updateScene(choice.newScene);
      updateChoices(choice.newChoice);
      modifyConditions(choice.newScene);
      checkSpecialCondition(choice.newScene);
      if (choice.newSection != null) {
        updateSection(choice.newSection);
        modifyChoices(createChoices(choice.newSection));
      }
      
    }


    //checks if a certain scene is picked to modify a condition
    function modifyConditions(scene) {
      if (currSection == "Intro") {
        if (scene == 32) {
          conditions[0] = true;
        } else if (scene == 50) {
          conditions[4] = true;
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
        } else if (scene == 35) {
          conditions[5] = true;
        } else if (scene == 1) {
          conditions[6] = 1;
        } else if (scene == 12) {
          conditions[6] = 2;
        } else if (scene == 25) {
          conditions[6] = 3;
        }
      } else if (currSection == "Tub") {
        if (scene == 9) {
          conditions[2] = true;
        } else if (scene == 0) {
          conditions[6] = 4;
        }
      } else if (currSection == "Evening") {

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
        } 
        if (choices[3][0] == "" && choices[3][1] == "" && choices[3][2] == "" && 
          choices[3][3] == "" && choices[3][4] == "" && scene == 4) {
          updateScene(42);
          updateChoices(33);
        }
      } else if (currSection == "Park") {
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
      } else if (currSection == "Cabin") {
        if (conditions[0]) {
          choices[1][3] = {
            label: "Mort's notebook",
            newScene: 10,
            newChoice: 5,
            newImage: -1,
            remove: false,
            key: "3"
          };

          choices[9][2] = {
            label: "Mort's notebook",
            newScene: 23,
            newChoice: 11,
            newImage: -1,
            remove: false,
            key: "2"
          };
          if (choices[13][2] !== "") {
            choices[13][2].newChoice = 15;
          }
        }
    
        if (conditions[4]) {
          choices[12][2].newScene = 27;
        }
      } else if (currSection == "Tub") {
        if (choices[6][0] == "" && choices[6][1] == "" && choices[6][2] == "" && 
            choices[6][3] == "" && scene == 7) {
          if (conditions[0]) {
            updateScene(15);
            updateChoices(10);
          } else {
            updateScene(14);
            updateChoices(9);
          }
          
        }
      } else if (currSection == "Evening") {
        if (conditions[6] <= 1) {
          choices[1][0].newScene = 2;
        } else if (conditions[6] == 2) {
          choices[1][0].newScene = 3;
        } else if (conditions[6] == 3) {
          choices[1][0].newScene = 4;
        } else if (conditions[6] == 4) {
          choices[1][0].newScene = 5;
        }
        if (conditions[1] == 2) {
          choices[2][0].newScene = 9;
          choices[2][0].newChoice = 6;
        } else if (conditions[1] == 3) {
          choices[2][0].newScene = 15;
          choices[2][0].newChoice = 11;
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
        <section className="bg-gray-200 ml-auto mr-auto mt-10 max-w-3xl min-w-1 opacity-90
         text-black">
          <div className="mx-auto max-w-prose space-y-8 py-13 p-1 text-left">
            <div className="fade-in" key={scene}>
              <article className="p-2 prose md:prose-md prose-primary mx-auto max-h-125 overflow-y-scroll">
                  <PortableText value={text ? replaceInBlocks(text[scene].text, playerName) : ""} 
                    components={[]} />
                  <br/>
                  {choices[currChoices].map((choice) => 
                    choice ? 
                      <div key={choice.key}>
                      <button key={choice.key} className="hover:underline cursor-pointer p-1 
                        text-left text-red-500 font-bold" 
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



