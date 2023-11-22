import { Box } from "@mui/material"
import { ProcessorProduct } from "./ProcessorProduct"

type processorArray = {
    data: ProcessorProps[]
}

type ProcessorProps = {
    id:number
    processorBrand:number
    name: string
    imgUrl: string
    coreClock: number
    maxClock: number
    price: number
}


export const HomeSection = ({data}: processorArray) => {
    
    return <Box sx={{display:"grid",
    gridTemplateColumns:"repeat(auto-fit, minmax(200px, 300px))",
    justifyContent:"center",
    // minHeight:"60vh",
    margin:"25px auto",
    gap:"30px",
    width:"80%"}}>
        {data.map((item:ProcessorProps) => (
            <ProcessorProduct key={item.id} {...item}/>
        ))}
    </Box>
}