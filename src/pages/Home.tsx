import "./Home.css"
import { Box, Button, Typography } from "@mui/material";
import { Handyman } from "@mui/icons-material";
import { Link } from "react-router-dom";
import buildGuides from "../data/buildGuides.json"
import { PcCard } from "../components/PcCard";

import { HomeSection } from "../components/HomeSection";
export function Home () {

   



    return <Box sx={{display: "flex", flexDirection:"column", 
        justifyContent:"center", 
        padding:"30px 0", background: "#212529"}}>
            <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Pick Parts. Build Your PC.<br /> 
            Compare and Share.
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/graphic-card"><Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>Start Your Build</Button></Link>
          <Box sx={{display:"flex", justifyContent:"center", 
          flexWrap:"wrap",
          alignItems:"center", 
          minHeight:"60vh",
          margin:"25px auto",
          gap:"30px",
          width:"80%"}}>
                {buildGuides.map(guide => (
                    <PcCard key={guide.id} {...guide}/>
                ))}
          </Box>
          <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Completed Builds
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/graphic-card">
                <Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>
                    View Completed Builds</Button>
                </Link>
          <HomeSection data={buildGuides}/>
        </Box>
    
}
