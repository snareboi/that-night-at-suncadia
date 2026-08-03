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
      0, //the game you chose (1 = JackBox, 2 = Telestrations, 3 = Poker
      
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
      false, //did you go to the lodge with Mort, Alicia and Ben?

      //14
      1, //who did you save in the first monster encounter? 0 - weren't there, 1 - Ben, 2 - Alicia

      //15
      false, //did you go to the bathroom in the park?

      //16
      true, //did you keep the lights on?

      //Act 3
      //17
      false, //did you call your mom?

      //18
      false, //did you check on Pepper?

      //19
      false, //did Ben talk to the group about his feelings?

      //20
      false, //did you go out to find your friends?

      //21
      0, //convince points. If above at least 3 you convinced Pepper and Roxy
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
          
          const content = await client.fetch(query, {currSection});
          updateText(content);
          if(tempScene != null) {
            let newChoices = createChoices(tempScene.newSection);
            checkSpecialCondition(newChoices, tempScene.newScene);
            modifyChoices(newChoices);
            updateScene(tempScene.newScene);
            updateChoices(tempScene.newChoice);
            modifyConditions(tempScene.newScene);
            
          }   
      }
      getScenes();
    }, [currSection, tempScene]);


    //Changes the scene and choices displayed. Also updates the picture, removes choices from 
    //recurring scenes, updates any conditions and updates choices according to special conditions
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
      
      
      if (choice.newSection != null) {
        updateSection(choice.newSection);
        setTemp(choice);
      } else {
        updateScene(choice.newScene);
        updateChoices(choice.newChoice);
        modifyConditions(choice.newScene);
        checkSpecialCondition(choices, choice.newScene);
      }      
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
      } else if (currSection == "After") { //Chapter 3
        if (scene == 21) {
          conditions[17] = true;
        } else if (scene == 67) {
          conditions[18] = true;
        } else if (scene == 111) {
          conditions[19] = true;
        } else if (scene == 186 || scene == 194) {
          conditions[20] = true;
        }
      }
      
    }

    //all of the special condition events happen here
    function checkSpecialCondition(choices, scene) {
      if (currSection == "Intro") {
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
      } else if (currSection == "After") {
        if ((conditions[14] == 0 || conditions[14] == 2) && conditions[16]) { //if Alicia and Roxy alive
          choices[1][0].newScene = 3;
          choices[29][0].newScene = 49;
          choices[38][0].newScene = 63;

          choices[40][1].newScene = 91;
          choices[53][0].newScene = 92;
          choices[55][0].newScene = 93;
          choices[57][0].newScene = 94;
          choices[59][0].newScene = 95;
          choices[61][0].newScene = 96;

          choices[75][0].newScene = 123;
          choices[89][0].newScene = 151;
          choices[91][1].newScene = 152;

          choices[95][0].newScene = 159;
          choices[96][0].newScene = 160;
          choices[97][0].newScene = 161;
          choices[98][0].newScene = 162;

          choices[104][1].newScene = 189;
          choices[105][0].newScene = 193;
        } else if (conditions[14] == 1 && !conditions[16]) { //if Ben alive, Roxy dead
          choices[1][0].newScene = 4;
          choices[29][0].newScene = 50;
          choices[38][0].newScene = 64;

          choices[40][1].newScene = 97;
          choices[53][0].newScene = 98;
          choices[55][0].newScene = 99;
          choices[57][0].newScene = 100;
          choices[59][0].newScene = 101;
          choices[61][0].newScene = 102;

          choices[75][0].newScene = 124;
          choices[89][0].newScene = 163;
          choices[91][1].newScene = 166;

          choices[105][0].newScene = 195;
        } else if (conditions[14] == 1 && conditions[16]) { //if Ben and Roxy alive
          choices[1][0].newScene = 5;
          choices[29][0].newScene = 51;
          choices[38][0].newScene = 65;

          choices[40][1].newScene = 103;
          choices[53][0].newScene = 104;
          choices[55][0].newScene = 105;
          choices[57][0].newScene = 106;
          choices[59][0].newScene = 107;
          choices[61][0].newScene = 108;

          choices[75][0].newScene = 125;
          choices[89][0].newScene = 170;
          choices[91][1].newScene = 168;

          choices[104][1].newScene = 189;
          choices[105][0].newScene = 196;
        }


        if (conditions[14] == 1) { //if Ben's alive
          choices[2][0].newScene = 7;
          choices[10][0].newScene = 19;
          choices[14][0].newScene = 27;

          choices[86][0].newScene = 140;
          choices[87][0].newScene = 141;
          choices[88][0].newScene = 142;
          choices[88][1].label = "\"Ben stop!\""
          choices[88][1].newScene = 143;
          choices[88][2].newScene = 144;
          choices[90][0].newScene = 164;
          choices[91][0].newScene = 165;
          
          choices[91][2].newScene = 167;
          choices[91][3].newScene = 165;
          choices[92][0].newScene = 169;
          if (conditions[18]) {
            choices[61][0].newChoice = 64;
          } else {
            choices[61][0].newChoice = 66;
          }

          if (conditions[19] && conditions[16]) { //did Ben confess and is Roxy alive?
            choices[94][1].newScene = 179;
            choices[94][1].newChoice = 100;

            choices[100][0].newScene = 181;
            choices[101][2].newScene = 185;
            choices[102][0].newScene = 185;

            choices[94][0].newScene = 197;
            choices[94][0].newChoice = 107;
            choices[107][0].newScene = 199;
          } else if (conditions[19]) { //did Ben confess but is Roxy dead?
            choices[94][1].newScene = 179;
            choices[94][1].newChoice = 100;

            choices[94][0].newScene = 197;
            choices[94][0].newChoice = 107;
          } else if (conditions[16]) { //did Ben not confess and is Roxy alive?
            choices[95][0].newScene = 175;
            choices[96][0].newScene = 176;
            choices[97][0].newScene = 177;
            choices[98][0].newScene = 178;

            choices[94][0].newScene = 194;
          } else { //did Ben not confess and is Roxy dead?
            choices[95][0].newScene = 171;
            choices[96][0].newScene = 172;
            choices[97][0].newScene = 173;
            choices[98][0].newScene = 174;
            
            choices[94][0].newScene = 194;
          }
        }

        if (conditions[16]) { //if Roxy's alive
          choices[3][0].newScene = 9;
          choices[3][0].newChoice = 4;
          choices[6][0].newScene = 13;
          choices[17][0].newChoice = 19;
          choices[27][0].newScene = 42;
          choices[37][0].newScene = 60;

          choices[67][0].newScene = 113;
          choices[70][0].newScene = 117;

          choices[106][0].label = "Try to convince them to come";
          choices[108][0].label = "Try to convince them to come";
        }

        if (conditions[15]) { //if you made it to the park bathroom (don't know Mabel's name)
          choices[13][0].newScene = 25;
          choices[30][0].newScene = 53;
        }

        if (conditions[11]) { //if you saw the monster
          choices[14][0].newChoice = 15;
        }

        if (conditions[17]) { //if you called your mom
          choices[26][0].newScene = 41;
          choices[28][0].newScene = 45;
          choices[84][0].newScene = 133;
        }

        if (conditions[5]) { //if you read the notebook earlier
          choices[51][0].newScene = 79;
        }

        if (conditions[8]) { //if you helped Ben through his problems
          choices[66][0].newScene = 111;
          choices[66][0].newChoice = 67;
          choices[66][0].song = "/audio/Hug Energy.mp3";
          choices[66][0].sfx = "";
        }

        if (conditions[18]) { //if you checked on Pepper
          choices[72][0].newChoice = 74;
        }
        
        if (conditions[20]) { //if you went to find your friends
          choices[97][0].newChoice = 105;
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
         text-black pb-5">
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



