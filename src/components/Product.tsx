import { Box, Button, Typography } from "@mui/material"
import { useShoppingCart } from "../context/ShoppingCartContext"




export const Product = (props: any) => {
    const baseImgUrl = "/images/";
    const {increaseCartQuantity, getItemQuantity, decreaseItemQuantity} = useShoppingCart()
    const itemQuantity = getItemQuantity(props.id)
    return <Box sx={{display:{md:"flex", xs:"grid"}, 
    gridTemplateColumns: "1fr 1fr",
    alignItems:"center", justifyContent:"space-between", color:"white", padding:"5px 50px"}}>
        <img style={{width:"50px", height:"50px"}} src={baseImgUrl+props.imgUrl} alt="pc-picture"/>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="h6">{props.coreClock}</Typography>
        <Typography variant="h6">$ {props.price.toFixed(2)}</Typography>
        {itemQuantity === 0 ? (
            <Button onClick={()=> increaseCartQuantity(props.id)} variant="contained" sx={{maxWidth:"100px", flex:"1"}}>Add</Button>
        ) : (
            <Button onClick={()=> decreaseItemQuantity(props.id)} color="error" variant="contained" sx={{maxWidth:"100px",  flex:"1"}}>Remove</Button>
        ) }
        
        
    </Box>
}