import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { GraphicCardProduct } from "../components/GraphicCardProduct"

export const Gpu = () => {
    const {gpuId} = useParams()
    const { graphicsData} = useShoppingCart()
    const foundGpu = graphicsData.find(item => item.id === gpuId)
    return <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    padding:"50px 0", background:"#212529", height:"100vh"}}>
    {foundGpu && <GraphicCardProduct {...foundGpu}/>}
    {!foundGpu && <h3>Not found</h3>}
    </div>
}