import React, { useState } from "react"
import { ProductsHeader } from "../components/ProductsHeader"
import { Box } from "@mui/material"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { ProcessorProduct } from "../components/ProcessorProduct"

export const Cpus = () => {


    const {processorsData} = useShoppingCart()

    const [inputValue, setInputValue] = useState("")

    const [filteredData, setFilteredData] = useState<any[]>([])
    
    
    const handleInput = (value:string) => {
        setInputValue(value)
        // const mapped = processorsData.map(item => item.name).filter(item => item.toLowerCase().includes(value.toLowerCase()))
        if(value) {
            const filtered = processorsData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
        
    }
    
    return <React.Fragment>
        <ProductsHeader productsAvailable={inputValue ? filteredData.length : processorsData.length} handleInput={handleInput} title="Choose a Processor"/>
        <Box sx={{display:"grid", margin:"0 auto", width:"80%", padding:"20px 0",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px, 300px))",gap:"20px", justifyContent:"center"}}>
            {!inputValue  && processorsData.map(cpu => (
                <ProcessorProduct key={cpu.id} {...cpu}/>
            ))}
            {filteredData.length >0 && filteredData.map(cpu => (
                <ProcessorProduct key={cpu.id} {...cpu}/>
            ))}
        </Box>
    </React.Fragment>
}