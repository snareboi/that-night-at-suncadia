import WhiteBox from "@/app/Components/WhiteBox";
import { client } from "@/sanity/lib/client";
import Scene from "./Scene";

export default async function Home() {
  return (
    <div>
      <Scene />
    </div>
  );
}


