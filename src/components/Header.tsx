import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material"
import { Link, NavLink} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Header.css"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 const Header = () => {
    const navigate = useNavigate()
    const {activeUser, logOutUser} = useShoppingCart()
    const [accountProfileOpen, setAccountProfileOpen] = useState(false)
    const handleAccountOpen = () => {
        setAccountProfileOpen(prevState => !prevState)
    }
    // console.log(activeUser);
    
    const goToSignin = () => {
        setAccountProfileOpen(false)
        navigate('/signin')
    }
    const goToRegister = () => {
        setAccountProfileOpen(false)
        navigate('/register')
    }

    const handleLogoutUser = () => {
        setAccountProfileOpen(false)
        logOutUser()
    }

    return <Box>
        <AppBar position="static" sx={{background: "#212529", padding: "0 10px 0 0"}}>
            <Toolbar sx={{display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"}}>
                
                <NavLink style={{textDecoration:"none", color:"white"}} to="/">
                    <Typography variant="h6" sx={{cursor: "pointer", display:{xs:"none", md:"block"}}}>GAME ON</Typography>
                    <Box sx={{display:{xs:"block", md:"none"}}}>
                    {/* <img loading="lazy" style={{height:"50px", aspectRatio:"1/1", objectFit:"cover"}} src="/images/GO logo png.png"/> */}
                    <LazyLoadImage className="header_logo" src="/images/GO logo png.png" effect="blur"/>
                    </Box>
                    </NavLink>
                <Box sx={{display: {xs: "none", md: "flex"},alignItems:"center", justifyContent:"space-between",gap: "20px"}}>
                    <Link style={{textDecoration:"none", color:"white"}} to="signin">
                    {!activeUser && <Typography variant="h6" sx={{fontSize:".9rem",
                    cursor: "pointer",
                     "&:hover": {color: "#f72585"}}}>Log In</Typography>}
                    </Link>
                    {activeUser && <Typography onClick={logOutUser} variant="h6" sx={{fontSize:".9rem", 
                    cursor: "pointer",
                    "&:hover": {color: "#f72585"} }}>Log Out</Typography>}
                    <Divider orientation="vertical" flexItem sx={{background: "white"}}/>
                    <Link style={{textDecoration:"none", color:"white"}} to="/register">
                    {!activeUser &&
                    <Typography variant="h6" sx={{fontSize:".9rem", 
                    cursor: "pointer",
                    "&:hover": {color: "#f72585"} }}>Register</Typography> }
                    </Link>
                    
                    
                </Box>
                {/* small navigation */}
                <Box sx={{display: {xs: "flex", md:"none"}, alignItems: "center", 
                justifyContent:"space-between", gap: "20px", position:'relative'}}>
                    {/* <Handyman sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    <Memory sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/> */}
                    {/* <Search sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/> */}
                    {/* <Link style={{textDecoration:"none"}} to="signin"> */}
                    <AccountCircle onClick={handleAccountOpen} sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    {/* </Link> */}
                    {accountProfileOpen &&
                    <div className="accountModal">
                        {activeUser &&
                        <p onClick={handleLogoutUser} style={{margin:'0', cursor:'pointer'}}>Log Out</p>}
                        {!activeUser && <p onClick={goToSignin} style={{margin:'0', cursor:'pointer'}}>Log In</p>}
                        <Divider flexItem sx={{background: "black"}}/>
                        {/* {activeUser &&
                        <p style={{margin:'0',cursor:'pointer'}}>Account</p> } */}
                        {!activeUser && <p onClick={goToRegister} style={{margin:'0',cursor:'pointer'}}>Register</p>}
                    </div> }
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    
}

export default Header