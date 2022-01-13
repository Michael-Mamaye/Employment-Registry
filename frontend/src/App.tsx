import MainDashboard from "./Components/Dashboard/MainDashboard";
import {Routes,Route} from 'react-router-dom'
import { MainRowGrids } from "./Styles/CompStyles";
import SideBarMenu from './Components/Dashboard/SiderBarMenu';
import TopThreeTable from "./Components/TopThree/TopThreeTable";
import EmployeeDetail from "./Components/EmployeeDetail/EmployeeDetail";
import PaySalaries from "./Components/PaySalaries/PaySalaries";

function App() {
  return (
    <MainRowGrids>
        <SideBarMenu/>
        <Routes>
            <Route path='/' element={<MainDashboard isTopThree={false}/>}/>
            <Route path='/topThreePaid' element={<TopThreeTable/>}/>
            <Route path='/employees/:id' element={<EmployeeDetail/>}/>
            <Route path='/paySalary' element={<PaySalaries/>}/>
        </Routes>
    </MainRowGrids>
  );
}

export default App;
