import { Box, Button, Typography } from "@mui/material"
import { useShoppingCart } from "../context/ShoppingCartContext"


type ProductProps = {
    id:number
    name: string
    imgUrl: string
    coreClock: string
    price: number
}

export const Product = ({ id,name, coreClock, price, imgUrl}: ProductProps) => {
    const {increaseCartQuantity, getItemQuantity, decreaseItemQuantity} = useShoppingCart()
    const itemQuantity = getItemQuantity(id)
    return <Box sx={{display:{md:"flex", xs:"grid"}, 
    gridTemplateColumns: "1fr 1fr",
    alignItems:"center", justifyContent:"space-between", color:"white", padding:"5px 50px"}}>
        <img style={{width:"50px", height:"50px"}} src={imgUrl} alt="pc-picture"/>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">{coreClock}</Typography>
        <Typography variant="h6">$ {price.toFixed(2)}</Typography>
        {itemQuantity === 0 ? (
            <Button onClick={()=> increaseCartQuantity(id)} variant="contained" sx={{maxWidth:"100px", flex:"1"}}>Add</Button>
        ) : (
            <Button onClick={()=> decreaseItemQuantity(id)} color="error" variant="contained" sx={{maxWidth:"100px",  flex:"1"}}>Remove</Button>
        ) }
        
        
    </Box>
}