import './App.css';
import MainPage from './components/main_page/MainPage';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Header from './components/main_page/Header/Header';
import List from './components/List/List';
import poetsData from './content/poetsData';
import PersonalPage from './components/PersonalPage/FullComponent/PersonalPage';
import './i18n';
import PoetsContainer from './components/main_page/PoetsContainer/PoetsContainer'

function getIndex(max){
  let date = new Date();
  return (date.getUTCDate() % (max));
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />}/> 
        <Route path="/poets_list" element={<List/>}/>
        <Route path="/day_hero__page" element={<PersonalPage currentPerson={poetsData[getIndex(poetsData.length)]}/>}/>
        <Route path="/poets/:id" element={<PoetsContainer/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
