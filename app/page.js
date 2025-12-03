export default function Home() {
  return (
    <WhiteBox />
  );
}

function WhiteBox() {
  return (
    <section className="top-0 sticky bg-gray-200 ml-45 mr-45 mt-10 min-w-1xl opacity-90 z-10 text-black">
        <div className="max-w-7xl p-10 mx-auto flex-col text-center">
          <h1 className="text-4xl font-bold m-2">That Night At Suncadia</h1>
          <p>
            Welcome to That Night At Suncadia, an interactive choose your own adventure game. The story progresses through a series of webpages like the game "The Uncle Who Works for Nintendo." Press "cast" to see information about the characters. Press "Start Game" to begin your adventure.
          </p>
          <ul className="spaced-x-4 text-medium font-bold text-2xl text-red-500 m-5">
            <li className="md:hover:underline m-4">
              <a href="/Cast">
                Cast
              </a>
            </li>
            <li className="md:hover:underline">
              <a href="/ChooseCharacter">
                Start Game
              </a>
            </li>
          </ul>
          
        </div>
      </section>
  )
}


