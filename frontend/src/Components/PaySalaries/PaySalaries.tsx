import { connect } from 'react-redux';
import React,{ChangeEvent,useEffect} from 'react'
import {getUsersByName } from '../../Actions';
import {  DashboardGrids,AutoComplete,RowGrids, StyledP} from '../../Styles/CompStyles';
import { Input, Label } from '../../Styles/FormStyle';
import PaySalariesProp from './PaySalariesProp';
import { Datum } from '../../Types/StoreTypes';

const EmployeeDetail:React.FC<PaySalariesProp>=({emp:{namedData},getUsersByName})=> {
    
    const [filled,setFilled]=React.useState(false)
    const [fetchedData,setFetchedData]=React.useState<Datum[]>()
    const [itemId,setItemId]=React.useState<string>()
    const [filtered,setFiltered]=React.useState<Datum[]>()
    const [nameValue,setNameValue]=React.useState<string>()
  
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
    }, [setFetchedData,fetchedData,namedData,itemId])
  
    

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
                    <Label htmlFor='salaries'> Salary: </Label>
                    <Input disabled={false} id='salaries'value={filtered?filtered[0]?.salary.salary:''}></Input>
                </RowGrids>
                <RowGrids>
                    <Label htmlFor='payment'> start Date: </Label>
                    <Input disabled={false} id='payment'value={filtered?filtered[0]?.startDate:''}></Input>
                </RowGrids>

            </div>
        </DashboardGrids>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};
export default connect(mapStateToProps,{getUsersByName})(EmployeeDetail)
