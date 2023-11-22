import React, { useState } from "react";
import { ProductsHeader } from "../components/ProductsHeader";
import { Box } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { GraphicCardProduct } from "../components/GraphicCardProduct";

export const GraphicCard = () => {

    const {graphicsData} = useShoppingCart()

    const [inputValue, setInputValue] = useState("")

    const [filteredData, setFilteredData] = useState<any[]>([])

    const handleInput = (value:string) => {
        setInputValue(value)
        if(value) {
            const filtered = graphicsData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
    }

    return <React.Fragment>
        <ProductsHeader productsAvailable={inputValue ? filteredData.length : graphicsData.length} handleInput={handleInput} title="Choose a Video Card..."/>
        <Box sx={{display:"grid", margin:"0 auto", width:"80%", padding:"20px 0",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px, 300px))",gap:"20px", justifyContent:"center"}}>
            {!inputValue  && graphicsData.map(cpu => (
                <GraphicCardProduct key={cpu.id} {...cpu}/>
            ))}
            {filteredData.length >0 && filteredData.map(cpu => (
                <GraphicCardProduct key={cpu.id} {...cpu}/>
            ))}
        </Box>
    </React.Fragment>
}