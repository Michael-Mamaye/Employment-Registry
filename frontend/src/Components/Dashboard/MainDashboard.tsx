import React from 'react'
import Employees from '../Employees'
import EmployeesToHeader from '../EmployeesToHeader'
import { MainRowGrids,MainDashboradContainer,BoxForTotals, RowGridBox} from '../../Styles/CompStyles'
import { getTopThreePaidEmployees,getEmployees } from '../../Actions'
import {connect} from 'react-redux'
import MainDashboardPropTypes from '../PropTypes/MainDashboardPropTypes'


const MainDashboard:React.FC<MainDashboardPropTypes>=({emp:{totalEmployees,totalSalary},isTopThree})=> {
  
    return (
        <MainRowGrids>
            <MainDashboradContainer>
                <RowGridBox>
                    <BoxForTotals>
                        Total Employees<br/>
                        {totalEmployees}
                    </BoxForTotals>
                    <BoxForTotals>
                        Total Salary<br/> 
                        {totalSalary}
                    </BoxForTotals>
                    <BoxForTotals>
                        Total Salary<br/> 
                        {totalSalary}
                    </BoxForTotals>
                </RowGridBox>
                <EmployeesToHeader/>
                <Employees isTopThree={isTopThree}/>
                
             </MainDashboradContainer>
        </MainRowGrids>
        
    )
}
const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};

export default connect(mapStateToProps, {getTopThreePaidEmployees,getEmployees})(MainDashboard);
