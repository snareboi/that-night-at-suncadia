"use client"
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import { PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { createChoices } from "./choices";
import { checkSpecialCondition } from "./checkSpecialconditions";
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
    const [playerName, updateName] = useState("");
    const [scene, updateScene] = useState(0);
    const [currChoices, updateChoices] = useState(0);
    const [currSection, updateSection] = useState("Intro");
    
    const [choices, modifyChoices] = useState(createChoices(currSection));
    const [text, updateText] = useState(null);

    const [images, setImages] = useState(null);
    const [currImage, changeImage] = useState(0);

    const [tempScene, setTemp] = useState(null);
   
    //default values for numbers are always 0
    const [conditions, updateConditions] = useState([
      //Chapter 1
      //0
      false, //saw Mort's notebook
      
      //1
      1, //the game you chose (1 = JackBox, 2 = Telestrations, 3 = Poker)
      
      //2 
      false, //engage with Ben at least once? (Act 2)
      
      //3
      false, //know in depth Ben's situation with the group
      
      //4
      false, //watched TV before
      
      //5
      false, //read Mort's notebook
      
      //6
      0, //what you did instead of volleyball (0 = volleyball, 1 = cook, 2 = talk to Alicia, 3 = anything else, 4 = hot tub)

      //Act 2
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
      true, //did you go to the lodge with Mort, Alicia and Ben?

      //14
      1, //who did you save in the first monster encounter? 0 - weren't there, 1 - Ben, 2 - Alicia

      //15
      false, //did you go to the bathroom in the park?

      //16
      true, //did you keep the lights on?

      //Act 3
      //17
      true, //did you call your mom?

      //18
      false, //did you check on Pepper?

      //19
      false, //did Ben talk to the group about his feelings?

      //20
      false, //did you go out to find your friends?

      //21
      5, //convince points. If above at least 4 you convinced Pepper and Roxy. Only 3, Roxy will go if applicable

      //22
      0, //where did you hide? 0 - under bed, 1 - in the garage, 2 - in the nook

      //23
      0, //is Ben/Alicia, whoever wasn't saved dead/how many rooms did you visit? If more than 6, they are dead

      //24
      0, //doomscroll score

      //25
      false, //did you find the guns?

      //26
      true, //did you find the code?

      //27
      false, //did you lead?
    ]);

    const pictureStyle = {
      opacity: 0.8
    }

    //grabs the player's name only once on the first render
    useEffect(() => {
      //Fetches the pictures from the sanity and puts them in the images hook
      async function getPictures() {
        const query = `*[_type == "photo"] | order(id) {
          description,
          image
        }`;
        
        const pictures = await client.fetch(query);
        setImages(pictures);
      }
      getPictures();
      updateName(localStorage.getItem("playerName"));
    }, []);

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
          
          updateText(null);
          const content = await client.fetch(query, {currSection});
          updateText(content);
          if (tempScene != null) {
            updateScene(tempScene.newScene);
          }  
      }
      getScenes();
    }, [currSection, tempScene]);


    //Changes the scene and choices displayed. Also updates the picture, removes choices from 
    //recurring scenes, updates any conditions and updates choices according to special condition
    function changeScene(choice) {
      changeSong(choice.song);
      playSFX(choice.sfx, choice.loop);
      let column = parseInt(choice.key);
      if (choice.remove) {
        choices[currChoices][column] = ""; 
      }
      
      if (choice.newImage >= 0) {
        changeImage(choice.newImage);
      }
      
      if (choice.condition != null) {
        editConditions(choice.condition, choice.type, choice.num);
        checkSpecialCondition(choices, currSection, conditions);
      }
      //for testing sake, it will check every choice for special conditions
      // checkSpecialCondition(choices, currSection, conditions);

      if (choice.newSection != null) {
        updateSection(choice.newSection);
        setTemp(choice);

        let newChoices = createChoices(choice.newSection);
        checkSpecialCondition(newChoices, choice.newSection, conditions);
        modifyChoices(newChoices);
        updateChoices(choice.newChoice);
        
      } else {
        updateScene(choice.newScene);
        updateChoices(choice.newChoice);
      }      
    }

    //updates a condition
    function editConditions(conditionIndex, type, num) {
      if (type == "boolean") {
        conditions[conditionIndex] = true;
      } else if (type == "multipleChoice") {
        conditions[conditionIndex] = num;
      } else {
        conditions[conditionIndex] += 1;
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
         text-black pb-5">
          <div className="mx-auto max-w-prose space-y-8 py-13 p-1 text-left">
            <div className="fade-in" key={scene}>
              <article className="p-2 prose md:prose-md prose-primary mx-auto max-h-125 overflow-y-scroll">
                {text ? (
                  <>
                    <PortableText value={replaceInBlocks(text[scene].text, playerName)} components={[]} />  
                    <br/>
                    {choices[currChoices].map((choice) => choice ? 
                      <div key={choice.key}>
                        <button key={choice.key} className="hover:underline cursor-pointer p-1 
                          text-left text-red-500 font-bold" onClick={() => changeScene(choice)}>
                          {choice.label}
                        </button>
                      </div> : null
                    )}
                  </>) : (<div>Loading...</div>)
                }
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



