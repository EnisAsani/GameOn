import { Box, Button, Divider, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/authService"
import {z, ZodType} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import './Register.css'

export type FormData = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type SubmitFormData = {
    "firstName": string
    "lastName": string
    "email": string
    "role": string
    "password": string
}

 const Register = () => {
    const navigate = useNavigate()
    // const emailInput = useRef<any>()
    // const passwordInput = useRef<any>()
    // const FirstNameInput = useRef<any>()
    // const LastNameInput = useRef<any>()

    const schema:ZodType<FormData> = z.object({
        firstName: z.string().min(1,{message:'Field required'}),
        lastName: z.string().min(1,{message:'Field required'}),
        email: z.string().email({message: "Please enter a valid Email"}),
        password: z.string().min(6,{message:'Please enter a password longer than 6 characters'}).
        max(32,{message:'Please do not enter more than 32 characters'})
    })

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)})

    const handleSubmitData = async (data:FormData)=> {
        console.log(data);
        const userData = {
            "firstName": data.firstName,
              "lastName": data.lastName,
              "role": "user",
              "email": data.email,
              "password": data.password
        }
        const apiResponse =await RegisterUser(userData)
        if(apiResponse.toLowerCase() === 'user created'){
                        navigate('/signin')
                    }else {
                        console.log("something went wrong");
                    }
    }
    return <React.Fragment>
    
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center", minHeight:"90vh", flexDirection:"column"}}>
        <Typography sx={{padding:"30px 0 25px 0"}} color="white" variant="h3">Registration</Typography>
    <Box sx={{background:"#3D3D54", minHeight:{xs:"50vh", sm:"60vh"}, 
    width:{xs:"90%", sm:"450px"}, display:"flex", flexDirection:"column", 
    gap:"10px", alignItems:"center", padding:"0 0 25px 0"}}>
        <Typography sx={{padding:"20px 0 5px 0"}} variant="h5" color="white">Create a new account</Typography>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 20px 0"}}/>
        <form onSubmit={handleSubmit(handleSubmitData)} >
        <input type="text" placeholder="Firstname" {...register('firstName')}/>
        {errors.firstName &&  <p>{errors.firstName?.message}</p>}
        <input type="text" placeholder="Lastname" {...register('lastName')}/>
        {errors.lastName &&  <p>{errors.lastName?.message}</p>}
        <input type="text" placeholder="Email" {...register('email')}/>
        {errors.email &&  <p>{errors.email?.message}</p>}
        <input type="password" placeholder="Password" {...register('password')}/>
        {errors.password &&  <p>{errors.password?.message}</p>}
        <Button type="submit" sx={{width:"80%", margin:"0 0 10px 0"}} variant="contained">Register</Button>
        <Typography variant="h5" color="white">Already a member? </Typography>
        </form>
        <Divider sx={{background:"white", width:"80%", margin:"0 0 5px 0"}}/>
        <Button onClick={()=> navigate("/signin")} sx={{width:"80%"}} variant="outlined">Sign In</Button>
        
    </Box>
    </Box>
    </React.Fragment>
}

export default Register;
