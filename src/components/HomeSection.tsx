import { Box } from "@mui/material"
import { PcCard } from "./PcCard"

type PcCardArray = {
    data: PcCardProps[]
}

type PcCardProps = {
        id:number
        title: string
        imgUrl: string
        processor: string
        description: string
        pcCase: string
        price: number
}


export const HomeSection = ({data}: PcCardArray) => {
    
    return <Box sx={{display:"flex", justifyContent:"center", 
    flexWrap:"wrap",
    alignItems:"center", 
    minHeight:"60vh",
    margin:"25px auto",
    gap:"30px",
    width:"80%"}}>
        {data.map((item:PcCardProps) => (
            <PcCard key={item.id} {...item}/>
        ))}
    </Box>
}