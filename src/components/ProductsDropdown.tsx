import { BuildCircle, Memory } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const ProductsDropdown = ({isProductDropdownOpen, handleProductDropdown }:any) => {


    return <Box sx={{
        background: "#073b4c",
        width:"100%", height:"40vh", 
        top:"100%", left:"0", 
        zIndex:"10", 
        position:"static",
        // display: isProductDropdownOpen ? "flex" : "none",
        display: {xs: "none", md: isProductDropdownOpen ? "flex" : "none", flexDirection:"column" },
    }}>
        <Box>
            <List>
                <Link style={{textDecoration:"none"}} to="cpus" onClick={handleProductDropdown}>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Memory sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Cpus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            <Link style={{textDecoration:"none"}} to="gpus" onClick={handleProductDropdown}>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <BuildCircle sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Gpus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            </List>
        </Box>
    </Box>
}