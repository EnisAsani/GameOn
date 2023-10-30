import { Close, Handyman, Receipt } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  } from "@mui/material"
import { Link } from "react-router-dom"




export const MobileMenu = ({isMobileMenuOpen,handleMobileOpen }:any) => {
    return <>
    <Box sx={{background: "#073b4c",
     width:"100%", height:"40vh", 
     top:"100%", left:"0", 
     zIndex:"10", 
     position:"static",
     padding:"15px",
     transition:"1s ease",
     display: {xs:isMobileMenuOpen ? "flex" : "none", md: "none" },
    //   display: isMobileMenuOpen ? "flex" : "none",
      flexDirection:"column"  }} >
        <div onClick={handleMobileOpen} style={{padding:"20px 20px 0 0"}}>
        <Close sx={{color:"white", display:"block",marginLeft:"auto", cursor:"pointer"}}/>
        </div>
        <List sx={{paddingTop:"0"}}>
        <Link to="/builder" style={{textDecoration:"none"}}>
        <ListItem sx={{color:"white"}}>
            <ListItemButton>
              <ListItemIcon>
                <Handyman sx={{color:"white"}} />
              </ListItemIcon>
              <ListItemText primary="Builds" />
            </ListItemButton>
          </ListItem>
          </Link>
            {/* <Link to="/store" style={{textDecoration:"none"}}>
          <ListItem sx={{color:"white"}}>
            <ListItemButton>
              <ListItemIcon>
                <Memory sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          </Link> */}
          <ListItem sx={{color:"white"}}>
            <ListItemButton>
              <ListItemIcon>
                <Receipt sx={{color:"white"}}/>
              </ListItemIcon>
              <ListItemText primary="Guides" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    <div  onClick={handleMobileOpen} 
    style={{position:"absolute", 
    width:"100%", top:"100%", 
    height:"100vh",left:"0",
    zIndex:"5",
    display: isMobileMenuOpen ? "block" : "none"  }}></div>

    </>
}