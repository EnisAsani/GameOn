import "./Home.css"
import { Box, Button, Typography } from "@mui/material";
import { Handyman } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import buildGuides from "../data/buildGuides.json"
// import { PcCard } from "../components/PcCard";
// import axios from "axios";
import { HomeSection } from "../components/HomeSection";
// import { useEffect, useState } from "react";
import { GraphicCardProduct } from "../components/GraphicCardProduct";
// import { useShoppingCart } from "../context/ShoppingCartContext";
import "../components/HomeSection.css"
import PcProduct from "../components/PcProduct";
import { Pcus } from "./Pcus";
import { useData } from "../hooks/useData";

export function Home () {

    type GraphicCardProps = {
        id:string
        brand:number
        name: string
        imgUrl: string
        memory: number
        price: number
    }

    // const { graphicsData, processorsData, pcProductsData} = useShoppingCart()

    const {graphicCards, processors, computers} = useData()

    return <Box sx={{display: "flex", flexDirection:"column", 
        justifyContent:"center", 
        padding:"30px 0", background: "#212529"}}>
            <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Pick Parts. Build Your PC.<br /> 
            Compare and Share.
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/gpus"><Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>View All Cards</Button></Link>
          {/* Graphic CARDS */}
          <Box className="productsDiv">
                {graphicCards?.slice(0,3).map((guide: GraphicCardProps) => (
                    <GraphicCardProduct key={guide.id} {...guide}/>
                ))}
          </Box>
          {/* loader */}
          {graphicCards.length ===0 && 
          <div className="loaderWrapper"><div className="loader"></div></div>}
          <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Completed Builds
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/cpus">
                <Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>
                    View All Cpus</Button>
                </Link>
                {/* processors */}
          <HomeSection data={processors.slice(0,3) || []}/>
                    {/* loader */}
          {processors.length ===0 && 
          <div className="loaderWrapper"><div className="loader"></div></div>}
    {/* Computers */}
    <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Personal Computers
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/pcus">
                <Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>
                    View All Pcs</Button>
                </Link>
    <Box className="productsDiv">
                {computers?.slice(0,3).map((guide:Pcus) => (
                    <PcProduct key={guide.id} {...guide}/>
                ))}
          </Box>
                    {/* loader */}
          {computers.length ===0 && 
          <div className="loaderWrapper"><div className="loader"></div></div>}
        </Box>
    
}
