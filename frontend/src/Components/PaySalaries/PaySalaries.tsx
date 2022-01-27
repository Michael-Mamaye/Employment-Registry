import { connect } from 'react-redux';
import React,{ChangeEvent,useEffect} from 'react'
import {getUsersByName, paySalary } from '../../Actions';
import {  DashboardGrids,AutoComplete,RowGrids, StyledP, AddButton, ConfirmationDialog2, ConfirmButton} from '../../Styles/CompStyles';
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
    const [changing, setChanging]=React.useState(false)
    const [values,setValues]=React.useState({
        salary:0,
        salaryDate:''
    })
    const [errors,setErrors]=React.useState({
        salaryErr:'',
        salaryDateErr:''
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
        if(name==='salary')
            setErrors({...errors,salaryErr:''})
        else if(name==='salaryDate')
            setErrors({...errors,salaryDateErr:''})

        setValues({...values,[name]:value})
    }
    const handleChangedPayClick=async ()=>{
        if(values.salary>0 && values.salaryDate!=='')
        {
            handlePayClick()
        }
        else{
            if(values.salary===0){
                await setErrors({...errors,salaryErr:'please enter valid salary'})
            }
            else if(values.salaryDate===''){
                await setErrors({...errors,salaryDateErr:'please enter salary Date'})
            }
        }
        
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
             {changing && 
                <ConfirmationDialog2>
                    <RowGrids>
                        <Label htmlFor='salaries'>Salary:</Label>
                        <Input 
                            type='number'
                            style={{marginLeft:'10px'}}
                            id='salaries'
                            name='salary' 
                            onChange={(e)=>handleSalaryChange(e)} 
                            value={values.salary}
                            ></Input>
                    </RowGrids>
                    {errors.salaryErr && <p style={{marginLeft:'40px',marginTop:'-4px',color:'red'}}>{errors.salaryErr}</p>}
                    <RowGrids>
                        <Label htmlFor='payment'>Salary Date:</Label>
                        <Input style={{marginLeft:'10px'}} 
                            type='date'     
                            name='salaryDate'
                            onChange={(e)=>handleSalaryChange(e)} 
                            value={values.salaryDate}
                            id='payment'></Input>
                    </RowGrids>
                    {errors.salaryDateErr && <p style={{marginLeft:'40px',marginTop:'-4px',color:'red'}}>{errors.salaryDateErr}</p>}
                    <RowGrids>
                        <ConfirmButton color='pink' 
                            onClick={async ()=>{
                                setErrors({...errors,salaryErr:'',salaryDateErr:''})
                                await setChanging(false)
                            }}>cancel</ConfirmButton>
                        <AddButton 
                           style={{marginLeft:'20px',paddingLeft:'20px',paddingRight:'20px'}}
                            onClick={()=>{
                                handleChangedPayClick()
                            }}
                            >
                            Pay</AddButton>
                       
                    </RowGrids>
                </ConfirmationDialog2>
            }
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
                    <Label htmlFor='salaries'> Salary: <span style={{marginLeft:'10px'}}></span> {filtered?filtered[0].coreSalary:''}</Label>
                </RowGrids>

                <RowGrids>
                    <Label htmlFor='payment'> Salary Date:<span style={{marginLeft:'10px'}}></span> {filtered?filtered[0].startDate?.slice(0,10):''}</Label>
                </RowGrids>
                <AddButton 
                    style={{
                        marginTop:'40px',
                        width:'100px'
                    }}
                    onClick={()=>{
                        setChanging(true)
                        handlePayClick()
                    }}
                    >
                        Change</AddButton>
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
