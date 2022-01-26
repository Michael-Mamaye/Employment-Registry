import { connect } from 'react-redux';
import React,{ChangeEvent,useEffect} from 'react'
import {getUsersByName, paySalary } from '../../Actions';
import {  DashboardGrids,AutoComplete,RowGrids, StyledP, AddButton} from '../../Styles/CompStyles';
import { Input, Label } from '../../Styles/FormStyle';
import PaySalariesProp from './PaySalariesProp';
import { Datum } from '../../Types/StoreTypes';
import {useDispatch} from 'react-redux';
const PaySalaries:React.FC<PaySalariesProp>=({emp:{namedData},getUsersByName})=> {
    const dispatch=useDispatch()
    const [filled,setFilled]=React.useState(false)
    const [fetchedData,setFetchedData]=React.useState<Datum[]>()
    const [itemId,setItemId]=React.useState<string>()
    const [filtered,setFiltered]=React.useState<Datum[]>()
    const [nameValue,setNameValue]=React.useState<string>('')
    const [values,setValues]=React.useState({
        salary:0,
        salaryDate:''
    })
    
    const handleOnChange=async (e:ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target
        
        if(!filtered) setNameValue(value)

        await getUsersByName(value)

        if(value.length>0)
        {
            setFilled(true)
        }
        else
        {
            setFilled(false);
        }
    }
    useEffect(() => {
        setFetchedData(namedData)
    }, [setFetchedData,fetchedData,filtered,namedData,itemId])
  
    const handleSalaryChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setValues({...values,[name]:value})
    }
    const handlePayClick=async ()=>{
        if(filtered){
            const id=itemId?itemId:'miki';
            console.log(filtered[0].coreSalary)
            const mk=values.salary>0?values:{
                salary:filtered[0].coreSalary,
                salaryDate:filtered[0].startDate?filtered[0].startDate:''
            }
            console.log(mk)
            await dispatch(paySalary(filtered[0],id,mk))
            
            setNameValue('')
            setValues({
                salary:0,
                salaryDate:''
            })
        }
    }
    
    return (
        <DashboardGrids>
            <div style={{marginLeft:'10vw',marginTop:'20vh'}}>
                <RowGrids>
                    <Label htmlFor='searchName'> Name: </Label>
                    <Input id='searchName'
                        autoComplete='off'
                        value={filtered?filtered[0]?.name:nameValue}
                        onClick={()=>{
                            setFiltered(undefined)
                        }}
                        onChange={(e)=>{
                            handleOnChange(e)
                        }}></Input>
                </RowGrids>

                <AutoComplete style={{display:filled?'block':'none'}}>
                    {
                        fetchedData?.map((item)=>(
                            
                                <StyledP key={item._id} onClick={async ()=>{
                                    setItemId(item._id);
                                    
                                    await setFilled(false)

                                    const theFilteredData=await fetchedData? fetchedData.filter((mik)=>mik._id===item._id):[];
                                    
                                    await setFiltered(theFilteredData)

                                }}>{item.name}</StyledP>
                        ))
                    }
                </AutoComplete>

                <RowGrids >
                    <Label htmlFor='salaries'> Salary: {filtered?filtered[0].coreSalary:''}</Label>
                    <Input 
                        type='number'
                        style={{marginLeft:'10px'}}
                        id='salaries'
                        name='salary' 
                        onChange={(e)=>handleSalaryChange(e)} 
                        value={values.salary}></Input>
                </RowGrids>

                <RowGrids>
                    <Label htmlFor='payment'> Salary Date: {filtered?filtered[0].startDate?.slice(0,10):''}</Label>
                   
                    <Input style={{marginLeft:'10px'}} 
                        type='date' 
                        name='salaryDate'
                        onChange={(e)=>handleSalaryChange(e)} 
                        id='payment'value={values.salaryDate}></Input>
              
                </RowGrids>

                <AddButton 
                style={{
                    marginTop:'40px',
                    marginLeft:'50px',
                    width:'100px'
                }}
                onClick={()=>{
                    handlePayClick()
                }}
                >
                    Pay</AddButton>

            </div>
        </DashboardGrids>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};
export default connect(mapStateToProps,{getUsersByName})(PaySalaries)
