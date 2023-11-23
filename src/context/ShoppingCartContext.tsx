import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";


type GraphicCardProps = {
    id:string
    brand:number
    name: string
    imgUrl: string
    memory: number
    price: number
    
}

type ProcessorProps = {
    id:string
    processorBrand:number
    name: string
    imgUrl: string
    coreClock: number
    maxClock: number
    price: number
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (id: string) => void
    decreaseItemQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItem[]
    graphicsData: any[]
    processorsData:ProcessorProps[]
}

type CartItem = {
    id: string
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {

    const [graphicsApi, setGraphicsApi] = useState<GraphicCardProps[]>(()=>[])
    const [processorsApi, setProcessorsApi] = useState<ProcessorProps[]>(()=>[])

    const fetchGraphics = async () => {
        const response = await axios.get("https://gameonapi.azurewebsites.net/api/graphiccard/getall")
        // const response = await axios.get('https://localhost:7122/api/GraphicCard/getall')
        setGraphicsApi(response.data)
     }
 
     const fetchProcessors = async () => {
         const response = await axios.get("https://gameonapi.azurewebsites.net/api/processor/getall")
        //  const response = await axios.get('https://localhost:7122/api/processor/getall')
         setProcessorsApi(response.data)
     }

    

    useEffect(()=> {
        fetchGraphics()
        fetchProcessors()
        // const labeledProcessor = processorsApi.map(prc => {label: prc.name})
        // const labeledGraphic = graphicsApi.map(graph => {label: graph.name})
     }
         ,[])

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    const cartQuantity = cartItems.reduce((quantity, item) =>item.quantity + quantity, 0)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity +1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: string) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity  -1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: string) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    
    return <ShoppingCartContext.Provider value={{getItemQuantity,
    increaseCartQuantity,
     decreaseItemQuantity, removeFromCart, 
     cartItems, cartQuantity, openCart, closeCart,
     graphicsData:graphicsApi, processorsData:processorsApi}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
}