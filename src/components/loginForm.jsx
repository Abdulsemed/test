import React,{useState} from "react";

const LoginForm = ({submit}) =>{
    const [values, setValues] = useState({
        username: '',
        password:'',
    })
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
    document.addEventListener('DOMContentLoaded', function(e) {
        const demoForm = document.getElementById('demoform');
    
        // Get the submit button element
        const submitButton = demoForm.querySelector("button")
    
        FormValidation.formValidation(demoForm,{
                fields: {
                    username:{
                        validators:{
                            notEmpty:{
                                message: "required"
                            }
                        }
                    },
                    password:{
                        validators:{
                            notEmpty:{
                                message: "required"
                            }
                        }
                    }
                },
                plugins: {
                    fieldStatus: new FormValidation.plugins.FieldStatus({
                        onStatusChanged: function(areFieldsValid) {
                            areFieldsValid
                                // Enable the submit button
                                // so user has a chance to submit the form again
                                ? submitButton.removeAttribute('disabled')
                                // Disable the submit button
                                : submitButton.setAttribute('disabled', 'disabled');
                        }
                    }),
                },
            }
        );
    });


    return (
        
        <form onSubmit = {handleSubmit} id="demoform">
            <label htmlFor="username">username</label>
            <input id="username" onChange={handleChange} value={values.username}/>
            <label htmlFor="password">password</label>
            <input id="password" onChange={handleChange} value={values.password}/>
            <button type="submit" disabled={true} >submit</button>
        </form>
    )
}


export default LoginForm