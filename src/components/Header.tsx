import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material"
import { Link, NavLink} from "react-router-dom";

export const Header = () => {
    // const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
    return <Box>
        <AppBar position="static" sx={{background: "#212529", padding: "0 10px"}}>
            <Toolbar sx={{display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"}}>
                
                <NavLink style={{textDecoration:"none", color:"white"}} to="/">
                    <Typography variant="h6" sx={{cursor: "pointer"}}>GAME ON</Typography>
                    </NavLink>
                <Box sx={{display: {xs: "none", md: "flex"},alignItems:"center", justifyContent:"space-between",gap: "20px"}}>
                    <Link style={{textDecoration:"none", color:"white"}} to="signin">
                    <Typography variant="h6" sx={{fontSize:".9rem",
                    cursor: "pointer",
                     "&:hover": {color: "#f72585"}}}>Log In</Typography>
                    </Link>
                    <Divider orientation="vertical" flexItem sx={{background: "white"}}/>
                    <Link style={{textDecoration:"none", color:"white"}} to="/register">
                    <Typography variant="h6" sx={{fontSize:".9rem", 
                    cursor: "pointer",
                    "&:hover": {color: "#f72585"} }}>Register</Typography>
                    </Link>
                    
                </Box>
                {/* small navigation */}
                <Box sx={{display: {xs: "flex", md:"none"}, alignItems: "center", justifyContent:"space-between", gap: "20px"}}>
                    {/* <Handyman sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    <Memory sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/> */}
                    {/* <Search sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/> */}
                    <Link style={{textDecoration:"none"}} to="signin">
                    <AccountCircle sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    </Link>
                    
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
}