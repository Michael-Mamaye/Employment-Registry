import React from 'react'
import Employees from '../Employees'
import EmployeesToHeader from '../EmployeesToHeader'
import { MainRowGrids,MainDashboradContainer, AddButton, SideBar, BoxForTotals, RowGridBox} from '../../Styles/CompStyles'
import { getTopThreePaidEmployees,getEmployees } from '../../Actions'
import {connect} from 'react-redux'
import MainDashboardPropTypes from '../PropTypes/MainDashboardPropTypes'

const MainDashboard:React.FC<MainDashboardPropTypes>=({emp:{data,totalEmployees,totalSalary},getTopThreePaidEmployees,getEmployees})=> {
    return (
        <MainRowGrids>
            <SideBar>
                <AddButton 
                    onClick={()=>{
                        getTopThreePaidEmployees() 
                    }}>
                    Three Top Paid</AddButton><br/>

                <AddButton 
                    onClick={()=>{
                        getEmployees() 
                    }}>
                    EmployeesList</AddButton>

            </SideBar>
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
                <Employees/>
                
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
