import { connect } from 'react-redux';
import React,{useEffect} from 'react'
import EmployeeDetailProp from './EmployeeDetailProp'
import { Thead,Tbody,Th,Td,Tr, Table } from '../../Styles/TableStyles'
import { PaginationButton,DashboardGrids, DecoratedText, EmpProfileImage,SelectButton,SearchInput} from '../../Styles/CompStyles'
import {Search} from '@styled-icons/fa-solid/Search'
import { Datum } from '../../Types/StoreTypes';
import { deleteEmployees, getEmployees } from '../../Actions';
import {useParams } from 'react-router-dom';
import Image1 from '../../assets/bussiness_g.jpeg'

const tableHeader=[
    {id:"Amount",label:'Amount'},
    {id:"SalaryDate",label:'Salary Date'},
]

const EmployeeDetail:React.FC<EmployeeDetailProp>=({emp:{data,topThreeState},getEmployees})=> {
    const param=useParams().id;
    const [filtered,setFiltered]=React.useState<Datum[]>() 
    const [pageState,setPageState]=React.useState(1)
    
    useEffect(()=>{
        getEmployees()
    },[getEmployees]) 
    
    const Items=data.filter((item)=>item._id===param);
   
    const handleSearch=(searchText:string)=>{

        searchText=searchText.toLocaleLowerCase();
        const filt=Items.filter((item)=>(
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
    const filterdList=()=>filtered?filtered:Items;
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
           
            <EmpProfileImage src={Image1} alt='profile_picture'/>
            <div>
                {
                    allData.data.map((Item)=>(
                        <div key={Item._id}>
                            <DecoratedText>{Item.name}</DecoratedText>
                            <DecoratedText>Salary<span style={{marginLeft:'50px'}}>{Item.coreSalary}</span></DecoratedText>
                            <DecoratedText>birthDate<span style={{marginLeft:'50px'}}>{Item.dateOfBirth}</span></DecoratedText>
                            <DecoratedText>gender<span style={{marginLeft:'50px'}}>{Item.gender}</span></DecoratedText>
                        </div>
                    ))
                }
                 
            <div style={{height:'50vh'}}>
            <SearchInput onChange={(e)=>handleSearch(e.target.value)}/><Search style={{ marginLeft:'-25px',marginRight:'20px',height:'20px',width:'20px'}}/>
            
            <label style={{marginLeft:'10px',fontWeight:'bold'}} htmlFor='orderBy'>Order By:</label>
            <SelectButton id='orderBy' >
                    <option value='startDate'>Start Date</option>
                    <option value='name'>Name</option>
                    <option value='salary'>Salary</option>
                    <option value='dateOfBirth'>Birth Date</option>
                    <option value='gender'>Gender</option>
            </SelectButton>            
             
                <Table>
                    <Thead>
                        <Tr>
                            {tableHeader.map((head)=>(
                                <Th key={head.id}>{head.label}</Th>
                            ))}
                        </Tr>
                    </Thead>

                    <Tbody>
                    {allData.data[0]?.salary?.map((thisData)=>(
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
