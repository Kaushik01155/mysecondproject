import { useParams } from "react-router-dom";

 const Result = () =>{

    const {fname,mobile,password,email} = useParams();

    return(<>
    
    <h1>Result</h1>
    <h2>{fname}</h2>
    <h2>{mobile}</h2>
    <h2>{email}</h2>
    <h2>{password}</h2>

    </>)
 }
 export default Result;