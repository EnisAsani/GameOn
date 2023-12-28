import axios from "axios"
import { SubmitFormData } from "../pages/Register"

// const _registerApiUrl = "https://localhost:7122/api/User/register"
const _registerApiUrl = "https://gameonapi.azurewebsites.net/api/User/register"
const _loginApiUrl = "https://gameonapi.azurewebsites.net/api/User/login"

export const RegisterUser = async (userData:SubmitFormData) => {
   const response = await axios.post(_registerApiUrl,userData)
   return response.data;
}

export const Login = async (userLogin:any) => {
    const response = await axios.post(_loginApiUrl, userLogin)
    return response.data;
}

