import './LoginRegister.css';
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginRegister(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = () => {
        fetch("http://localhost:4000/api/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error_message) {
                    alert(data.error_message);
                } else {
                    alert(data.message);
                    navigate("/");
                    localStorage.setItem("_id", data.id);
                }
            })
            .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
        setUsername("");
        setPassword("");
    };
     
    return (
        <main className='login'>
            <h1 className='loginTitle'>Log into your account</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Username</label>
                <input className='logininput'
                    type='text'
                    name='username'
                    id='username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input className='logininput'
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>SIGN IN</button>
                <p className='switchlogin'>
                    Don't have an account? <Link to='/register'>Create one</Link>
                </p>
            </form>
        </main>
    );
}

export default LoginRegister;