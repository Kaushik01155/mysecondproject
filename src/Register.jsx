import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () =>{

        const navigate = useNavigate();
    
    const[formInput,setFormInput] = useState({
        "firstname":"",
        "mobile":"",
        "email":"",
        "password":""
    });

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setFormInput(prevState=>({
            ...prevState,
            [name]:value
        }));
    };


    const handleClick = (e) =>{
        e.preventDefault();
        navigate(`/result/${formInput.firstname}/${formInput.mobile}/${formInput.email}/${formInput.password}`)
    };


    return (<>
        <h1>Register</h1>
        
        <form method="POST" onSubmit={handleClick}>
            Name <input type="text" name="firstname" value={formInput.firstname} onChange={handleInput}></input><br></br>
            Mobile <input type="tel"  name="mobile" value={formInput.mobile} onChange={handleInput}></input><br></br>
            Email <input type="email"  name="email" value={formInput.email} onChange={handleInput}></input><br></br>
            Password <input type="password" name="password" value={formInput.password} onChange={handleInput}></input><br></br>
            <button type="submit">Sign up</button>
        </form>
    </>);
}
export default Register;