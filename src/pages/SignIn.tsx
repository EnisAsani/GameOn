import { Box, Button, Divider, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { Login } from "../services/authService"
import { useShoppingCart } from "../context/ShoppingCartContext"

export const SignIn = () => {
    const navigate = useNavigate()
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()
    const {logInUser} = useShoppingCart()

    const handleLogin = async() => {
        if(!emailInput.current.value || !passwordInput.current.value) {
            console.log("invalid");
        } else {
            try {
            const userLogin = {
                "userName": emailInput.current.value,
                "password": passwordInput.current.value
            }
            const apiResponse = await Login(userLogin);
            logInUser(apiResponse)
            // localStorage.setItem("user", JSON.stringify(apiResponse))
            // console.log("logged in");
            navigate('/')
            // console.log(apiResponse); 
            // console.log(apiResponse.expires);
            // console.log(Date.now() > apiResponse.expires);
            
        } 
            catch (error:any){
                console.log(error);
            }
        }
    }
    return <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", height:"90vh", flexDirection:"column"}}>
        <Typography sx={{padding:"0 0 20px 0"}} color="white" variant="h3">Your Account</Typography>
    <Box sx={{background:"#3D3D54", minHeight:{xs:"50vh", sm:"60vh"}, 
    width:{xs:"90%", sm:"450px"}, display:"flex", flexDirection:"column", 
    gap:"10px", alignItems:"center", padding:"0 0 25px 0"}}>
        <Typography sx={{padding:"20px 0 5px 0"}} variant="h5" color="white">Sign In</Typography>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 20px 0"}}/>
        {/* <InputBase ref={emailInput} placeholder="Email" type="text" 
        sx={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}}/> */}
        <input style={{width:"80%", height:"40px",color:"white", 
        padding:"0 0 0 10px",
        background:"#0d1321", borderRadius:"5px", 
        border:"none"}} ref={emailInput} type="text" placeholder="email"/>
               <input style={{width:"80%", height:"40px",color:"white", 
        background:"#0d1321", borderRadius:"5px", 
        padding:"0 0 0 10px",
        border:"none", margin:"0 0 20px 0"}} ref={passwordInput} type="password" placeholder="password"/>
        <Button onClick={handleLogin} sx={{width:"80%", margin:"0 0 10px 0"}} variant="contained">Sign In</Button>
        <Typography variant="h5" color="white">Not Registered yet ? </Typography>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 5px 0"}}/>
        <Button onClick={()=> navigate("/register")} sx={{width:"80%"}} variant="outlined">Register here</Button>
        
    </Box>
    </Box>
}