import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { GraphicCardProduct } from "../components/GraphicCardProduct"
import { useMemo } from "react"
import { Button, Divider, Typography } from "@mui/material"
import { Star } from "@mui/icons-material"
import { graphicBrand } from "../enums/graphicCardEnum"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "./Gpu.css"
import { useData } from "../hooks/useData"

export const Gpu = () => {
    const {gpuId} = useParams()
    // const { graphicsData} = useShoppingCart()
    const {graphicCards} = useData()
    const foundGpu = graphicCards.find(item => item.id === gpuId)
    const baseImgUrl = "/images/";
    const {getItemQuantity, removeFromCart, increaseCartQuantity} = useShoppingCart()
    const pcId = foundGpu?.id || ''
    const quantity = getItemQuantity(foundGpu?.id || '')

    const similarProducts = useMemo(()=> graphicCards.slice(0,5),[]) ;
    return (
        <div className="gpuWrapper">
        <div className="gpuWrapper_productImg">
          <div style={{overflow:'hidden'}}>
        <LazyLoadImage style={{transition:"0.1s ease-out"}} width='100%' src={baseImgUrl + foundGpu?.imgUrl?.toLowerCase()} effect="blur"/>
        </div>
        <div className="gpuWrapper_productImg_info">
        {quantity===0 &&  <Button onClick={()=> increaseCartQuantity(pcId)} variant="contained">Add</Button>}
        {quantity >= 1 &&  <Button onClick={()=> removeFromCart(pcId)} variant="contained" color="error">Remove</Button>} 
          <Button variant="contained" color="success">Buy</Button>
        </div>
        <div className="user_ratings_gpu">
          <Typography variant="h6" fontSize='1rem' color='white'>User ratings</Typography>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Star sx={{color:'orange'}}/>
          <Typography variant="h6" fontSize='.7rem' color='white'>129 Ratings (4.7 Average)</Typography>
        </div>
        </div>

        {/* specifications */}
        <div className="gpuWrapper_specs">
        <Typography variant="h6" fontSize='1.3rem' fontWeight='600' color='white'>Specifications</Typography>
        <Divider sx={{background:'white', width:'100%', margin:'10px 0'}}/>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>{foundGpu?.name}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>{graphicBrand[foundGpu?.brand || 0].toUpperCase()}</Typography>
        <Typography variant="h6" fontSize='1rem' fontWeight='600' color='white'>Memory: {foundGpu?.memory}GB</Typography>
       

        {/* similar products */}
        <div className="similar_products_gpu">
        <Typography variant="h6" fontSize='1.3rem' fontWeight='600' color='white'>Similar Products</Typography>
        <Divider sx={{background:'white', width:'100%', margin:'10px 0'}}/>
        <div className="similar_products_gpus">
        {similarProducts.map(prod => (
          <GraphicCardProduct {...prod} key={prod.id}/>
        ))}
        </div>
        </div>
        </div>
    </div>
    )
    
    // <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    // padding:"50px 0", background:"#212529", height:"100vh"}}>
    // {foundGpu && <GraphicCardProduct {...foundGpu}/>}
    // {!foundGpu && <h3>Not found</h3>}
    // </div>
}