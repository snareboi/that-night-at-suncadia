export function createChoices(chapterSection) {
    if (chapterSection == "Intro") {
        return [
            [
                {
                    label: "\"I'm coming\"",
                    newScene: 1,
                    newChoice: 1,
                    newPicture: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Can you give me a minute?\"",
                    newScene: 2,
                    newChoice: 1,
                    newPicture: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 3,
                    newChoice: 2,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            //intro exploration
            [
                {
                    label: "The Kitchen",
                    newScene: 5,
                    newChoice: 4,
                    newImage: -1,
                    remove: true,
                    key: "0"
                },
                {
                    label: "Pepper's Room",
                    newScene: 14,
                    newChoice: 10,
                    newImage: 2,
                    remove: true,
                    key: "1"
                },
                {
                    label: "The Bunkbed Room",
                    newScene: 20,
                    newChoice: 14,
                    newImage: -1,
                    remove: true,
                    key: "2"
                },
                {
                    label: "The Garage",
                    newScene: 34,
                    newChoice: 26,
                    newImage: 3,
                    remove: true,
                    key: "3"
                },
                {
                    label: "Back Porch",
                    newScene: 40,
                    newChoice: 31,
                    newImage: 4,
                    remove: true,
                    key: "4"
                }
            ],

            //Kitchen sequence
            [
                {
                    label: "Continue",
                    newScene: 6,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Offer Help",
                    newScene: 7,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                label: "Continue",
                newScene: 8,
                newChoice: 7,
                newImage: -1,
                remove: false,
                key: "0"
                }
            ],
            [
                {
                    label: "\"Oh 100% yeah!\"",
                    newScene: 9,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What kind?\"",
                    newScene: 10,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"Didn't you say you had that last year?\"",
                    newScene: 11,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "\"Why not take a break?\"",
                    newScene: 12,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Have fun with that\"",
                    newScene: 13,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            //Pepper's room sequence
            [
                {
                    label: "Continue",
                    newScene: 15,
                    newChoice: 11,
                    newImage: 2,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "\"Just looking around\"",
                    newScene: 16,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"So? That means I can't look around?\"",
                    newScene: 19,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "\"Wouldn't be worth a look anyway\"",
                    newScene: 17,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Fine, whatever. Just let me finish looking around.\"",
                    newScene: 18,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Walk away and leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],

            //Bunk bed sequence (14)
            [
                {
                    label: "Continue",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Try talking to everyone in the room",
                    newScene: 22,
                    newChoice: 16,
                    newImage: -1,
                    remove: true,
                    key: "1"
                },
                {
                    label: "Go to the balcony",
                    newScene: 23,
                    newChoice: 17,
                    newImage: -1,
                    remove: true,
                    key: "2"
                }
            ],
            [
                {
                    label: "Leave them be",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Talk to Josh",
                    newScene: 31,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],

            //Talking to Sayori
            [
                {
                    label: "Talk to Sayori",
                    newScene: 24,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave Sayori alone",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Keep talking",
                    newScene: 25,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave balcony",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Keep talking",
                    newScene: 26,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }, 
                {
                    label: "Leave balcony",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                "", //if you see Mort with the notebook
                {
                    label: "Leave balcony",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "\"What if it's not his diary?\"",
                    newScene: 28, 
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"You're probably right\"",
                    newScene: 29,
                    newChoice: 22, 
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 30,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            //talking to the others
            [
                {
                    label: "Ask about the story",
                    newScene: 32,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave Josh be",
                    newScene: 33,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            //garage sequence (26)
            [
                {
                    label: "Try talking to them",
                    newScene: 35,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "\"What's the score?\"",
                    newScene: 36,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"I'm glad to be back\"",
                    newScene: 38,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Berate Roxy",
                    newScene: 37,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "\"I'm glad to be back\"",
                    newScene: 38,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Talk to Ben",
                    newScene: 39,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "Talk to Ben",
                    newScene: 39,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],

            //back porch sequence
            [
                {
                    label: "Continue",
                    newScene: 41,
                    newChoice: 32,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],


            //Leaving for activity (33)
            [
                {
                    label: "Continue",
                    newScene: 43,
                    newChoice: 34,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //34
                {
                    label: "Put away toiletries",
                    newScene: 44,
                    newChoice: 37,
                    newImage: -1,
                    remove: false,
                    key: "0"

                },
                {
                    label: "Scroll phone",
                    newScene: 49,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Watch TV",
                    newScene: 50,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                {
                    label: "Read book",
                    newScene: 51,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "3"
                }
            ],
            [ //35 (not used)
                {
                    label: "Continue",
                    newScene: 45,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //36 (not used)
                {
                    label: "Look for it",
                    newScene: 46,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave it",
                    newScene: 47,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //37
                {
                    label: "Continue",
                    newScene: 48,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //38
                {
                    label: "Continue",
                    newScene: 52,
                    newChoice: 39,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //39
                {
                    label: "Continue",
                    newScene: 53,
                    newChoice: 40,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //40
                {
                    label: "Go to the park",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 5,
                    remove: false,
                    key: "0",
                    newSection: "Park"
                },
                {
                    label: "Stay in the cabin with Mitch and Alicia",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "1",
                    newSection: "Cabin"
                },
                {
                    label: "Join Mort in the hot tub",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 8,
                    remove: false,
                    key: "2",
                    newSection: "Tub"
                }
            ]
        ];
    } else if (chapterSection == "Park") {
        return [
            [
                {
                    label: "Ben and Roxy",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Josh, Lonnie and Sayori",
                    newScene: 2,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Pepper and Marlin",
                    newScene: 6,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                {
                    label: "Nobody",
                    newScene: 7,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "3"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 8,
                    newChoice: 3,
                    newImage: 6,
                    remove: false,
                    key: "0"
                },
            ],
            [
                {
                    label: "Side with Lonnie and Sayori",
                    newScene: 3,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Side with Josh",
                    newScene: 4,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Stay out of the argument",
                    newScene: 5,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "Lonnie, Josh and Roxy",
                    newScene: 9,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Pepper, Marlin and Ben",
                    newScene: 12,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Watch the game",
                    newScene: 15,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //Lonnie, Josh and Roxy (4)
                {
                    label: "Continue",
                    newScene: 10,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ 
                {
                    label: "Continue",
                    newScene: 11,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //Marlin, Pepper and Ben (6)
                {
                    label: "Continue",
                    newScene: 13,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 14,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //Watch the game (8)
                {
                    label: "Continue",
                    newScene: 16,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 17,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],



            [ //(11)
                {
                    label: "Continue",
                    newScene: 19,
                    newChoice: 12,
                    newImage: 7,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "\"Maybe you didn't know him well enough\"",
                    newScene: 20,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"That's weird\"",
                    newScene: 21,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 22,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "\"What about Jackbox\"",
                    newScene: 23,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What about Telestrations\"",
                    newScene: 24,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"What about Poker\"",
                    newScene: 25,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "Continue",
                    newScene: 26,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [
                {
                    label: "Enter the house",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    newSection: "Evening"
                }
            ]
        ];
    } else if (chapterSection == "Cabin") {
        return [
            [ //0
                {
                    label: "Help Mitch",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Try talking to Alicia",
                    newScene: 12,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Do something else",
                    newScene: 25,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //1
                {
                    label: "Pepper's paperweight",
                    newScene: 2,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Marlin",
                    newScene: 5,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Ben as a roommate",
                    newScene: 9,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                "" //
            ],
            [ //Help Mitch (2)
                //Pepper's paperweight (2)
                {
                    label: "\"Still think it's ridiculous\"",
                    newScene: 3,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Wonder if I'll get lucky if I had it\"",
                    newScene: 4,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //Marlin (3)
                {
                    label: "\"You still don't know what happened then?\"",
                    newScene: 6,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't respond",
                    newScene: 8,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //4
                {
                    label: "\"What about Josh? He deals with them just fine\"",
                    newScene: 7,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't ask anything",
                    
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //end of Mitch sequence (5)
                {
                    label: "Continue",
                    newScene: 11,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            [//talking to Alicia (6)
                {
                    label: "\"How's the job search?\"",
                    newScene: 13,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"How's it going?\"",
                    newScene: 17,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //7
                {
                    label: "\"Why do you need a job?\"",
                    newScene: 14,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What have you tried?\"",
                    newScene: 15,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Don't respond",
                    newScene: 16,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9
                {
                    label: "Pepper's paperweight",
                    newScene: 19,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Marlin",
                    newScene: 20,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                ""
            ],
            [ //10
                {
                    label: "\"So don't you know why?\"",
                    newScene: 21,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't respond",
                    newScene: 22,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [//end of Alicia and Mitch sequence (11)
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 1,
                    remove: false,
                    key: "0",
                    newSection: "Evening"
                }
            ],
            [ //doing something else (12)
                {
                    label: "Explore the house some more",
                    newScene: 29,
                    newChoice: 13,
                    newImage: -1,
                    remove: true,
                    key: "0"
                },
                {
                    label: "Scroll on your phone",
                    newScene: 24,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Watch TV",
                    newScene: 26,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                {
                    label: "Read a book",
                    newScene: 28,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "3"
                }
            ],
            [ //13
                {
                    label: "The fancy room",
                    newScene: 30,
                    newChoice: 14,
                    newImage: 2,
                    remove: true,
                    key: "0"
                },
                {
                    label: "The other bedrooms",
                    newScene: 31,
                    newChoice: 14,
                    newImage: -1,
                    remove: true,
                    key: "1"
                },
                {
                    label: "The bunkbed room",
                    newScene: 32,
                    newChoice: 14,
                    newImage: -1,
                    remove: true,
                    key: "2"
                },
            ],
            [ //14
                {
                    label: "Continue",
                    newScene: 29,
                    newChoice: 13,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //15 (Finding Mort's notebook)
                {
                    label: "Continue",
                    newScene: 33,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0" 
                }
            ],
            [ //16
                {
                    label: "Look for it",
                    newScene: 35,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave it",
                    newScene: 34,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //17 (end of do something else sequence)
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 1,
                    remove: false,
                    key: "0",
                    newSection: "Evening"
                }
            ]
        ];
    } else if (chapterSection == "Tub") {
        return [
            [ //0
                {
                    label: "\"Nah, just didn't feel like volleyball\"",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"I guess so\"",
                    newScene: 2,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"                
                }
            ],
            [ //1
                {
                    label: "Relax silently",
                    newScene: 3,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"  
                },
                {
                    label: "Chat with Mort",
                    newScene: 6,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
            ],
            [ //2 (universal end of the sequence)
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"  
                }
            ],
            [ //3
                {
                    label: "Continue",
                    newScene: 5,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //4
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 1,
                    remove: false,
                    key: "0",
                    newSection: "Evening"
                }
            ],
            [ //5
                {
                    label: "Continue",
                    newScene: 7,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //6
                {
                    label: "Marlin",
                    newScene: 8,
                    newChoice: 7,
                    newImage: -1,
                    remove: true,
                    key: "0"
                },
                {
                    label: "Gang history",
                    newScene: 11,
                    newChoice: 8,
                    newImage: -1,
                    remove: true,
                    key: "1"
                },
                {
                    label: "Alicia",
                    newScene: 12,
                    newChoice: 8,
                    newImage: -1,
                    remove: true,
                    key: "2"
                },
                {
                    label: "Other Suncadia bits",
                    newScene: 13,
                    newChoice: 8,
                    newImage: -1,
                    remove: true,
                    key: "3"
                },
            ],
            [ //7 (Marlin sequence)
                {
                    label: "\"So you still don't know why that happened?\"",
                    newScene: 9,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't respond",
                    newScene: 10,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 7,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9 (end of tub)
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //10 (knowing about the notebook)
                {
                    label: "Ask about it",
                    newScene: 16,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Leave it",
                    newScene: 19,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //11
                {
                    label: "Be honest",
                    newScene: 17,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Talk around it",
                    newScene: 18,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //12
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ]
            
        ]
    } else if (chapterSection == "Evening") {
        return [
            [ //0
                {
                    label: "Continue",
                    newScene: 1, 
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //1
                {
                    label: "Continue",
                    newScene: 1,//this changes based on what activity you did
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //2
                {
                    label: "Continue",
                    newScene: 6, //changes depending on the game played
                    newChoice: 3, //changes depending on the game played
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //3 (jackbox sequence)
                {
                    label: "Continue",
                    newScene: 7,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //4 
                {
                    label: "Continue",
                    newScene: 8,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //5 (end of jackbox sequence)
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    newSection: "Inside"
                }
            ],
            [ //6 (Telestrations sequence)
                {
                    label: "Zootopia",
                    newScene: 10,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Magic School Bus",
                    newScene: 11,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1",
                }
            ],
            [ //7
                {
                    label: "Continue",
                    newScene: 12,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 13,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //9
                {
                    label: "Continue",
                    newScene: 14,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //10 (end of Telestrations sequence)
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    newSection: "Inside"
                }
            ],
            [ //11 (Poker sequence)
                {
                    label: "Continue",
                    newScene: 16,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //12
                {
                    label: "Fold",
                    newScene: 17,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Play",
                    newScene: 20,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "1",  
                }
            ],
            [ //13
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //14
                {
                    label: "Continue",
                    newScene: 19,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //15 
                {
                    label: "Continue",
                    newScene: 41,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //16 (end of poker sequence)
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    newSection: "Inside"
                }
            ],
            [ //17
                {
                    label: "Match",
                    newScene: 30,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 22,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 21,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "2",
                }
            ],
            [ //18
                {
                    label: "Match",
                    newScene: 24,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 25,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 23,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2",
                }
            ],
            [ //19
                {
                    label: "Match",
                    newScene: 26,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 27,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 23,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2",
                },
                {
                    label: "All in",
                    newScene: 28,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "3",
                }
            ],
            [ //20
                {
                    label: "Match",
                    newScene: 31,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 36,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 29,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2",
                },
            ],
            [ //21
                {
                    label: "Match",
                    newScene: 32,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 33,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 34,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2",
                },
                {
                    label: "All in",
                    newScene: 35,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "3"
                }
            ],
            [ //22
                {
                    label: "Match",
                    newScene: 37,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "Raise",
                    newScene: 38,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "1",
                },
                {
                    label: "Fold",
                    newScene: 39,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "2",
                },
                {
                    label: "All in",
                    newScene: 40,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "3",
                }
            ],
            [ //23
                {
                    label: "Continue",
                    newScene: 42,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ]
        ];
    } else {
        return[];
    }
    
}