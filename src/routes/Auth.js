import React, { useState } from "react";

// facebook
// https://cwitter-b2e19.firebaseapp.com/__/auth/handler

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {
        const {target: {name, value}} = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        console.log(e.target.name)
    }
    const onSubmit = (e) => {
       e.preventDefault();
       console.log("로그인 계정:", email, password)

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={onChange}
                    required/>    
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={onChange}
                    required/>    
                <input type="submit" value="Log In"/>    
            </form>    
            <div>
                <button> Continue with Goggle</button>
                <button> Continue with FaceBook</button>
            </div>
        </div>
    );
};

export default Auth;