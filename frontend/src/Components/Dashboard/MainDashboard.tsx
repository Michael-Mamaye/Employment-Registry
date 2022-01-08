import React from 'react'
import Employees from '../Employees'
import EmployeesToHeader from '../EmployeesToHeader'
import { MainRowGrids,MainDashboradContainer, AddButton } from '../../Styles/CompStyles'
function MainDashboard() {
    return (
        <MainRowGrids>
            <div>
                <AddButton>Top Three</AddButton><br/>
                <AddButton>EmployeesList</AddButton>
            </div>
            <MainDashboradContainer>
                <EmployeesToHeader/>
                <Employees/>
             </MainDashboradContainer>
        </MainRowGrids>
        
    )
}

export default MainDashboard
