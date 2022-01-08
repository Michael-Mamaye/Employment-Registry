
import React from "react";

import { addEmployees } from "../Actions";
import { Dialog} from '../Styles/CompStyles'
import { Form, Input, Label,CloseButton, SubmitButton, ErrorMessage} from '../Styles/FormStyle'
import {useDispatch} from 'react-redux'

interface TheHandleClick{
    handleClick:()=>void;
}

export default function AddEmployee({handleClick}:TheHandleClick) {
    const dispatch= useDispatch()
    const [error,setError]=React.useState(String);
    const [values,setValues]=React.useState({
        name:'',
        dateOfBirth:'',
        salary:0,
        gender:'',
        email:''
    })
    const handleSubmit=async (event:any)=>{

        event.preventDefault()
    

        if(values.name==="" || values.dateOfBirth==='' || values.gender===''|| values.email==='' || values.salary.toString()==='')
        {
            setError('All Fields Are Required')
        }
        else{ 
            console.log('this are the values',values)
            await dispatch(addEmployees(values))
            handleClick()
        }
    }

    const handleChange=(event:any)=>{
        const {name,value}=event.target;
        setValues({...values,[name]:value});
    }

    return (
            <Dialog>
                <CloseButton onClick={()=>handleClick()}>back</CloseButton>
                <Form>
                    <Label >Name</Label>
                    <Input name='name' type='text'
                        onChange={(event)=>{
                        setError('')
                        handleChange(event)
                        }} placeholder='Name'/>
                    <Label >Email</Label>
                    <Input name='email' type='text'
                        onChange={(event)=>{
                        setError('')
                        handleChange(event)
                        }} placeholder='Email'/>
                    
                    <Label>Birth Date</Label>
                    <Input name='dateOfBirth'
                        onChange={(event)=>{
                        setError('')
                        handleChange(event)
                        }} type='date' placeholder='Birth Date'/>
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
                    
                    <Label>Salary</Label>
                    <Input name="salary" 
                        onChange={(event)=>{
                        setError('')
                        handleChange(event)
                        }} type='number' placeholder='Salary'/>
                    {error && <ErrorMessage color='red'>{error}</ErrorMessage>}
                    <SubmitButton type='submit' onClick={(event)=>handleSubmit(event)}>Submit</SubmitButton>
                </Form>
            </Dialog>
    )
}
