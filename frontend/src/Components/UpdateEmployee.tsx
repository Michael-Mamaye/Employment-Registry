import type {FormEvent} from 'react'
import React from "react";
import { EditDialog,RowGrids} from '../Styles/CompStyles'
import { Form, Input, Label,CloseButton, SubmitButton, ErrorMessage} from '../Styles/FormStyle'

interface ThePropTypes{
    handleClick:()=>void;
    currentId:string;
    toBeUpdated:any;
}


 const UpdateEmployee=({toBeUpdated,currentId,handleClick}:ThePropTypes)=> {
    const [error,setError]=React.useState(String);
    const [values,setValues]=React.useState({
        name:toBeUpdated[0].name,
        dateOfBirth:toBeUpdated[0].dateOfBirth,
        salary:toBeUpdated[0].salary,
        gender:toBeUpdated[0].gender
    })

    console.log('this is the id you want',toBeUpdated)
    const handlSubmit=(event:FormEvent<HTMLFormElement>)=>{

        event.preventDefault()
        const {firstName, lastName, birthDate, gender, salary} = event.target as typeof event.target & {
            firstName:{value:String}
            lastName:{value:String}
            birthDate:{value:String}
            gender:{value:String}
            salary:{value:Number}
        }
        
        if(firstName.value.slice()==='' || lastName.value.slice()==='' || birthDate.value.slice()==='' || gender.value.slice()==='' || salary.value.toString()==='')
        {
            setError('All Fields Are Required')
        }
        else{ 
            const values={
                name:firstName.value.concat(" "+lastName.value),
                birthDate:birthDate.value,
                gender:gender.value,
                salary:salary.value
            }
            console.log('this are the values to be added to db',values)
            
        }
    }
    const handleChange=(event:any)=>{
        const {name,value}=event.target;
        setValues({...values,[name]:value});
    }

    return (
            <EditDialog>
                <CloseButton onClick={()=>handleClick()}>back</CloseButton>
                <Form onSubmit={(event)=>handlSubmit(event)}>
                    <RowGrids>
                        <Label >Name</Label>
                        <Input name='name' value={values.name} 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} placeholder='First Name'/>  
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
                        <Input name="salary" 
                                onChange={(event)=>{
                                    setError('')
                                    handleChange(event)
                                }} value={values.salary} type='number' placeholder='Salary'/>
                    </RowGrids>
                    
                        {error && <ErrorMessage color='red'>{error}</ErrorMessage>}
                        <SubmitButton type='submit'>Update</SubmitButton>
                    
                </Form>
            </EditDialog>
    )
}

export default UpdateEmployee;