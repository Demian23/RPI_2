import { useParams } from "react-router-dom";
import poetsData from "../../../content/poetsData";
import PersonalPage from "../../PersonalPage/FullComponent/PersonalPage";

function PoetsContainer(props) {
  const { id } = useParams();
  const poet = poetsData.find((poet) => {
    return poet.id === +id;
  });
  return <PersonalPage currentPerson={poet} />;
}

export default PoetsContainer;
