import React from 'react'
import { MainRowGrids,ProfileImage, SideBarMenus,ProfileShower, SideBar} from '../../Styles/CompStyles'
import { getTopThreePaidEmployees,getEmployees } from '../../Actions'
import {connect} from 'react-redux'

import { useNavigate } from 'react-router-dom';
import SideBarMenuProps from '../PropTypes/sideBarMenuProps';

const SideBarMenu:React.FC<SideBarMenuProps>=()=> {
   const navigate=useNavigate();
  

    return (
        <MainRowGrids>
            <SideBar>
                <ProfileShower>
                    <ProfileImage/>
                    <p>Michael Mamaye</p>
                </ProfileShower>

                <SideBarMenus 
                    onClick={()=>{
                        navigate('/') 
                    }}>
                    All Employees</SideBarMenus>

                <SideBarMenus 
                    onClick={()=>{
                        navigate('/topThreePaid')
                    }}
                    >
                    Three Top Paid</SideBarMenus><br/>
                
                

            </SideBar>
            
        </MainRowGrids>
        
    )
}
const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};

export default connect(mapStateToProps, {getTopThreePaidEmployees,getEmployees})(SideBarMenu);
