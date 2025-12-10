export function createChoices() {
    return [
        [
            {
                label: "\"I'm coming\"",
                newScene: 1,
                newChoice: 1,
                newPicture: -1,
                key: "1"
            },
            {
                label: "\"Can you give me a minute?\"",
                newScene: 2,
                newChoice: 1,
                newPicture: -1,
                key: "2"
            }
        ],
        [
            {
                label: "Continue",
                newScene: 3,
                newChoice: 2,
                newImage: 1,
                key: "3"
            }
        ],
        [
            {
                label: "Continue",
                newScene: 4,
                newChoice: 3,
                newImage: -1,
                key: "4"
            }
        ],

        //intro exploration
        [
            {
                label: "The Kitchen",
                newScene: 5,
                newChoice: 4,
                newImage: -1,
                key: "5"
            },
            {
                label: "Pepper's Room",
                newScene: 14,
                newChoice: 10,
                newImage: 2,
                key: "6"
            },
            {
                label: "The Bunkbed Room",
                key: "7"
            },
            {
                label: "The Garage",
                key: "8"
            },
            {
                label: "Back Porch",
                key: "9"
            }
        ],

        //Kitchen sequence
        [
            {
                label: "Continue",
                newScene: 6,
                newChoice: 5,
                newImage: -1,
                key: "10"
            }
        ],
        [
            {
                label: "Offer Help",
                newScene: 7,
                newChoice: 6,
                newImage: -1,
                key: "11"
            },
            {
                label: "Leave",
                newScene: 4,
                newChoice: 3,
                newImage: -1,
                key: "12"
            }
        ],
        [
            {
               label: "Continue",
               newScene: 8,
               newChoice: 7,
               newImage: -1,
               key: "13"
            }
        ],
        [
            {
                label: "\"Oh 100% yeah!\"",
                newScene: 9,
                newChoice: 8,
                newImage: -1,
                key: "14"
            },
            {
                label: "\"What kind?\"",
                newScene: 10,
                newChoice: 8,
                newImage: -1,
                key: "15"
            },
            {
                label: "\"We had that last year.\"",
                newScene: 11,
                newChoice: 8,
                newImage: -1,
                key: "16"
            }
        ],
        [
            {
                label: "\"Why not take a break?\"",
                newScene: 12,
                newChoice: 9,
                newImage: -1,
                key: "17"
            },
            {
                label: "\"Have fun with that\"",
                newScene: 13,
                newChoice: 9,
                newImage: -1,
                key: "18"
            }
        ],
        [
            {
                label: "Continue",
                newScene: 4,
                newChoice: 3,
                newImage: -1,
                key: "19"
            }
        ],

        //Pepper's room sequence
        [
            {
                label: "Continue",
                newScene: 15,
                newChoice: 11,
                newImage: 2,
                key: "20"
            }
        ]


        
    ];
}