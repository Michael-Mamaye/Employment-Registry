import { connect } from 'react-redux';
import React,{useEffect} from 'react'
import EmployeeDetailProp from './EmployeeDetailProp'
import { deleteEmployees, getEmployees } from '../../Actions';
import {useParams } from 'react-router-dom';
import { ConfirmationDialog, ConfirmationTitle, ConfirmButton, DashboardGrids, DecoratedText, DeleteButton,EmpProfileImage, RowGrids } from '../../Styles/CompStyles';
import Image1 from '../../assets/bussiness_g.jpeg'
import { useNavigate } from 'react-router-dom';
const EmployeeDetail:React.FC<EmployeeDetailProp>=({emp:{data},getEmployees})=> {
    const param=useParams().id;
    const [opener,setOpener]=React.useState(false)
    const navigate=useNavigate()
    useEffect(()=>{
        getEmployees()
    },[getEmployees]) 
    
    const Items=data.filter((item)=>item._id===param);
    const theId=Items[0]?._id;
       
    return (
        <DashboardGrids>
            {opener && 
                <ConfirmationDialog>
                    <ConfirmationTitle>are you sure you want to delete ?</ConfirmationTitle>
                    <RowGrids>
                        <ConfirmButton color='lightblue'
                            onClick={async ()=>{
                                await deleteEmployees(theId?theId:'k')
                                setOpener(false)
                                navigate('/')

                            }}>yes</ConfirmButton>
                        <ConfirmButton color='pink' 
                            onClick={async ()=>{
                                await setOpener(false)
                            }}>cancel</ConfirmButton>
                    </RowGrids>
                </ConfirmationDialog>
            }
            <EmpProfileImage src={Image1} alt='profile_picture'/>
            <div>
                {
                    Items.map((Item)=>(
                        <div key={Item._id}>
                            <DecoratedText>{Item.name}</DecoratedText>
                            <DecoratedText>Salary<span style={{marginLeft:'50px'}}>{Item.salary.salary}</span></DecoratedText>
                            <DecoratedText>birthDate<span style={{marginLeft:'50px'}}>{Item.dateOfBirth}</span></DecoratedText>
                            <DecoratedText>gender<span style={{marginLeft:'50px'}}>{Item.gender}</span></DecoratedText>
                        </div>
                    ))
                }
                <DeleteButton
                    onClick={
                        ()=>setOpener(true)
                    }>
                        delete
                </DeleteButton>
            </div>
        </DashboardGrids>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};
export default connect(mapStateToProps,{deleteEmployees,getEmployees})(EmployeeDetail)
