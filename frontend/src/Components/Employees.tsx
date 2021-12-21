import React,{useEffect} from 'react'
import { Container, Span } from '../Styles/CompStyles'
import { Thead,Tbody,Th,Td,Tr, Table } from '../Styles/TableStyles'
import UpdateEmployee from './UpdateEmployee'
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt';
import {Delete} from '@styled-icons/fluentui-system-filled/Delete';
import {connect} from 'react-redux'
import {deleteEmployees,getEmployees,updateEmployees,addEmployees} from '../Actions'
import EmployeePropType from './PropTypes/EmployeePropType'
const tableHeader=[
    {id:"name",label:'Name'},
    {id:"Birth Date",label:'Birth Date'},
    {id:"Gender",label:'Gender'},
    {id:"Salary",label:'Salary'},
    {id:"action",label:'Actions'}
]
const  Employees:React.FC<EmployeePropType>=({emp:{data},getEmployees,updateEmployees,deleteEmployees,addEmployees})=> {
    const [dialogOpener,setDialogOpener]=React.useState(false)
    const [currentId,setCurrentId]=React.useState('');
    const [toBeUpdated,setToBeUpdated]=React.useState({});

    useEffect(()=>{
        getEmployees();
    },[getEmployees])

    const handleClick=()=>{
        setDialogOpener(!dialogOpener);
    }
    const checkIfNotNull=async (checkId?:string)=>{
        if(checkId!==undefined)
        {
           let TobeBeUpdated= await data.filter((item)=>item._id===checkId);
            setToBeUpdated(TobeBeUpdated);
            await setCurrentId(checkId)
        }
       
    }
    
    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        {tableHeader.map((head)=>(
                            <Th key={head.id}>{head.label}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                   {data?.map((thisData)=>(
                       <Tr key={thisData._id}>
                           <Td>{thisData.name}</Td>
                           <Td>{thisData.dateOfBirth}</Td>
                           <Td>{thisData.gender}</Td>
                           <Td>{thisData.salary}</Td>
                           <Td>
                               <Span><EditAlt color='blue' size={20} 
                                    onClick={async ()=>{
                                        await checkIfNotNull(thisData._id)
                                        handleClick()
                                    }}/>
                               </Span> 
                               <Span><Delete color='#ff4e83' size={20}
                                    onClick={async ()=>{
                                         await checkIfNotNull(thisData._id)
                                         await deleteEmployees(currentId)
                                    }}/></Span>
                            </Td>
                   
                       </Tr>
                   ))}
                </Tbody>
            </Table>
            {dialogOpener&&<UpdateEmployee toBeUpdated={toBeUpdated} currentId={currentId} handleClick={handleClick}/>}
        </Container>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};

export default connect(mapStateToProps, {getEmployees,deleteEmployees,updateEmployees,addEmployees})(Employees);