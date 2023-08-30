import { useState } from "react";
import Button from '@mui/material/Button';

export const Register = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    

    const handleSubmit = (e) => {

        // -- Prevent Default prevents the state to be refreshed
        e.preventDefault();
        console.log(email);
    }

    const handleRegister = () => {
    }

    return (
        <div className="auth-form-container">
            <>Register</>
            <form>

                <label for="name">Full Name</label>
                <input onChange={(currentValue) => { setName(currentValue.target.value); }} value={name} type="name" placeholder="Full Name" id="name" name="name" />

                <label for="email">Email</label>
                <input onChange={(currentValue) => { setEmail(currentValue.target.value); }} value={email} type="email" placeholder="email@example.com" id="email" name="email" />

                <label for="password">Password</label>
                <input onChange={(currentValue) => { setPass(currentValue.target.value); }} value={pass} type="password" placeholder="********" id="password" name="password" />

                

                <button onClick={handleSubmit}>Log In</button>
            </form>
            <button variant="text" onClick={() => props.onFormSwitch("login")}>Already have an account? Log In</button>
        </div>

    )
}