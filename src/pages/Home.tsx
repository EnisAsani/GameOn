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
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Home () {

    type GraphicCardProps = {
        id:string
        brand:number
        name: string
        imgUrl: string
        memory: number
        price: number
    }

    // type ProcessorProps = {
    //     id:number
    //     processorBrand:number
    //     name: string
    //     imgUrl: string
    //     coreClock: number
    //     maxClock: number
    //     price: number
    // }

    const { graphicsData, processorsData} = useShoppingCart()
    
    // const [graphicsApi, setGraphicsApi] = useState<GraphicCardProps[]>([])
    // const [processorsApi, setProcessorsApi] = useState<ProcessorProps[]>([])

    // const fetchGraphics = async () => {
    //    const response = await axios.get("https://localhost:7122/api/graphiccard/getall")
    // //    console.log(response.data);
    //    setGraphicsApi(response.data)
    // }

    // const fetchProcessors = async () => {
    //     const response = await axios.get("https://localhost:7122/api/processor/getall")
    //     // console.log(response.data);
    //     setProcessorsApi(response.data)
        
    // }

    // useEffect(()=> {
    //    fetchGraphics()
    //    fetchProcessors()
    // }
    //     ,[])


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
          <Box sx={{display:"flex", justifyContent:"center", 
          flexWrap:"wrap",
          alignItems:"center", 
          minHeight:"50vh",
          margin:"0 auto",
          gap:"30px",
          width:"80%"}}>
                {graphicsData?.slice(0,3).map((guide: GraphicCardProps) => (
                    <GraphicCardProduct key={guide.id} {...guide}/>
                ))}
          </Box>
          <Typography variant="h3" sx={{color:"white", textAlign:"center", fontSize:{xs: "1.5rem", sm:"2.5rem"}}}>Completed Builds
            </Typography>
            <Typography variant="h6" sx={{color:"white", textAlign:"center", padding:"15px 0"}}>We provide part selection, pricing, and compatibility guidance for<br /> 
            do-it-yourself computer builders.
            </Typography>
            <Link style={{margin:"0 auto"}} to="/cpus">
                <Button sx={{padding:"10px 20px", }} variant="contained" startIcon={<Handyman />}>
                    View All Cpus</Button>
                </Link>
          <HomeSection data={processorsData.slice(0,3) || []}/>
        </Box>
    
}
