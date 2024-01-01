import { Box, Divider, Typography } from "@mui/material"
import { processorEnum } from "../enums/processorEnum";
import "./ProcessorProduct.css"
import { useNavigate } from "react-router-dom";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export type ProcessorProps = {
    id:string
    processorBrand:number
    name: string
    imgUrl: string
    coreClock: number
    maxClock: number
    price: number
}

export const ProcessorProduct = (props : ProcessorProps) => {
    const baseImgUrl = "/images/";
    const navigate = useNavigate()
    const {getItemQuantity, removeFromCart, increaseCartQuantity} = useShoppingCart()
    const quantity = getItemQuantity(props.id)
    return <Box sx={{display:"flex", flexDirection:"column",background: "#073b4c",
     borderRadius:"10px",
     flex:"1 1", 
    maxWidth:"300px",
     minWidth:"200px", 
    padding:"5px", cursor:"pointer", position:"relative", zIndex:"1"
    }} >
        <div onClick={()=> navigate(`/cpu/${props.id}`)} style={{overflow:"hidden", borderRadius:"10px"}}>
        {/* <img loading="lazy" className="processorImg" style={{objectFit:"cover", borderRadius:"10px", aspectRatio:"16/9"}} width="100%" src={baseImgUrl + props.imgUrl || "https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=2048x2048&w=is&k=20&c=gz1quan2pGMzCMIYUfzfxCSGgCz0asnPNu0B3rclQTI="}/> */}
        <LazyLoadImage style={{transition:"0.1s ease-out"}} className="processorImg" src={baseImgUrl + props.imgUrl?.toLowerCase()} effect="blur"/>
        </div>
        <Typography sx={{padding:"10px 0 0 0", lineHeight:"1.5rem"}} variant="h5" fontSize="1.4rem" color="white">{props.name}</Typography>
        <Typography variant="h6" fontSize=".8rem" color="white">{processorEnum[props.processorBrand].toUpperCase()}</Typography>
        <Typography variant="h6" fontSize=".9rem" color="white">CoreClock: {props.coreClock} Ghz</Typography>
        <Typography variant="h6" fontSize=".9rem" color="white">MaxClock: {props.maxClock} Ghz</Typography>
        <Divider sx={{background:"white"}}/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography variant="h6" fontSize="1.2rem" color="white">${props.price.toFixed(2)}</Typography>
        {quantity===0 &&  <AddShoppingCart onClick={()=> increaseCartQuantity(props.id)} sx={{margin:"0 10px 0 0", color:"green", position:"relative", zIndex:"2"}}/>}
        {quantity >= 1 &&  <RemoveShoppingCart onClick={()=> removeFromCart(props.id)} sx={{margin:"0 10px 0 0", color:"red",  position:"relative", zIndex:"2"}}/>}
        </div>
    </Box>
}