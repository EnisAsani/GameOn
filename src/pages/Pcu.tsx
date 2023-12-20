import { useParams } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import PcProduct from "../components/PcProduct"

const Pcu = () => {
    const {pcuId} = useParams()
    const {pcProductsData} = useShoppingCart()
    const foundPcu = pcProductsData.find(item => item.id === pcuId)
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", 
    padding:"50px 0", background:"#212529", height:"100vh"}}>
    {foundPcu && <PcProduct {...foundPcu}/>}
    {!foundPcu && <h3>Not found</h3>}
    </div>
  )
}

export default Pcu
