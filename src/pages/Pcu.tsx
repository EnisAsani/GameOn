import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import "./Pcu.css"
// import PcProduct from "../components/PcProduct"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button, Divider, Typography } from "@mui/material"
import { Star } from "@mui/icons-material"

const Pcu = () => {
    const {pcuId} = useParams()
    const {pcProductsData} = useShoppingCart()
    const foundPcu = pcProductsData.find(item => item.id === pcuId)
    const baseImgUrl = "/images/";
    const {getItemQuantity, removeFromCart, increaseCartQuantity} = useShoppingCart()
    const pcId = foundPcu?.id || ''
    const quantity = getItemQuantity(foundPcu?.id || '')
  return (
    <div className="pcuWrapper">
        <div className="pcuWrapper_productImg">
          <div style={{overflow:'hidden'}}>
        <LazyLoadImage style={{transition:"0.1s ease-out"}} width='100%' src={baseImgUrl + foundPcu?.imgUrl?.toLowerCase()} effect="blur"/>
        </div>
        <div className="pcuWrapper_productImg_info">
        {quantity===0 &&  <Button onClick={()=> increaseCartQuantity(pcId)} variant="contained">Add</Button>}
        {quantity >= 1 &&  <Button onClick={()=> removeFromCart(pcId)} variant="contained" color="error">Remove</Button>} 
          <Button variant="contained" color="success">Buy</Button>
        </div>
        <div className="user_ratings">
          <Typography variant="h6" fontSize='1rem' color='white'>User ratings</Typography>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Typography variant="h6" fontSize='.7rem' color='white'>129 Ratings (4.7 Average)</Typography>
        </div>
        </div>

        {/* specifications */}
        <div className="pcuWrapper_specs">
        <Typography variant="h6" fontSize='1.3rem' fontWeight='600' color='white'>Specifications</Typography>
        <Divider sx={{background:'white', width:'80%', margin:'10px 0'}}/>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>{foundPcu?.name}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>GPU: {foundPcu?.graphicCard.name}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>Memory: {foundPcu?.graphicCard.memory} GB</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>CPU: {foundPcu?.processor.name}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>CoreClock: {foundPcu?.processor.coreClock}Ghz</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>MaxClock: {foundPcu?.processor.maxClock}Ghz</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>RAM: {foundPcu?.ram}Ghz</Typography>
        <Typography variant="h6" fontSize="1rem" fontWeight='600' color="white">Power: {foundPcu?.powerSupply}</Typography>
        <Typography variant="h6" fontSize="1rem" fontWeight='600' color="white">Price: ${foundPcu?.price.toFixed(2)}</Typography>
        </div>
    </div>

    // <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    // padding:"50px 0", background:"#212529", height:"100vh"}}>
    // {foundPcu && <PcProduct {...foundPcu}/>}
    // {!foundPcu && <h3>Not found</h3>}
    // </div>
  )
}

export default Pcu
