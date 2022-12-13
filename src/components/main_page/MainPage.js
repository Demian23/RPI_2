import PortalDescription from "./PortalDescription/PortalDescription"
import DayHero from "./DayHero/DayHero"
import Coders from "./Coders/Coders"
import poetsData from "../../content/poetsData";

function getIndex(max){
    let date = new Date();
    return (date.getUTCDate() % (max));
  }
  
function MainPage(){
    const dinf = poetsData[getIndex(poetsData.length)];
    return(
        <div>
        <PortalDescription />
        <DayHero info={
            {img: dinf.mainPhoto, name: dinf.fullName, birthDate: dinf.birthDate,
            deathDate: dinf.deathDate, description: dinf.description}
        }/>
        <Coders />
      </div>
    )
}

export default MainPage;