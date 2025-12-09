export function createChoices(changeScene) {
    return [
        [
            {
                label: "I'm coming",
                action: () => changeScene(1, 1, -1),
                key: "1"
            },
            {
                label: "Can you give me a minute?",
                action: () => changeScene(2, 1, -1),
                key: "2"
            }
        ],
        [
            {
                label: "Continue",
                action: () => changeScene(3, 2, 1),
                key: "3"
            }
        ],
        [
            {
                label: "Continue",
                action: () => changeScene(4, 3, -1),
                key: "4"
            }
        ],
        [
            {
                label: "The Kitchen",
                action: () => changeScene(5, 4, -1),
                key: "5"
            },
            {
                label: "Pepper's Room",
                action: () => changeScene(-1),
                key: "6"
            },
            {
                label: "The Bunkbed Room",
                action: () => changeScene(-1),
                key: "7"
            },
            {
                label: "The Garage",
                action: () => changeScene(-1),
                key: "8"
            },
            {
                label: "Back Porch",
                action: () => changeScene(-1),
                key: "9"
            }
        ],
        [
            {
                label: "Continue",
                action: () => changeScene(-1),
                key: "10"
            }
        ]
        
    ];
}