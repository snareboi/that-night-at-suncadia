import WhiteBox from "@/app/Components/WhiteBox";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import Scene from "./Scene";

const builder = imageUrlBuilder(client);
export default async function Home() {
  const pictures = await getPicture();
  const pictureStyle = {
    opacity: 0.8
  }

  return (
    <div>
      <Image
        src={urlFor(pictures[0].image).auto("format").url()}
        fill={true}
        alt={pictures[0].description}
        style={pictureStyle}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" - how to properly size images?
      />

      <WhiteBox Content={toDisplay()}/>
    </div>
  );

  function toDisplay() {
    return (
      <Scene />
    )
  }
}




function urlFor(source) {
 return builder.image(source);
}


async function getPicture() {
  const query = `*[_type == "photo"] | order(id) {
    description,
    image
  }`;
  
  const picture = await client.fetch(query);
  return picture;
}


