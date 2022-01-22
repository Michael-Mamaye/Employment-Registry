
import React from "react";
import { updateEmployees } from "../Actions";
import { EditDialog,RowGrids} from '../Styles/CompStyles'
import { Form, Input, Label,CloseButton, SubmitButton, ErrorMessage} from '../Styles/FormStyle'
import {useDispatch} from 'react-redux'
interface ThePropTypes{
    handleClick:()=>void;
    currentId:string;
    toBeUpdated:any;
}


 const UpdateEmployee=({toBeUpdated,currentId,handleClick}:ThePropTypes)=> {

    const dispatch = useDispatch()
    const [error,setError]=React.useState(String);
    const [values,setValues]=React.useState({
        name:toBeUpdated[0]?.name,
        dateOfBirth:toBeUpdated[0]?.dateOfBirth,
        coreSalary:toBeUpdated[0]?.coreSalary,
        gender:toBeUpdated[0]?.gender,
        email:toBeUpdated[0]?.email
    })

    const handlSubmit=async (event:any)=>{

        event.preventDefault()
    

        if(values.name==="" || values.dateOfBirth==='' || values.gender==='' || values.coreSalary.toString()==='')
        {
            setError('All Fields Are Required')
        }
        else{ 
            const theValues={
                name:values.name,
                dateOfBirth:values.dateOfBirth,
                coreSalary:values.coreSalary,
                salary:toBeUpdated.salary,
                gender:values.gender,
                email:values.email
            }
           await dispatch(updateEmployees(currentId,theValues))
           handleClick()
        }
    }
    const handleChange=(event:any)=>{
        const {name,value}=event.target;
        setValues({...values,[name]:value});
    }

    return (
            <EditDialog>
                <CloseButton onClick={()=>handleClick()}>back</CloseButton>
                <Form>
                    <RowGrids>
                        <Label >Name</Label>
                        <Input name='name' value={values.name} 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} placeholder='Name'/>  
                    </RowGrids>
                    <RowGrids>
                        <Label >Email</Label>
                        <Input name='email' value={values.email} 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} placeholder='Email'/>  
                    </RowGrids>
                    <RowGrids>
                        <Label>Birth Date</Label>
                        <Input name='dateOfBirth' type='date' value={values.dateOfBirth} 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} placeholder='Birth Date'/>   
                    </RowGrids>
                    <RowGrids>
                        <Label>Gender</Label>
                        <div>
                            <span><Input 
                                        onChange={(event)=>{
                                            setError('')
                                            handleChange(event)
                                        }} name='gender'type='radio' value='male'/> Male</span>
                            <span><Input 
                                        onChange={(event)=>{
                                            setError('')
                                            handleChange(event)
                                        }} name='gender'type='radio' value='female'/> Female</span>
                        </div>
                    </RowGrids>
                    <RowGrids>
                        <Label>Salary</Label>
                        <Input name="coreSalary" 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} value={values.coreSalary} type='number' placeholder='Salary'/>
                    </RowGrids>
                    
                        {error && <ErrorMessage color='red'>{error}</ErrorMessage>}
                        <SubmitButton type='submit' onClick={(event)=>handlSubmit(event)}>Update</SubmitButton>
                    
                </Form>
            </EditDialog>
    )
}

export default UpdateEmployee;