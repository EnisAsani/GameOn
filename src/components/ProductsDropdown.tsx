import { Memory } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const ProductsDropdown = ({isProductDropdownOpen }:any) => {
    return <Box sx={{
        background: "#073b4c",
        width:"100%", height:"40vh", 
        top:"100%", left:"0", 
        zIndex:"10", 
        position:"static",
        // display: isProductDropdownOpen ? "flex" : "none",
        display: {xs: "none", md: isProductDropdownOpen ? "flex" : "none", flexDirection:"column" },
    }}>
        {/* <div onClick={handleProductDropdown} style={{padding:"20px 20px 0 0", display:"flex", justifyContent:"end", alignItems:"center"}}>
            <Close sx={{color:"white",  cursor:"pointer"}}/>
        </div> */}
        <Box>
            <List>
                <Link style={{textDecoration:"none"}} to="cpus">
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Memory sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Cpus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            </List>
        </Box>
    </Box>
}