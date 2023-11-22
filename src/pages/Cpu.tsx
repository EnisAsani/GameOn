import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { ProcessorProduct } from "../components/ProcessorProduct";

export const Cpu = () => {
    const {cpuId} = useParams()
    const { processorsData} = useShoppingCart()
    const foundCpu = processorsData.find(item => item.id === cpuId)
    
    return <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    padding:"50px 0", background:"#212529", height:"100vh"}}>
    {foundCpu && <ProcessorProduct {...foundCpu}/>}
    {!foundCpu && <h3>Not found</h3>}
    </div>
}