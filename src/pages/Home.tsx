import {  Container } from "react-bootstrap";
import "./Home.css"
import { Box, Button, Typography } from "@mui/material";
import { Handyman } from "@mui/icons-material";
import { Link } from "react-router-dom";
import buildGuides from "../data/buildGuides.json"
import { PcCard } from "../components/PcCard";

export function Home () {

    return <Container>
        <Box sx={{display: "flex", flexDirection:"column", justifyContent:"center", padding:"30px 0",}}>
            <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Pick Parts. Build Your PC.<br /> 
            Compare and Share.
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/graphic-card"><Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>Start Your Build</Button></Link>
          <Box sx={{display:"flex", justifyContent:"space-around", 
          flexWrap:"wrap",
          alignItems:"center", 
          minHeight:"60vh",
          margin:"25px 0",
          gap:"40px"}}>
                {buildGuides.map(guide => (
                    <PcCard key={guide.id} {...guide}/>
                ))}
          </Box>
        </Box>
    </Container>
    
}
