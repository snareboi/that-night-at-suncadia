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
                    label: "\"We had that last year.\"",
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
                    label: "Barate Roxy",
                    newScene: 37,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
                {
                    label: "\"I'm glad to be back\" (lighten the mood)",
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
                    newChoice: 37, //35 if you saw Mort's notebook
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
            [ //35
                {
                    label: "Continue",
                    newScene: 45,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //36
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
                    newImage: -1,
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
            [
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
                    
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Do something else",

                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [
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
                    label: "\"What's pushing him away from us\"",
                    newScene: 6,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"I feel bad for him\"",
                    newScene: 8,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [
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
            [ //end of Mitch sequence
                {
                    label: "Continue",
                    newScene: 11,

                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ]
            
        ];
    } else {
        return[];
    }
    
}