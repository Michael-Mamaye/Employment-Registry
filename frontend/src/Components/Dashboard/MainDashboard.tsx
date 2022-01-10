import React from 'react'
import Employees from '../Employees'
import EmployeesToHeader from '../EmployeesToHeader'
import { MainRowGrids,MainDashboradContainer,ProfileImage, SideBarMenus,ProfileShower, SideBar, BoxForTotals, RowGridBox} from '../../Styles/CompStyles'
import { getTopThreePaidEmployees,getEmployees } from '../../Actions'
import {connect} from 'react-redux'
import MainDashboardPropTypes from '../PropTypes/MainDashboardPropTypes'
const MainDashboard:React.FC<MainDashboardPropTypes>=({emp:{data,totalEmployees,totalSalary},getTopThreePaidEmployees,getEmployees})=> {
   
    return (
        <MainRowGrids>
            <SideBar>
                <ProfileShower>
                    <ProfileImage/>
                    <p>Michael Mamaye</p>
                </ProfileShower>
                <SideBarMenus 
                    onClick={()=>{
                        getTopThreePaidEmployees() 
                    }}>
                    Three Top Paid</SideBarMenus><br/>
                
                <SideBarMenus 
                    onClick={()=>{
                        getEmployees('startDate',1) 
                    }}>
                    All Employees</SideBarMenus>

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
