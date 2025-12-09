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
        
    ];
}