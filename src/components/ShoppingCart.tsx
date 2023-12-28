import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
// import storeItems from "../data/items.json"
import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems,graphicsData, processorsData, pcProductsData } = useShoppingCart()
    const allItems:any[] = [...graphicsData, ...processorsData, ...pcProductsData]
    // const navigate = useNavigate()
    const handleCheckout = async () => {
        if(cartItems.length === 0) {
            return
        }
        const products = [
            {"id": cartItems[0].id ,
             "type": 'gpu',
             "quantity": cartItems[0].quantity
            }
        ]
        const response = await axios.post('https://localhost:7122/api/Checkout', products)
        window.location.replace(response.data.sessionId)
        // navigate(response.data.sessionId)
        console.log(response.data.sessionId);
    }
    return <Offcanvas onHide={()=> closeCart()} show={isOpen} placement="end">
        <Offcanvas.Header closeButton>
           <Offcanvas.Title>Cart</Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
             {cartItems.map(item => {
                return <CartItem key={item.id} {...item}></CartItem>
             })}
             <div className="ms-auto fw-bold fs-4">
                Total {formatCurrency(cartItems.reduce((total, current)=> {
                    const item = allItems.find(item => item.id === current.id)
                    return total + (item?.price || 0) * current.quantity
                },0)
                )}
             </div>
             <div style={{marginLeft:"auto"}}>
                {/* <Link to="https://dashboard.stripe.com/login"><Button variant="contained">Checkout</Button></Link> */}
                <Button onClick={handleCheckout} variant="contained">Checkout</Button>
             </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}