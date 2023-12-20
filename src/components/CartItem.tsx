import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: string
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart, processorsData, graphicsData, pcProductsData} = useShoppingCart()
    const allItems:any[] = [...pcProductsData, ...processorsData, ...graphicsData]
    const item = allItems.find(item => item.id === id)
    const baseImgUrl = "/images/"
    if(item == null) return null

    return (
        <Stack 
        className="d-flex align-items-center"
        direction="horizontal" gap={2}>
            <img loading="lazy" src={item.imgUrl.includes("images") ? item.imgUrl : baseImgUrl+item.imgUrl} style={{width: "125px", 
        height: "75px", objectFit: "cover"}}/>
        <div className="me-auto">
            <div>
                {item.name.slice(0,10)+"..."} {quantity > 1 && 
                <span 
                style={{fontSize: ".65rem"}}
                className="text-muted">
                   x{quantity}</span>}
            </div>
            <div 
            style={{fontSize: ".75rem"}}
            className="text-muted">{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button 
        onClick={()=> removeFromCart(item.id)}
        variant="outline-danger" size="sm">&times;</Button>
        
        </Stack>
    )
}