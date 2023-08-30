import { useState } from "react";
import Button from '@mui/material/Button';

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e) => {

        // -- Prevent Default prevents the state to be refreshed
        e.preventDefault();
        console.log(email);
    }

    const handleRegister = () => {
    }

    return (
        <div className="auth-form-container">
            <form>
                <label for="email">Email</label>
                <input onChange={(currentValue) => { setEmail(currentValue.target.value); }} type="email" placeholder="email@example.com" id="email" name="email" />
                <label for="password">Password</label>
                <input onChange={(currentValue) => { setPass(currentValue.target.value); }} value={pass} type="password" placeholder="********" id="password" name="password" />

                <Button ariant="contained" onClick={handleSubmit}>Log In</Button>

                
            </form>
            
            <button variant="contained" onClick={() => props.onFormSwitch("register")}>Create a new account</button>
        </div>

    )
}