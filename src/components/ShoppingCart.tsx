import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"
import cpus from "../data/cpus.json"


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems } = useShoppingCart()
    const allItems = storeItems.concat(cpus)
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
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}