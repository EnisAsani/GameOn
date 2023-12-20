import { Box } from "@mui/material"
import { ProcessorProduct } from "./ProcessorProduct"
import './HomeSection.css'

type processorArray = {
    data: ProcessorProps[]
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


export const HomeSection = ({data}: processorArray) => {
    
    return <Box className="productsDiv" >
        {data.map((item:ProcessorProps) => (
            <ProcessorProduct key={item.id} {...item}/>
        ))}
    </Box>
}