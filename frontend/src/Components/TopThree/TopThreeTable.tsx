import React,{useEffect} from 'react'
import {  DashboardGrids, PaginationButton, Span } from '../../Styles/CompStyles'
import { Thead,Tbody,Th,Td,Tr, Table } from '../../Styles/TableStyles'
import UpdateEmployee from '../UpdateEmployee'
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt';
import {Delete} from '@styled-icons/fluentui-system-filled/Delete';
import {connect} from 'react-redux'
import {deleteEmployees,setUserStates,getTopThreePaidEmployees} from '../../Actions'
import { 
        ConfirmationDialog,ConfirmButton,RowGrids,
         ConfirmationTitle,SearchInput,
        } from '../../Styles/CompStyles'

import {Search} from '@styled-icons/fa-solid/Search'
import { Datum } from '../../Types/StoreTypes';
import TopThreeTableProp from './TopThreeTableProp';

const tableHeader=[
    {id:"name",label:'Name'},
    {id:"email",label:'Email'},
    {id:"Birth Date",label:'Birth Date'},
    {id:"Gender",label:'Gender'},
    {id:"Salary",label:'Salary'},
    {id:"action",label:'Actions'}
]
const  TopThreeTable:React.FC<TopThreeTableProp>=({emp:{topThree,topThreeState,employeesState},setUserStates,getTopThreePaidEmployees,deleteEmployees})=> {
    const [dialogOpener,setDialogOpener]=React.useState(false)
    const [currentId,setCurrentId]=React.useState('');
    const [toBeUpdated,setToBeUpdated]=React.useState({});
    const [opener,setOpener]=React.useState(false)
    const [filtered,setFiltered]=React.useState<Datum[]>() 
    
    const [pageState,setPageState]=React.useState(1)
    
    
    useEffect(()=>{
        
        
        getTopThreePaidEmployees('startDate',1);
        //getting all employees

    },[getTopThreePaidEmployees])

    const handleClick=()=>{
        setDialogOpener(!dialogOpener);
    }
    const checkIfNotNull=async (checkId?:string)=>{
        if(checkId!==undefined)
        {
           let TobeBeUpdated= await topThree.filter((item)=>item._id===checkId);
            setToBeUpdated(TobeBeUpdated);
            await setCurrentId(checkId)
        }
       
    }
    const toDeleteTheRow=async (checkId?:string)=>{
        if(checkId!==undefined)
        {
            await setCurrentId(checkId)
            await setOpener(!opener)
            
        }
    }
    const handleSearch=(searchText:string)=>{

        searchText=searchText.toLocaleLowerCase();
        setPageState(1)
        const filt=topThree.filter((item)=>(
            item.name.toLocaleLowerCase().includes(searchText)||
            item.coreSalary.toString().includes(searchText)||
            item.dateOfBirth.toLocaleLowerCase().includes(searchText)||
            item.email.toLocaleLowerCase().includes(searchText)||
            item.gender.toLocaleLowerCase().includes(searchText)
        ))
        setFiltered(filt)
    }
   
    const pagination=(toBePaged:Datum[],pages:number,rows:number)=>{
        var trimStart=(pages-1)*rows;
        var trimEnd=trimStart+rows;
        var pagedData=toBePaged.slice(trimStart,trimEnd)

        var page=Math.ceil(toBePaged.length/rows)

        return{
            'data':pagedData,
            'pages':page
        }
    }
    const filterdList=()=>filtered?filtered:topThree;
    var state={
        'data':filterdList(),
        'page':pageState,
        'rows':5,
    }
    const changePage=(changePages:string)=>{
        if(changePages==="next")
        {
            if(pageState<(filterdList().length/state.rows))
            setPageState(pageState+1)
        }
        else{
            if(pageState>1)
                setPageState(pageState-1)
        }
    }
    var allData=pagination(state.data,state.page,state.rows);
    
    return (
        <DashboardGrids>
            {opener && 
                <ConfirmationDialog>
                    <ConfirmationTitle>are you sure you want to delete ?</ConfirmationTitle>
                    <RowGrids>
                        <ConfirmButton color='lightblue'
                            onClick={async ()=>{
                                await deleteEmployees(currentId)
                                setOpener(false)
                            }}>yes</ConfirmButton>
                        <ConfirmButton color='pink' 
                            onClick={async ()=>{
                                await setOpener(false)
                            }}>cancel</ConfirmButton>
                    </RowGrids>
                </ConfirmationDialog>
            }
            <div style={{height:'50vh'}}>
            <SearchInput onChange={(e)=>handleSearch(e.target.value)}/><Search style={{ marginLeft:'-25px',marginRight:'20px',height:'20px',width:'20px'}}/>
           
                <Table>
                    <Thead>
                        <Tr>
                            {tableHeader.map((head)=>(
                                <Th key={head.id}>{head.label}</Th>
                            ))}
                        </Tr>
                    </Thead>

                    <Tbody>
                    {allData.data.map((thisData)=>(
                        <Tr key={thisData._id}>
                            <Td>{thisData.name}</Td>
                            <Td>{thisData.email}</Td>
                            <Td>{thisData.dateOfBirth}</Td>
                            <Td>{thisData.gender}</Td>
                            <Td>{thisData.coreSalary}</Td>
                           
                            <Td>
                                <Span><EditAlt color='blue' size={20} 
                                        onClick={async ()=>{
                                            await checkIfNotNull(thisData._id)
                                            handleClick()
                                        }}/>
                                </Span> 
                                <Span><Delete color='#ff4e83' size={20}
                                        onClick={async ()=>{
                                            await toDeleteTheRow(thisData._id)
                                        }}/></Span>
                            </Td>
                    
                        </Tr>
                    ))}
                    </Tbody>
                </Table>

                <div>
                    <PaginationButton onClick={()=>{changePage("next")}}>next</PaginationButton>
                    <PaginationButton onClick={()=>{changePage("previous")}}>previous</PaginationButton>
                </div>
            </div>
            

            {dialogOpener&&<UpdateEmployee toBeUpdated={toBeUpdated} currentId={currentId} handleClick={handleClick}/>}
        
        </DashboardGrids>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};

export default connect(mapStateToProps, {setUserStates,getTopThreePaidEmployees,deleteEmployees})(TopThreeTable);