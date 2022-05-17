import React, { useState } from "react";
// import { authService } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// facebook
// https://cwitter-b2e19.firebaseapp.com/__/auth/handler

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAcount, setNewAcount] = useState(true)
    const onChange = (e) => {
        const {target: {name, value}} = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        console.log(e.target.name)
    }
    const onSubmit = async (e) => {
       e.preventDefault();
       console.log("로그인 계정:", email, password)
       try {
           let data;
           const auth = getAuth();
            if(newAcount) {
                //계정생성
                data = await createUserWithEmailAndPassword(auth, email, password)
            } else {
                //로그인
                data = await signInWithEmailAndPassword(email,password)
            }
            console.log(data)
       }catch(error) {
           console.log(error)
       }
    };
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
                <input type="submit" value={newAcount ? "계정생성" : "로그인"}/>    
            </form>    
            <div>
                <button> Continue with Goggle</button>
                <button> Continue with FaceBook</button>
            </div>
        </div>
    );
};

export default Auth;