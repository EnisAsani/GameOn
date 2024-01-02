import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { ProcessorProduct } from "../components/ProcessorProduct";
import { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Divider, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { processorEnum } from "../enums/processorEnum";
import './Cpu.css'

export const Cpu = () => {
    const {cpuId} = useParams()
    const { processorsData} = useShoppingCart()
    const foundCpu = processorsData.find(item => item.id === cpuId)
    const baseImgUrl = "/images/";
    const {getItemQuantity, removeFromCart, increaseCartQuantity} = useShoppingCart()
    const pcId = foundCpu?.id || ''
    const quantity = getItemQuantity(foundCpu?.id || '')

    const similarProducts = useMemo(()=> processorsData.slice(0,5),[processorsData]) ;


    return (
        <div className="prcWrapper">
        <div className="prcWrapper_productImg">
          <div style={{overflow:'hidden'}}>
        <LazyLoadImage style={{transition:"0.1s ease-out"}} width='100%' src={baseImgUrl + foundCpu?.imgUrl?.toLowerCase()} effect="blur"/>
        </div>
        <div className="prcWrapper_productImg_info">
        {quantity===0 &&  <Button onClick={()=> increaseCartQuantity(pcId)} variant="contained">Add</Button>}
        {quantity >= 1 &&  <Button onClick={()=> removeFromCart(pcId)} variant="contained" color="error">Remove</Button>} 
          <Button variant="contained" color="success">Buy</Button>
        </div>
        <div className="user_ratings_prc">
          <Typography variant="h6" fontSize='1rem' color='white'>User ratings</Typography>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Typography variant="h6" fontSize='.7rem' color='white'>129 Ratings (4.7 Average)</Typography>
        </div>
        </div>

        {/* specifications */}
        <div className="prcWrapper_specs">
        <Typography variant="h6" fontSize='1.3rem' fontWeight='600' color='white'>Specifications</Typography>
        <Divider sx={{background:'white', width:'80%', margin:'10px 0'}}/>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>{foundCpu?.name}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>{(processorEnum[foundCpu?.processorBrand || 0]).toUpperCase()}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>CoreClock: {foundCpu?.coreClock} Ghz</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>MaxClock: {foundCpu?.maxClock} Ghz</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>CoreClock: {foundCpu?.coreClock}Ghz</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>MaxClock: {foundCpu?.maxClock}Ghz</Typography>
        <Typography variant="h6" fontSize="1rem" fontWeight='600' color="white">Price: ${foundCpu?.price.toFixed(2)}</Typography>

        {/* similar products */}
        <div className="similar_products_prc">
        <Typography variant="h6" fontSize='1.3rem' fontWeight='600' color='white'>Similar Products</Typography>
        <Divider sx={{background:'white', width:'80%', margin:'10px 0'}}/>
        <div className="similar_products_prcs">
        {similarProducts.map(prod => (
          <ProcessorProduct {...prod} key={prod.id}/>
        ))}
        </div>
        </div>
        </div>
    </div>
    )
    // <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    // padding:"50px 0", background:"#212529", height:"100vh"}}>
    // {foundCpu && <ProcessorProduct {...foundCpu}/>}
    // {!foundCpu && <h3>Not found</h3>}
    // </div>
}