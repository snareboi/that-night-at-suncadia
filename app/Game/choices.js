export function createChoices(chapterSection) {
    if (chapterSection == "Intro") {
        return [
            [ //0
                {
                    label: "\"I'm coming\"",
                    newScene: 1,
                    newChoice: 1,
                    newPicture: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "\"Can you give me a minute?\"",
                    newScene: 2,
                    newChoice: 1,
                    newPicture: -1,
                    remove: false,
                    key: "1",
                }
            ],
            [ //1
                {
                    label: "Continue",
                    newScene: 3,
                    newChoice: 2,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //2
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
            [ //3
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
                    newImage: 17,
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
                }
            ],

            //Kitchen sequence
            [ //4
                {
                    label: "Continue",
                    newScene: 6,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //5
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
            [ //6
                {
                label: "Continue",
                newScene: 8,
                newChoice: 7,
                newImage: -1,
                remove: false,
                key: "0"
                }
            ],
            [ //7
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
            [ //8
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
            [ //9
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
            [ //10
                {
                    label: "Continue",
                    newScene: 15,
                    newChoice: 11,
                    newImage: 2,
                    remove: false,
                    key: "0"
                }
            ],
            [ //11
                {
                    label: "\"Since when do you just get to take this room?\"",
                    newScene: 16,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Yeah, amazing.\"",
                    newScene: 19,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //12
                {
                    label: "\"Ok, greedy ass\"",
                    newScene: 17,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Fine, whatever. Just let me finish looking around\"",
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
            [ //13
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
            [ //14
                {
                    label: "Continue",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //15
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
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
            [ //16
                {
                    label: "Leave them be",
                    newScene: 21,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Look through the movie shelf",
                    newScene: 31,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],

            //Talking to Sayori
            [ //17
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
            [ //18
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
            [ //19
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
            [ //20
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
            [ //21
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
            [ //22
                {
                    label: "Continue",
                    newScene: 30,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //23
                {
                    label: "Continue",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 1,
                    remove: false,
                    key: "0"
                }
            ],

            //more in the bunkbed room choices
            [ //24
                {
                    label: "Keep looking",
                    newScene: 32,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Give up",
                    newScene: 33,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //25
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
            [ //26
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
            [ //27
                {
                    label: "\"What's the score?\"",
                    newScene: 36,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"I'm glad to be here\"",
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
            [ //28
                {
                    label: "Continue",
                    newScene: 38,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
            ],
            [ //29
                {
                    label: "Continue",
                    newScene: 39,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
            ],
            [ //30
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
                    newSection: "Park",
                },
                {
                    label: "Stay in the cabin with Alicia",
                    newScene: 0,
                    newChoice: 0,
                    newImage: -1,
                    remove: false,
                    key: "1",
                    newSection: "Cabin",
                },
                {
                    label: "Join Mort in the hot tub",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 8,
                    remove: false,
                    key: "2",
                    newSection: "Tub",
                }
            ]
        ];
    } else if (chapterSection == "Park") {
        return [
            [
                {
                    label: "Lonnie and Sayori",
                    newScene: 2,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Ben, Pepper and Roxy",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Nobody",
                    newScene: 7,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "2"
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
                    label: "Side with Lonnie",
                    newScene: 3,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Side with Sayori",
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
                    label: "Lonnie and Roxy",
                    newScene: 9,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Pepper and Ben",
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
            [ //Lonnie and Roxy (4)
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
            [ //Pepper and Ben (6)
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
                    key: "0",
                }
            ],
            [ //12
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
            [ //13
                {
                    label: "Continue",
                    newScene: 22,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //14
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
                    newImage: 1,
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
                    label: "Help Alicia",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Do something else",
                    newScene: 25,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
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
                    label: "Ben",
                    newScene: 5,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Sayori as a roommate",
                    newScene: 9,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                "" //
            ],
            [ //Help Alicia (2)
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
            [ //Ben (3)
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
                    label: "\"What about Alicia? She deals with them just fine\"",
                    newScene: 7,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't ask anything",
                    newScene: 8,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //end of Alicia sequence (5)
                {
                    label: "Continue",
                    newScene: 11,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],

            [// cut out Alicia option
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
                    label: "Ben",
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
            [//end of Alicia sequence (11)
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
                    label: "Ben",
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
                    label: "Other Suncadia bits",
                    newScene: 13,
                    newChoice: 8,
                    newImage: -1,
                    remove: true,
                    key: "2"
                },
                {
                    label: "Stop talking",
                    newScene: 12,
                    newChoice: 9,
                    newImage: -1,
                    remove: true,
                    key: "3"
                },
            ],
            [ //7 (Ben sequence)
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
                    newImage: 17,
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
                    newScene: 43,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "0"
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
                    newScene: 43,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
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
                    newScene: 43,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
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
            ],
            [ //24
                {
                    label: "Continue",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Inside",
                    song: "stop"
                }
            ],
            [ //25
                {
                    label: "Continue",
                    newScene: 1,
                    newChoice: 0,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Inside",
                    song: "stop"
                }
            ]
        ];
    } else if (chapterSection == "Inside") {
        return [
            [ //0
                {
                    label: "\"Really, no one else?\"",
                    newScene: 2,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0",
                },
                {
                    label: "\"What exactly are you asking?\"",
                    newScene: 3,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //1
                {
                    label: "Go with Ben",
                    newScene: 4,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Stay",
                    newScene: 5,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //2 (leave with Ben)
                {
                    label: "Leave",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 12,
                    remove: false,
                    key: "0",
                    newSection: "Ben"
                }
            ],
            [ //3
                {
                    label: "\"Don't die\"",
                    newScene: 6,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Stay safe\"",
                    newScene: 7,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"Have fun\"",
                    newScene: 8,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //4
                {
                    label: "Continue",
                    newScene: 9,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //5
                {
                    label: "Go to the hot tub",
                    newScene: 10,
                    newChoice: 6,
                    newImage: 10,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Go to the garage",
                    newScene: 21,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "Go back to sleep",
                    newScene: 37,
                    newChoice: 26,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //6 (hot tub sequence)
                {
                    label: "Hear Roxy out",
                    newScene: 11,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Remain indifferent",
                    newScene: 12,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //7
                {
                    label: "Continue",
                    newScene: 13,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 14,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9
                {
                    label: "Watch the movie",
                    newScene: 15,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Stay in the tub",
                    newScene: 17,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //10 
                {
                    label: "Continue",
                    newScene: 16,
                    newChoice: 11,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    song: "/sfx/movie.mp3"
                }
            ],
            [ //11 (goes into the garage sequence)
                {
                    label: "Continue",
                    newScene: 32,
                    newChoice: 23,
                    newImage: 18,
                    remove: false,
                    key: "0"
                }
            ],
            [ //12
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //13
                {
                    label: "Continue",
                    newScene: 19,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //14
                {
                    label: "Continue",
                    newScene: 20,
                    newChoice: 15,
                    newImage: 9,
                    remove: false,
                    key: "0"
                }
            ],
            [ //15 (end of hot tub sequence) end transition of bed, tub and garage sequences
                {
                    label: "Continue",
                    newScene: 39,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //16 (garage sequence)
                {
                    label: "Enter",
                    newScene: 22,
                    newChoice: 17,
                    newImage: 11,
                    remove: false,
                    key: "0"
                }
            ],
            [ //17 
                {
                    label: "Ask about the game",
                    newScene: 23,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Walk to the table without asking",
                    newScene: 26,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //18
                {
                    label: "Continue",
                    newScene: 27,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //19
                {
                    label: "Continue",
                    newScene: 28,
                    newChoice: 20,
                    newImage: 18,
                    remove: false,
                    key: "0"
                }
            ],
            [ //20
                {
                    label: "\"Where did you get this\"",
                    newScene: 29,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"When did you guys start watching these?\"",
                    newScene: 30,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //21
                {
                    label: "Continue",
                    newScene: 31,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    song: "/sfx/movie.mp3"
                }
            ],
            [ //22
                {
                    label: "Continue",
                    newScene: 32,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //23
                {
                    label: "Try reassuring Roxy",
                    newScene: 33,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Do nothing",
                    newScene: 34,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //24
                {
                    label: "Continue",
                    newScene: 35,
                    newChoice: 25,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    song: "stop"
                }
            ],
            [ //25
                {
                    label: "Continue",
                    newScene: 36,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //26 (go back to sleep sequence)
                {
                    label: "Continue",
                    newScene: 38,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //27 (links back to the last scene of the garage sequence)
                {
                    label: "Continue",
                    newScene: 36,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //28 (mid act 2)
                {
                    label: "\"Good. Been fun\"",
                    newScene: 40,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Ok\"",
                    newScene: 41,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //29
                {
                    label: "Continue",
                    newScene: 42,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //30
                {
                    label: "\"Nothing\"",
                    newScene: 43,
                    newChoice: 31,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Mention the girl\"",
                    newScene: 44,
                    newChoice: 31,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //31
                {
                    label: "Continue",
                    newScene: 45,
                    newChoice: 32,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //32
                {
                    label: "Give her the jacket",
                    newScene: 46,
                    newChoice: 33,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Don't give her the jacket",
                    newScene: 47,
                    newChoice: 33,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //33
                {
                    label: "Continue",
                    newScene: 50,
                    newChoice: 34,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //34
                {
                    label: "Continue",
                    newScene: 51,
                    newChoice: 35, 
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //35
                {
                    label: "\"Good!\" (Positive)",
                    newScene: 53,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Ok\" (Neutral)",
                    newScene: 56,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"Could be better\"",
                    newScene: 57,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //36
                {
                    label: "Continue",
                    newScene: 58,
                    newChoice: 37,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //37
                {
                    label: "Continue",
                    newScene: 59,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //38
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 39,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //39
                {
                    label: "Go with them",
                    newScene: 61,
                    newChoice: 40,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Stay behind",
                    newScene: 63,
                    newChoice: 41,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //40
                {
                    label: "Leave",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 12,
                    remove: false,
                    key: "0",
                    newSection: "Lodge"
                }
            ],
            [ //41
                {
                    label: "Continue",
                    newScene: 65,
                    newChoice: 42,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //42
                {
                    label: "Go watch the movie",
                    newScene: 67,
                    newChoice: 43,
                    newImage: 18,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Go to sleep",
                    newScene: 73,
                    newChoice: 48,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //43 (watch movie sequence)
                {
                    label: "Continue",
                    newScene: 68,
                    newChoice: 44,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    song: "/sfx/movie.mp3"
                }
            ],
            [ //44
                {
                    label: "Continue",
                    newScene: 72,
                    newChoice: 47,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    song: "stop",
                    sfx: "/sfx/door banging.mp3",
                    loop: false
                }
            ],
            [ //45
                {
                    label: "\"You can't force yourself into his problems\"",
                    newScene: 70,
                    newChoice: 46,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What do you suggest we do?\"",
                    newScene: 71,
                    newChoice: 46,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 72,
                    newChoice: 47,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //46 - door banging sfx
                {
                    label: "Continue",
                    newScene: 72,
                    newChoice: 47,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    song: "stop",
                    sfx: "/sfx/door banging.mp3",
                    loop: false
                }
            ],
            [ //47 (end of staying sequence)
                {
                    label: "Run downstairs",
                    newScene: 38,
                    newChoice: 30,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Panic"
                }
            ],
            [ //48 (go to sleep sequence)
                {
                    label: "Go to your room",
                    newScene: 74,
                    newChoice: 49,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //49
                {
                    label: "Sleep",
                    newScene: 75,
                    newChoice: 50,
                    newImage: 19,
                    remove: false,
                    key: "0"
                }
            ],
            [ //50 - play door banging sfx (goes to choice end of watch movie sequence)
                {
                    label: "Continue",
                    newScene: 76,
                    newChoice: 47,
                    newImage: 9,
                    remove: false,
                    key: "0"
                }
            ]
        ]
    } else if (chapterSection == "Ben") {
        return[
            [ //0
                {
                    label: "\"I figured\"",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"I'm glad to be here too\"",
                    newScene: 2,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //1
                {
                    label: "Continue",
                    newScene: 3,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //2
                {
                    label: "Continue",
                    newScene: 5,
                    newChoice: 3,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //3
                {
                    label: "\"What is \'you?\'\"",
                    newScene: 6,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What do you mean by the 'culture?'\"",
                    newScene: 7,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                { //4
                    label: "\"...\"",
                    newScene: 8,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //4
                {
                    label: "\"It's not you, we all change\"",
                    newScene: 9,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Have you talked to them about this?\"",
                    newScene: 10,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 11,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //5
                {
                    label: "\"Then leave\"",
                    newScene: 12,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Talk to them about it\"",
                    newScene: 13,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 11,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //6
                {
                    label: "Continue",
                    newScene: 16,
                    newChoice: 7,
                    newImage: 13,
                    remove: false,
                    key: "0"
                }
            ],
            [ //7
                {
                    label: "Protest and stay behind",
                    newScene: 17,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Follow him",
                    newScene: 18,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 19,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9
                {
                    label: "\"Fuck\"",
                    newScene: 20,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"What do we do?\"",
                    newScene: 21,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //10
                {
                    label: "Continue",
                    newScene: 21,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //11
                {
                    label: "Wait a little for her parents",
                    newScene: 26,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Go back to the cabin",
                    newScene: 23,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //12 (going back to cabin sequence)
                {
                    label: "Continue",
                    newScene: 24,
                    newChoice: 13,
                    newImage: 12,
                    remove: false,
                    key: "0"
                }
            ],
            [ //13
                {
                    label: "Continue",
                    newScene: 25,
                    newChoice: 14,
                    newImage: 9,
                    remove: false,
                    key: "0"
                }
            ],
            [ //14 (end of going back to cabin sequence)
                {
                    label: "Continue",
                    newScene: 39,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    newSection: "Inside"
                }
            ],
            [ //15
                {
                    label: "Continue",
                    newScene: 27,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //16
                {
                    label: "Give her your jacket",
                    newScene: 28,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Keep your jacket",
                    newScene: 29,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //17
                {
                    label: "Continue",
                    newScene: 30,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //18
                {
                    label: "\"You still sure about this?\"",
                    newScene: 31,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"They're not coming\"",
                    newScene: 32,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //19
                {
                    label: "Continue",
                    newScene: 33,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //20
                {
                    label: "Head back to the cabin",
                    newScene: 34,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Wait another fifteen minutes",
                    newScene: 35,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //21 (goes back to the 'go back to cabin sequence')
                {
                    label: "Continue",
                    newScene: 24,
                    newChoice: 13,
                    newImage: 9,
                    remove: false,
                    key: "0"
                },
            ],
            [ //22
                {
                    label: "Continue",
                    newScene: 37,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //23
                {
                    label: "Continue",
                    newScene: 38,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //24
                {
                    label: "Go into the bathroom",
                    newScene: 39,
                    newChoice: 25,
                    newImage: 14,
                    remove: false,
                    key: "0"
                }
            ],
            [ //25
                {
                    label: "Continue",
                    newScene: 40,
                    newChoice: 26,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //26
                {
                    label: "\"Good. Been fun\"",
                    newScene: 41,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Ok\"",
                    newScene: 42,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //27
                {
                    label: "\"Nothing\"",
                    newScene: 43,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Mention the girl",
                    newScene: 44,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //28
                {
                    label: "Continue",
                    newScene: 45,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //29 - play bang + phone fall soundeffect
                {
                    label: "Continue",
                    newScene: 46,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/shutdown bang.mp3",
                    loop: false
                }
            ],
            [ //30
                {
                    label: "Continue",
                    newScene: 47,
                    newChoice: 31,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //31
                {
                    label: "Leave the bathroom",
                    newScene: 48,
                    newChoice: 32,
                    newImage: 13,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Stay in the bathroom",
                    newScene: 65,
                    newChoice: 49,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //32 (leaving the bathroom sequence)
                {
                    label: "Continue",
                    newScene: 49,
                    newChoice: 33,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //33
                {
                    label: "Continue",
                    newScene: 50,
                    newChoice: 34,
                    newImage: 15,
                    remove: false,
                    key: "0"
                }
            ],
            [ //34
                {
                    label: "Run!",
                    newScene: 51,
                    newChoice: 35,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //35
                {
                    label: "Continue",
                    newScene: 52,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //36
                {
                    label: "Continue",
                    newScene: 53,
                    newChoice: 37,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //37
                {
                    label: "Continue",
                    newScene: 54,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //38
                {
                    label: "Continue",
                    newScene: 56,
                    newChoice: 39,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/monster noises.mp3",
                    loop: true
                }
            ],
            [ //39
                {
                    label: "Continue",
                    newScene: 33,
                    newChoice: 40,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //40
                {
                    label: "Help Ben",
                    newScene: 57,
                    newChoice: 41,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Run away with Alicia",
                    newScene: 61,
                    newChoice: 45,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //41 (save Ben)
                {
                    label: "Continue",
                    newScene: 58,
                    newChoice: 42,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //42
                {
                    label: "Continue",
                    newScene: 59,
                    newChoice: 43,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //43
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 44,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/door banging.mp3",
                    loop: false
                }    
            ],
            [ //44
                {
                    label: "Enter",
                    newScene: 0,
                    newChoice: 0,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Panic"
                }
            ],
            [ //45 (save Alicia)
                {
                    label: "Continue",
                    newScene: 62,
                    newChoice: 46,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //46
                {
                    label: "Continue",
                    newScene: 63,
                    newChoice: 47,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //47
                {
                    label: "Continue",
                    newScene: 64,
                    newChoice: 48,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/door banging.mp3",
                    loop: false
                }
            ],
            [ //48
                {
                    label: "Enter",
                    newScene: 20,
                    newChoice: 15,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Panic"
                }
            ],
            [ //49 (stay in the bathroom)
                {
                    label: "Object",
                    newScene: 66,
                    newChoice: 50,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Agree",
                    newScene: 67,
                    newChoice: 50,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //50
                {
                    label: "Continue",
                    newScene: 68,
                    newChoice: 51,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //51
                {
                    label: "Continue",
                    newScene: 69,
                    newChoice: 52,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //52
                {
                    label: "Continue",
                    newScene: 70,
                    newChoice: 53,
                    newImage: 16,
                    remove: false,
                    key: "0"
                }
            ],
            [ //53 (ending 4)
                {
                    label: "Ending 4",

                    
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ]
        ];
    } else if (chapterSection == "Panic") {
        return [
            [ //0 (saved Ben)
                {
                    label: "\"She's dead\"",
                    newScene: 1,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"...\"",
                    newScene: 2,
                    newChoice: 1,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //1
                {
                    label: "Continue",
                    newScene: 3,
                    newChoice: 2,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //2
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
                    label: "\"She wanted to help people\"",
                    newScene: 6,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"She loved the law\"",
                    newScene: 7,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 8,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //5
                {
                    label: "Continue",
                    newScene: 9,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //6
                {
                    label: "Continue",
                    newScene: 11,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //7
                {
                    label: "Leave him alone",
                    newScene: 12,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Talk to Mort",
                    newScene: 14,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //8
                {
                    label: "Continue",
                    newScene: 13,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 43,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/double pound.mp3",
                    loop: true
                }
            ],
            [ //10 
                {
                    label: "Continue",
                    newScene: 15,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //11
                {
                    label: "\"Yes\"",
                    newScene: 16,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"No\"",
                    newScene: 17,
                    newChoice: 12,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //12
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 13,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //13
                {
                    label: "Continue",
                    newScene: 19,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //14
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 43,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/double pound.mp3",
                    loop: true
                }
            ],
            [ //15 (saved Alicia)
                {
                    label: "\"He's dead\"",
                    newScene: 21,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"...\"",
                    newScene: 22,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //16
                {
                    label: "Continue",
                    newScene: 23,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //17
                {
                    label: "Continue",
                    newScene: 24,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //18
                {
                    label: "Continue",
                    newScene: 25,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //19
                {
                    label: "\"It's my fault\"",
                    newScene: 26,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"He said he was happy to be here\"",
                    newScene: 27,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 28,
                    newChoice: 20,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //20
                {
                    label: "Continue",
                    newScene: 29,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "0" 
                }
            ],
            [ //21
                {
                    label: "\"It's not your fault\"",
                    newScene: 30,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"He said he was glad to be back\"",
                    newScene: 31,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 32,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //22
                {
                    label: "Continue",
                    newScene: 33,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0" 
                }
            ],
            [ //23
                {
                    label: "Continue",
                    newScene: 11,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //24
                {
                    label: "Leave him alone",
                    newScene: 34,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Talk to Mort",
                    newScene: 35,
                    newChoice: 26,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //25
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 43,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/double pound.mp3",
                    loop: true
                }
            ],
            [ //26
                {
                    label: "\"Yes\"",
                    newScene: 16,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"No\"",
                    newScene: 17,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //27
                {
                    label: "Continue",
                    newScene: 36,
                    newChoice: 28,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //28
                {
                    label: "Continue",
                    newScene: 37,
                    newChoice: 29,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //29
                {
                    label: "Continue",
                    newScene: 60,
                    newChoice: 43,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/double pound.mp3",
                    loop: true
                }
            ],
            [ //30 (stayed in the cabin while Alicia, Ben and Mort went to the lodge)
                {
                    label: "Continue",
                    newScene: 39,
                    newChoice: 31,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //31
                {
                    label: "Grab your keys",
                    newScene: 40,
                    newChoice: 32,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //32
                {
                    label: "\"It's not your fault\"",
                    newScene: 30,
                    newChoice: 33,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                "",
                {
                    label: "\"...\"",
                    newScene: 32,
                    newChoice: 33,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //33
                {
                    label: "Continue",
                    newScene: 42,
                    newChoice: 34,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //34
                {
                    label: "Try comforting Mabel",
                    newScene: 43,
                    newChoice: 35,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Stay put",
                    newScene: 48,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //35
                {
                    label: "You have to be strong",
                    newScene: 44,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "We're going to protect you",
                    newScene: 46,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 47,
                    newChoice: 36,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
            ],
            [ //36 (links to the Alicia version of Mort's notebook sequence)
                {
                    label: "Continue",
                    newScene: 49,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //37 (saved Ben at lodge)
                {
                    label: "\"She's dead\"",
                    newScene: 51,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"...\"",
                    newScene: 52,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //38
                {
                    label: "Continue",
                    newScene: 53,
                    newChoice: 39,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //39 (goes to Sayori/Roxy grief sequence and comforting Mabel)
                {
                    label: "Grab keys",
                    newScene: 5,
                    newChoice: 4,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //40
                {
                    label: "Continue",
                    newScene: 54,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //41 (saved Ben at lodge)
                {
                    label: "\"He's dead\"",
                    newScene: 56,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"...\"",
                    newScene: 57,
                    newChoice: 38,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //42
                {
                    label: "Continue",
                    newScene: 59,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //43 (universal beginning of hiding sequence)
                {
                    label: "Continue",
                    newScene: 63,
                    newChoice: 44,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //44 - (door banging + double bang)
                {
                    label: "Continue",
                    newScene: 64,
                    newChoice: 45,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/double bang and door bang.mp3",
                    loop: true
                }
            ],
            [ //45
                {
                    label: "Continue",
                    newScene: 66,
                    newChoice: 46,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //46 (by default this goes to the hiding spots options)
                {
                    label: "Continue",
                    newScene: 69,
                    newChoice: 51,
                    newImage: 23,
                    remove: false,
                    key: "0"
                }
            ],
            [ //47
                {
                    label: "Continue",
                    newScene: 70,
                    newChoice: 48,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //48
                {
                    label: "Turn it off",
                    newScene: 71,
                    newChoice: 51,
                    newImage: 23,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Object and keep it on",
                    newScene: 72,
                    newChoice: 49,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //49
                {
                    label: "\"Yes I'm sure\" (keep the lights on)",
                    newScene: 74,
                    newChoice: 51,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"No, I'm not sure\" (turn the lights off)",
                    newScene: 75,
                    newChoice: 50,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //50
                {
                    label: "Continue",
                    newScene: 76,
                    newChoice: 51,
                    newImage: 23,
                    remove: false,
                    key: "0"
                }
            ],
            [ //51
                {
                    label: "Continue",
                    newScene: 77,
                    newChoice: 52,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //52
                {
                    label: "Under your bed",
                    newScene: 78,
                    newChoice: 53,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "In the garage",
                    newScene: 79,
                    newChoice: 53,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "In a nook",
                    newScene: 80,
                    newChoice: 53,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //53
                {
                    label: "Wait",
                    newScene: 81,
                    newChoice: 54,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //54
                {
                    label: "Wait",
                    newScene: 82,
                    newChoice: 55,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //55
                {
                    label: "Wait",
                    newScene: 83,
                    newChoice: 56,
                    newImage: 19,
                    remove: false,
                    key: "0"
                }
            ],
            [ //56
                {
                    label: "Wait",
                    newScene: 87,
                    newChoice: 57,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //57
                {
                    label: "Wait",
                    newScene: 83,
                    newChoice: 58,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //58
                {
                    label: "Wait",
                    newScene: 87,
                    newChoice: 59,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "stop"
                }
            ],
            [ //59
                {
                    label: "...",
                    newScene: 83,
                    newChoice: 60,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //60
                {
                    label: "...",
                    newScene: 84,
                    newChoice: 61,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //61
                {
                    label: "...",
                    newScene: 85,
                    newChoice: 62,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //62
                {
                    label: "Three",
                    newScene: 83,
                    newChoice: 63,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //63
                {
                    label: "Two",
                    newScene: 87,
                    newChoice: 64,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //64
                {
                    label: "One",
                    newScene: 83,
                    newChoice: 65,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //65
                {
                    label: "Open!",
                    newScene: 87,
                    newChoice: 66,
                    newImage: 23,
                    remove: false,
                    key: "0"
                }
            ],
            [ //66
                {
                    label: "...",
                    newScene: 86,
                    newChoice: 67,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //67
                {
                    label: "Continue",
                    newScene: 87,
                    newChoice: 68,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/Roxy and monster scream.mp3",
                    loop: false
                }
            ],
            [ //68
                {
                    label: "...",
                    newScene: 88,
                    newChoice: 69,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //69
                {
                    label: "...",
                    newScene: 89,
                    newChoice: 70,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //70
                {
                    label: "...",
                    newScene: 90,
                    newChoice: 71,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //71
                {
                    label: "...",
                    newScene: 83,
                    newChoice: 72,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/smack.mp3",
                    loop: false
                }
            ],
            [ //72
                {
                    label: "...",
                    newScene: 91,
                    newChoice: 73,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //73
                {
                    label: "Continue",
                    newScene: 92,
                    newChoice: 74,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //74
                {
                    label: "Continue",
                    newScene: 93,
                    newChoice: 75,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //75
                {
                    label: "Continue",
                    newScene: 94,
                    newChoice: 76,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //76
                {
                    label: "Come out",
                    newScene: 96,
                    newChoice: 78,
                    newImage: 9,
                    remove: false,
                    key: "0"
                }
            ],
            [ //77
                {
                    label: "Continue",
                    newScene: 97,
                    newChoice: 78,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //78
                {
                    label: "Continue",
                    newScene: 98,
                    newChoice: 79,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //79
                {
                    label: "Continue",
                    newScene: 99,
                    newChoice: 80,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //80
                {
                    label: "Continue",
                    newScene: 102,
                    newChoice: 81,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //81
                {
                    label: "Continue",
                    newScene: 103,
                    newChoice: 82,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //82
                {
                    label: "Continue",
                    newScene: 105,
                    newChoice: 83,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [
                {
                    label: "",

                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ]
        ]
    } else if (chapterSection == "Lodge") {
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
                    newScene: 3,
                    newChoice: 2,
                    newImage: 20,
                    remove: false,
                    key: "0"
                }
            ],
            [ //2 - change to lodge pic
                {
                    label: "Leave",
                    newScene: 4,
                    newChoice: 3,
                    newImage: 21,
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
                    label: "Go to the fire pit",
                    newScene: 6,
                    newChoice: 5,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //5
                {
                    label: "\"How did he not see it?\"",
                    newScene: 7,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Thank god for Sayori\"",
                    newScene: 8,
                    newChoice: 6,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"...\"",
                    newScene: 9,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "2"
                }
            ],
            [ //6
                {
                    label: "Continue",
                    newScene: 9,
                    newChoice: 7,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //7
                {
                    label: "\"Maybe you should tell it to the parents when they get out\"",
                    newScene: 10,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"Maybe there's something more we don't know\"",
                    newScene: 11,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "1"
                },
                {
                    label: "\"I can see why Mort's so done with his family\"",
                    newScene: 12,
                    newChoice: 8,
                    newImage: -1,
                    remove: false,
                    key: "2"
                },
                {
                    label: "\"...\"",
                    newScene: 13,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "3"
                }
            ],
            [ //8 
                {
                    label: "Continue",
                    newScene: 13,
                    newChoice: 9,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //9 - play bang sound, same as the bathroom one
                {
                    label: "Walk back to the car",
                    newScene: 14,
                    newChoice: 10,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/shutdown bang.mp3",
                    loop: false
                }
            ],
            [ //10
                {
                    label: "\"I agree\"",
                    newScene: 15,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"We should keep looking\"",
                    newScene: 16,
                    newChoice: 11,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //11
                {
                    label: "Keep looking",
                    newScene: 17,
                    newChoice: 12,
                    newImage: 15,
                    remove: false,
                    key: "0"
                }
            ],
            [ //12
                {
                    label: "Continue",
                    newScene: 18,
                    newChoice: 13,
                    newImage: 21,
                    remove: false,
                    key: "0"
                }
            ],
            [ //13
                {
                    label: "Head to the car",
                    newScene: 19,
                    newChoice: 14,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //14 - play car collision
                {
                    label: "Continue",
                    newScene: 20,
                    newChoice: 15,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/car collision.mp3",
                    loop: false
                }
            ],
            [ //15
                {
                    label: "Look",
                    newScene: 21,
                    newChoice: 16,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //16
                {
                    label: "\"Behind the car!\"",
                    newScene: 22,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "\"The fuck is that!\"",
                    newScene: 23,
                    newChoice: 17,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //17
                {
                    label: "Continue",
                    newScene: 24,
                    newChoice: 18,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //18
                {
                    label: "Search around",
                    newScene: 25,
                    newChoice: 19,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //19
                {
                    label: "Continue",
                    newScene: 26,
                    newChoice: 20,
                    newImage: 22,
                    remove: false,
                    key: "0",
                }
            ],
            [ //20
                {
                    label: "Continue",
                    newScene: 27,
                    newChoice: 21,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //21
                {
                    label: "RUN!",
                    newScene: 28,
                    newChoice: 22,
                    newImage: -1,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/monster noises.mp3",
                    loop: true
                }
            ],
            [ //22
                {
                    label: "Look",
                    newScene: 29,
                    newChoice: 23,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //23
                {
                    label: "Continue",
                    newScene: 31,
                    newChoice: 24,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //24
                {
                    label: "Continue",
                    newScene: 32,
                    newChoice: 25,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //25
                {
                    label: "Let her go and help Ben",
                    newScene: 33,
                    newChoice: 26,
                    newImage: -1,
                    remove: false,
                    key: "0"
                },
                {
                    label: "Flee with Alicia",
                    newScene: 37,
                    newChoice: 30,
                    newImage: -1,
                    remove: false,
                    key: "1"
                }
            ],
            [ //26 (save Ben sequence)
                {
                    label: "Run to the car",
                    newScene: 34,
                    newChoice: 27,
                    newImage: -1,
                    remove: false,
                    key: "0"
                }
            ],
            [ //27
                {
                    label: "Continue",
                    newScene: 35,
                    newChoice: 28,
                    newImage: 20,
                    remove: false,
                    key: "0",
                    sfx: "stop"
                }
            ],
            [ //28 
                {
                    label: "Continue",
                    newScene: 36,
                    newChoice: 29,
                    newImage: 12,
                    remove: false,
                    key: "0",
                    sfx: "door banging.mp3",
                    loop: false
                }
            ],
            [ //29 - play door banging sfx
                {
                    label: "Run in",
                    newScene: 50,
                    newChoice: 37,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Panic"
                }
            ],
            [ //30 (save Alicia sequence)
                {
                    label: "Run to the car",
                    newScene: 38,
                    newChoice: 31,
                    newImage: -1,
                    remove: false,
                    key: "0",
                }
            ],
            [ //31
                {
                    label: "Continue",
                    newScene: 39,
                    newChoice: 32,
                    newImage: 20,
                    remove: false,
                    key: "0",
                    sfx: "stop"
                }
            ],
            [ //32 - play door banging sfx
                {
                    label: "Continue",
                    newScene: 40,
                    newChoice: 33,
                    newImage: 12,
                    remove: false,
                    key: "0",
                    sfx: "/sfx/door banging.mp3",
                    loop: false
                }
            ],
            [ //33
                {
                    label: "Run in",
                    newScene: 55,
                    newChoice: 41,
                    newImage: 9,
                    remove: false,
                    key: "0",
                    newSection: "Panic"
                }
            ]
        ]
    } else {
        return[];
    }
    
}