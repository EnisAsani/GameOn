import { AccountCircle, Handyman, Memory } from "@mui/icons-material";
import { AppBar, Box, Divider, Switch, Toolbar, Typography } from "@mui/material"
import { NavLink} from "react-router-dom";

export const Header = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
    return <Box>
        <AppBar position="static" sx={{background: "#212529", padding: "0 10px"}}>
            <Toolbar sx={{display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"}}>
                
                <NavLink style={{textDecoration:"none", color:"white"}} to="/">
                    <Typography variant="h6" sx={{cursor: "pointer"}}>GAME ON</Typography>
                    </NavLink>
                <Box sx={{display: {xs: "none", md: "flex"},alignItems:"center", justifyContent:"space-between",gap: "20px"}}>
                    <Typography variant="h6" sx={{fontSize:".9rem",
                    cursor: "pointer",
                     "&:hover": {color: "#f72585"}}}>Log In</Typography>
                    <Divider orientation="vertical" flexItem sx={{background: "white"}}/>
                    <Typography variant="h6" sx={{fontSize:".9rem", 
                    cursor: "pointer",
                    "&:hover": {color: "#f72585"} }}>Register</Typography>
                    <Switch  {...label} defaultChecked />
                </Box>
                {/* small navigation */}
                <Box sx={{display: {xs: "flex", md:"none"}, alignItems: "center", justifyContent:"space-between", gap: "20px"}}>
                    <Handyman sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    <Memory sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                    {/* <Search sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/> */}
                    <AccountCircle sx={{color:"gray", "&:hover":{color:"#073b4c"}, cursor:"pointer"}}/>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
}