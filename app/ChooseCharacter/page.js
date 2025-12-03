import WhiteBox from '../Components/WhiteBox';
import MainContent from './MainContent';


export default function Home() {
  return (
    <>
      <WhiteBox Content={toDisplay()}/>
      
    </>
  );
}

function toDisplay() {
  return(
    <MainContent/>
  )
}





