import MainDashboard from "./Components/Dashboard/MainDashboard";
import {Routes,Route} from 'react-router-dom'
import { MainRowGrids } from "./Styles/CompStyles";
import SideBarMenu from './Components/Dashboard/SiderBarMenu';
function App() {
  return (
    <MainRowGrids>
        <SideBarMenu/>
        <Routes>
            <Route path='/' element={<MainDashboard isTopThree={false}/>}/>
            <Route path='/topThreePaid' element={<MainDashboard isTopThree={true}/>}/>
        </Routes>
    </MainRowGrids>
  );
}

export default App;
