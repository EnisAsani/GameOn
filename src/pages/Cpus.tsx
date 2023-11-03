import React from "react"
import { ProductsHeader } from "../components/ProductsHeader"
import { Box } from "@mui/material"
import cpus from "../data/cpus.json"
import { Product } from "../components/Product"

export const Cpus = () => {
    return <React.Fragment>
        <ProductsHeader title="Choose a Processor"/>
        <Box sx={{display:"flex", flexDirection:"column", gap:"5px", padding:"10px 0"}}>
            {cpus.map(cpu => (
                <Product key={cpu.id} {...cpu}/>
            ))}
        </Box>
    </React.Fragment>
}