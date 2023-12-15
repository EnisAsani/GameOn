import { Box, Button, Divider, Typography } from "@mui/material"
import React,{useRef} from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/authService"

 const Register = () => {
    const navigate = useNavigate()
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()
    const FirstNameInput = useRef<any>()
    const LastNameInput = useRef<any>()


    const handleRegister = async () => {
        if(!emailInput.current.value || !passwordInput.current.value ||
             !FirstNameInput.current.value || !LastNameInput.current.value) {
                console.log("invalid");
             } else {
                const userData = {
                    "firstName": FirstNameInput.current.value,
                      "lastName": LastNameInput.current.value,
                      "role": "user",
                      "email": emailInput.current.value,
                      "password": passwordInput.current.value
                }
                    const apiResponse =await RegisterUser(userData)
                    console.log(apiResponse);
                    
             }
    }

//     "firstName": "string",
//   "lastName": "string",
//   "role": "string",
//   "email": "string",
//   "password": "string"



    return <React.Fragment>
    
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", height:"90vh", flexDirection:"column"}}>
        <Typography sx={{padding:"0 0 20px 0"}} color="white" variant="h3">Registration</Typography>
    <Box sx={{background:"#3D3D54", minHeight:{xs:"50vh", sm:"60vh"}, 
    width:{xs:"90%", sm:"450px"}, display:"flex", flexDirection:"column", 
    gap:"10px", alignItems:"center", padding:"0 0 25px 0"}}>
        <Typography sx={{padding:"20px 0 5px 0"}} variant="h5" color="white">Create a new account</Typography>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 20px 0"}}/>
        {/* <InputBase placeholder="Email" type="text" 
        sx={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}}/> */}
        <input style={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}} ref={FirstNameInput} type="text" placeholder="Firstname"/>
        <input style={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}} ref={LastNameInput} type="text" placeholder="Lastname"/>
        <input style={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}} ref={emailInput} type="email" placeholder="Email"/>
        <input style={{width:"80%", height:"40px",color:"white", 
        background:"#0d1321", borderRadius:"5px", 
        padding:"0 0 0 10px",
        border:"none", margin:"0 0 20px 0"}} ref={passwordInput} type="password" placeholder="Password"/>
        <Button onClick={handleRegister} sx={{width:"80%", margin:"0 0 10px 0"}} variant="contained">Register</Button>
        <Typography variant="h5" color="white">Already a member? </Typography>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 5px 0"}}/>
        <Button onClick={()=> navigate("/signin")} sx={{width:"80%"}} variant="outlined">Sign In</Button>
        
    </Box>
    </Box>
    </React.Fragment>
}

export default Register;
