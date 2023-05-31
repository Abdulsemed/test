import React,{useEffect, useState} from "react";

const LoginForm = ({submit}) =>{
    const [values, setValues] = useState({
        username: '',
        password:'',
    })
    const [butStat, setButStat] = useState(true)
    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.id]: event.target.value,
        });
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        submit(values)
    }
    useEffect(()=>{
        if (values.username!="" && values.password!=""){
            setButStat(false)
        }
        else{
            setButStat(true)
        }
    },[values])

    return (
        
        <form onSubmit = {handleSubmit} id="demoform">
            <label htmlFor="username">username</label>
            <input id="username" onChange={handleChange} value={values.username}/>
            <label htmlFor="password">password</label>
            <input id="password" onChange={handleChange} value={values.password}/>
            <button type="submit" disabled={butStat} >submit</button>
        </form>
    )
}


export default LoginForm