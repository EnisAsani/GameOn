import { useNavigate } from "react-router-dom";
import "./PcProduct.css"
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Pcus } from "../pages/Pcus";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Divider, Typography } from "@mui/material";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";

const PcProduct = (props: Pcus) => {
  const baseImgUrl = "/images/";
  const navigate = useNavigate()
  const {getItemQuantity, removeFromCart, increaseCartQuantity} = useShoppingCart()
  const quantity = getItemQuantity(props.id)

  return (
    <div className="pcProductCardWrapper">
      <div onClick={()=> navigate(`/pcu/${props.id}`)} style={{overflow:"hidden", borderRadius:"10px"}}>
        <LazyLoadImage style={{transition:"0.1s ease-out"}} height="100%" width="100%" className="pcProductImg" src={baseImgUrl + props.imgUrl?.toLowerCase()} effect="blur"/>
        </div>
        <Typography sx={{padding:"10px 0 0 0", lineHeight:"1.5rem"}} variant="h5" fontSize="1.4rem" color="white">{props.name}</Typography>
        <Typography variant="h6" fontSize=".8rem" color="white">GPU: {props.graphicCard.name}</Typography>
        <Typography variant="h6" fontSize=".8rem" color="white">CPU: {props.processor.name}</Typography>
        <Typography variant="h6" fontSize=".8rem" color="white">CoreClock: {props.processor.coreClock}</Typography>
        <Typography variant="h6" fontSize=".9rem" color="white">Power: {props.powerSupply}</Typography>
        <Divider sx={{background:"white"}}/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography variant="h6" fontSize="1.2rem" color="white">${props.price.toFixed(2)}</Typography>
        {quantity===0 &&  <AddShoppingCart onClick={()=> increaseCartQuantity(props.id)} sx={{margin:"0 10px 0 0", color:"green", position:"relative", zIndex:"2"}}/>}
        {quantity >= 1 &&  <RemoveShoppingCart onClick={()=> removeFromCart(props.id)} sx={{margin:"0 10px 0 0", color:"red",  position:"relative", zIndex:"2"}}/>}
        </div>
    </div>
  )
}

export default PcProduct
