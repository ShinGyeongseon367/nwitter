import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value);
        } else if( name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
    <div>
        <form>
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
            <input type="submit" value="Log In" />
        </form>
      
        <div>
            <button>Continue with Google</button>
        </div>
    </div>
    )
}

export default Auth;