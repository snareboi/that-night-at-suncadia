"use client"
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { createChoices } from "./choices";
import { Howler } from "howler";

  let ambience = new Howl({
    src:[""],
    loop: true,
    volume: 0.5,
  })

  ambience.play();

  let sfxPlayer = new Howl({
    src:[""],
    loop: false,
    volume: 0.5,
  })

  function changeSong(song) {
    if (song == "stop") {
      ambience.stop();
    } else if (song != null) {
      ambience.stop();
      ambience = new Howl({
        src:[song],
        loop: true,
        volume: 0.2,
      })
      ambience.play();
    }
  }

  function playSFX(sfx, loop) {
    
    if (sfx == "stop") {
      sfxPlayer.stop();
    } else if (sfx != null) {
      sfxPlayer.stop();
      sfxPlayer = new Howl({
        src:[sfx],
        loop: loop,
        volume: 0.5,
      })
      
      sfxPlayer.play();
    }
  }


const builder = imageUrlBuilder(client);
export default function Scene() {
    const playerName = localStorage.getItem("playerName");

    const [scene, updateScene] = useState(0);
    const [currChoices, updateChoices] = useState(0);
    const [currSection, updateSection] = useState("Inside");
    
    const [choices, modifyChoices] = useState(createChoices(currSection));
    const [text, updateText] = useState(null);

    const [images, setImages] = useState(null);
    const [currImage, changeImage] = useState(9);

    const [tempScene, setTemp] = useState(null);
   
    //default values for numbers are always 0
    const [conditions, updateConditions] = useState([
      //Chapter 1
      //0
      false, //saw Mort's notebook
      
      //1
      0, //the game you chose (1 = JackBox, 2 = Telestrations, 3 = Poker
      
      //2 
      false, //engage with Ben at least once? (chapter 2)
      
      //3
      false, //know in depth Ben's situation with the group
      
      //4
      false, //watched TV before
      
      //5
      false, //read Mort's notebook
      
      //6
      0, //what you did instead of volleyball (0 = volleyball, 1 = cook, 2 = talk to Alicia, 3 = anything else, 4 = hot tub)

      //Chapter 2
      //7
      0, //what did you do at the start of the act? (0 - sleep, 1 - garage/movie, 2 - pool, 3 - Ben, 4 - pool then movie)
      
      //8
      false, //helped Ben sufficiently through his problems

      //9
      0, //give Mabel your jacket? 0 - neutral, 1 - no, 2 - yes

      //10
      false, //told Mabel to be brave?

      //11
      false, //see the monster?

      //12
      false, //hear Roxy out in the tub?

      //13
      false, //did you go to the lodge with Mort, Alicia and Ben?

      //14
      0, //who did you save in the first monster encounter? 0 - weren't there, 1 - Ben, 2 - Alicia

      //15
      false, //did you go to the bathroom in the park?

      //16
      false, //did you keep the lights on?
    ]);

    const pictureStyle = {
      opacity: 0.8
    }
    
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
          if(tempScene != null) {
            updateScene(tempScene);
          }   
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
      
      
      if (choice.newSection != null) {
        updateSection(choice.newSection);
        modifyChoices(createChoices(choice.newSection));
        setTemp(choice.newScene);
      } else {
        updateScene(choice.newScene);
      }
      changeSong(choice.song);
      playSFX(choice.sfx, choice.loop);
      updateChoices(choice.newChoice);
      modifyConditions(choice.newScene);
      checkSpecialCondition(choice.newScene);
    }


    //checks if a certain scene is picked to modify a condition
    function modifyConditions(scene) {
      if (currSection == "Intro") { //Chapter 1
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
          conditions[3] = true;
        } else if (scene == 0) {
          conditions[6] = 4;
        }
      } else if (currSection == "Evening") {

      } else if (currSection == "Inside") { //Chapter 2
        if (scene == 4) {
          conditions[7] = 3;
        } else if (scene == 46) {
          conditions[9] = 2;
        } else if (scene == 47) {
          conditions[9] = 1;
        } else if (scene == 10) {
          conditions[7] = 2;
        } else if (scene == 21) {
          conditions[7] = 1;
        } else if (scene == 15) {
          conditions[7] = 4;
        } else if (scene == 11) {
          conditions[12] = true;
        } else if (scene == 61) {
          conditions[13] = true;
        }
      } else if (currSection == "Ben") {
        if (scene == 6 || scene == 7) {
          conditions[2] = true;
        } else if (scene == 13 || scene == 14) {
          conditions[8] = true;
        } else if (scene == 28) {
          conditions[9] = 2;
        } else if (scene == 29) {
          conditions[9] = 1;
        } else if (scene == 39) {
          conditions[15] = true;
          conditions[11] = true;
        } else if (scene == 57) {
          conditions[14] = 1;
        } else if (scene == 61) {
          conditions[14] = 2;
        }
      } else if (currSection == "Panic") {
        if (scene == 44 || scene == 45) {
          conditions[10] = true;
        } else if (scene == 74) {
          conditions[16] = true;
        }
      } else if (currSection == "Lodge") {
        if (scene == 33) {
          conditions[14] = 1;
        } else if (scene == 37) {
          conditions[14] = 2;
        } else if (scene == 0) {
          conditions[11] = true;
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
        } 
        if (choices[3][0] == "" && choices[3][1] == "" && choices[3][2] == "" && 
          choices[3][3] == "" && scene == 4) {
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
        if (choices[6][0] == "" && choices[6][1] == "" && choices[6][2] == "" && scene == 7) {
          if (conditions[0]) {
            updateScene(15);
            updateChoices(10);
          } else {
            updateScene(14);
            updateChoices(9);
          }
          
        }
      } else if (currSection == "Evening") {
        if (conditions[6] == 1) {
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
      } else if (currSection == "Inside") {
        if (conditions[1] == 2) {
          choices[17][0].newScene = 24;
        } else if (conditions[1] == 2) {
          choices[17][0].newScene = 25;
        }

        if (conditions[9] == 1) {
          choices[31][0].newScene = 49;
        } else if (conditions[9] == 2) {
          choices[31][0].newScene = 48;
          choices[31][0].newChoice = 33;
          
          choices[39][1].newScene = 62;
        }

        if (conditions[6] == 4) {
          choices[35][0].newScene = 52;
        } else if (conditions[6] == 1) {
          choices[35][0].newScene = 54;
        } else if (conditions[6] == 3) {
          choices[35][0].newScene = 55;
        }

        if (conditions[7] == 1 || conditions[7] == 4) {
          choices[41][0].newScene = 64;
          
          choices[42][0].label = "Continue watching the movie",
          choices[42][0].newScene = 66;
        }

        if (conditions[12]) {
          choices[44][0].newScene = 69;
          choices[44][0].newChoice = 45;
          choices[44][0].song = null;
          choices[44][0].sfx = "";
        }
      } else if (currSection == "Ben") {
        if (conditions[3]) {
          choices[1][0].newScene = 4;
          choices[5][0].newScene = 14;
        }

        if (conditions[2]) {
          choices[4][2].newScene = 15;
          choices[4][2].newChoice = 5;
        }

        if (conditions[8]) {
          choices[38][0].newScene = 55;
        }

        if (conditions[9]) {
          choices[22][0].newScene = 36;
        }
      } else if (currSection == "Panic") {
        if (conditions[0]) {
          choices[6][0].newScene = 10;
          choices[23][0].newScene = 10;
        }

        if (conditions[7] == 3) {
          choices[32][1] = {
              label: "\"He said he was happy to be here\"",
              newScene: 31,
              newChoice: 33,
              newImage: -1,
              remove: false,
              key: "1"
          };
        }

        if (conditions[9] == 2) {
          choices[33][0].newScene = 41;
          choices[35][0].newScene = 45;
        }

        if (conditions[14] == 1) {
          choices[5][0].newScene = 42;
          choices[5][0].newChoice = 34;

          choices[36][0] = choices[40][0];
          
          choices[45][0].newScene = 65;
        } else if (conditions[14] == 2) {
          choices[38][0].newScene = 58;
          
          choices[36][0] = choices[42][0];

          choices[39][0].newScene = 40;
          choices[39][0].newChoice = 32;
        }

        if (conditions[15]) {
          choices[9][0].newScene = 61;
          choices[14][0].newScene = 61;
          choices[25][0].newScene = 61;
          choices[29][0].newScene = 61;

          choices[46][0].newScene = 67;
          choices[46][0].newChoice = 47;
          choices[46][0].newImage = -1;

          choices[80][0].newScene = 101;
        } else if (conditions[13]) {
          choices[9][0].newScene = 62;
          choices[14][0].newScene = 62;
          choices[25][0].newScene = 62;
          choices[29][0].newScene = 62;

          choices[46][0].newScene = 68;
          choices[46][0].newChoice = 47;
          choices[46][0].newImage = -1;

          choices[48][1].newScene = 73;
        }

        if (conditions[16]) {
          choices[65][0].newImage = 9;
          
          choices[66][0].newChoice = 71;

          choices[75][0].newScene = 95;
          choices[76][0].newScene = 97;

          choices[78][0].newChoice = 80;
          choices[81][0].newScene = 104;
        }

        if (conditions[14] == 1 && !conditions[16]) {
          choices[79][0].newScene = 100;
        }
      } else if (currSection == "Lodge") {
        if (conditions[7] == 3) {
          choices[1][0].newScene = 2;
        }
        
        if (conditions[8]) {
          choices[23][0].newScene = 30;
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



