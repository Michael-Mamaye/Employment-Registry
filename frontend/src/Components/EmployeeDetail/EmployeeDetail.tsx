import { connect } from 'react-redux';
import React,{useEffect} from 'react'
import EmployeeDetailProp from './EmployeeDetailProp'
import { Thead,Tbody,Th,Td,Tr, Table } from '../../Styles/TableStyles'
import { PaginationButton,DashboardGrids, DecoratedText, EmpProfileImage,SearchInput, EmployeDetailRowGrids} from '../../Styles/CompStyles'
import {Search} from '@styled-icons/fa-solid/Search'
import {salType } from '../../Types/StoreTypes';
import { deleteEmployees, getEmployees } from '../../Actions';
import {useParams } from 'react-router-dom';
import Image1 from '../../assets/bussiness_g.jpeg'

const tableHeader=[
    {id:"Amount",label:'Amount'},
    {id:"SalaryDate",label:'Salary Date'},
]

const EmployeeDetail:React.FC<EmployeeDetailProp>=({emp:{data,topThreeState},getEmployees})=> {
    const param=useParams().id;
    const [filtered,setFiltered]=React.useState<salType[]>() 
    const [pageState,setPageState]=React.useState(1)
    
    useEffect(()=>{
        getEmployees()
    },[getEmployees]) 
    
    const Items=data.filter((item)=>item._id===param);
    const handleSearch=(searchText:string)=>{

        searchText=searchText.toLocaleLowerCase();
        const filt=Items[0].salary?.filter((item)=>(
            item.salary.toString().includes(searchText)||
            item.salaryDate.includes(searchText)
        ))
        setFiltered(filt)
    }
    const pagination=(toBePaged:salType[],pages:number,rows:number)=>{
        var trimStart=(pages-1)*rows;
        var trimEnd=trimStart+rows;
        var pagedData=toBePaged.slice(trimStart,trimEnd)

        var page=Math.ceil(toBePaged.length/rows)

        return{
            'data':pagedData,
            'pages':page
        }
    }
    const filterdList=()=>filtered?filtered:Items[0]?.salary?Items[0]?.salary:[];
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
            <EmployeDetailRowGrids>
                <EmpProfileImage src={Image1} alt='profile_picture'/>
            
                    {
                        Items.map((Item)=>(
                            <div key={Item._id}>
                                <DecoratedText>Name:<span style={{marginLeft:'50px'}}>{Item.name}</span></DecoratedText>
                                <DecoratedText>Salary:<span style={{marginLeft:'50px'}}>{Item.coreSalary}</span></DecoratedText>
                                <DecoratedText>birthDate:<span style={{marginLeft:'50px'}}>{Item.dateOfBirth}</span></DecoratedText>
                                <DecoratedText>gender:<span style={{marginLeft:'50px'}}>{Item.gender}</span></DecoratedText>
                            </div>
                        ))
                    }
            </EmployeDetailRowGrids>  
                <div style={{marginTop:'20px',height:'50vh',width:'60vw'}}>
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
                                <Td>{thisData.salary}</Td>
                                <Td>{thisData.salaryDate}</Td>
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>

                    <div>
                        <PaginationButton onClick={()=>{changePage("next")}}>next</PaginationButton>
                        <PaginationButton onClick={()=>{changePage("previous")}}>previous</PaginationButton>
                    </div>
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
