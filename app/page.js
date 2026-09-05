export default function Home() {
  return (
    <WhiteBox />
  );
}

function WhiteBox() {
  return (
    <section className="top-0 sticky bg-gray-200 ml-4 mr-4 mt-10 min-w-1xl opacity-90 z-10 text-black">
        <div className="max-w-7xl p-10 mx-auto flex-col text-center">
          <h1 className="text-4xl font-bold m-2">That Night At Sun Village</h1>
          <p>
            Welcome to That Night At Sun Village, an interactive choose your own adventure game. This is a demo with 2 out of 4 acts available to play through.
          </p>
          <br/>
          <p>
            Inspired by the gameplay of &quot;The Uncle Who Works for Nintendo&quot; and &quot;Until Dawn,&quot; you play as a college student in an 8-person friend group. Things are looking great at the group&apos;s third annual summer trip to Sun Village until night falls and strange things begin happening to them. Can you and all of your friends survive?
          </p> 
          <br/>
          <p>
            Press &quot;cast&quot; to see information about the characters. Before starting it is highly recommended you read through the cast page. Once you&apos;ve done that, press &quot;Start Game&quot; to begin your adventure.
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
          <p>
            <b>Disclaimer:</b> This game contains swearing and descriptions of gore. Some background images were also generated using AI.
          </p>
        </div>
      </section>
  )
}


