import { Box, Divider, Typography } from "@mui/material"
import UnstyledSelectControlled from "../components/ControlledSelect";
import { Search } from "@mui/icons-material";
import { InputBase } from '@mui/material';

export const GraphicCard = () => {
    const productsCount:number = 56;
    return <Box>
        <Typography variant="h4" sx={{textAlign: "center",
         background: "#495057",
         fontWeight:"600",
         display: "flex",
         justifyContent:"center",
         alignItems:"center",
         height: "95px",
         color:"white",
          width: "100%"}}>Choose a Video Card</Typography>
        <Box sx={{width:"90%", margin: "0 auto", 
        display:"flex", alignItems:"center", 
        justifyContent:"space-between",
        color:"white",
        fontWeight:"100"}}>
            <Typography variant="h6">{productsCount} Products</Typography>
            <Box sx={{display:"flex", alignItems: "center", gap:"10px"}}>
            <Typography variant="h6">Sort By</Typography>
            <UnstyledSelectControlled></UnstyledSelectControlled>
            </Box>
            <Box sx={{display:"flex", alignItems: "center", gap:"10px", padding:"20px 0"}}>
                <Search sx={{cursor:"pointer"}}/>
                <InputBase 
                sx={{border: "none",
                padding:"0 0 0 10px",
                color:"white",
                    borderRadius: "5px", background:"#0d1321"}}
                type="text" placeholder="Video Cards"/>
            </Box>
        </Box>
        <Divider sx={{background:"white", width:"90%", margin:"0 auto"}}/>
    </Box>
}