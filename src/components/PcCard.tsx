import { Box, Divider, Typography } from "@mui/material"


type PcCardProps = {
    imgUrl: string
    title: string
    processor: string
    description: string
    pcCase: string
    price: number
}

export const PcCard = (props : PcCardProps) => {
    return <Box sx={{display:"flex", flexDirection:"column", alignSelf:"baseline",background: "#073b4c",
     borderRadius:"10px",flex:"1 1", 
    maxWidth:"300px", minWidth:"200px", marginRight:{sm:"auto", md:"0",} ,
    padding:"5px"
    }}>
        <img style={{objectFit:"cover", borderRadius:"10px"}} width="100%" src={props.imgUrl || "https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=2048x2048&w=is&k=20&c=gz1quan2pGMzCMIYUfzfxCSGgCz0asnPNu0B3rclQTI="}/>
        <Typography sx={{padding:"10px 0 0 0", lineHeight:"1.5rem"}} variant="h5" fontSize="1.4rem" color="white">{props.title}</Typography>
        <Typography variant="h6" fontSize=".8rem" color="white">{props.processor}</Typography>
        <Typography variant="h6" fontSize=".9rem" color="white">{props.description}</Typography>
        <Divider sx={{background:"white"}}/>
        <Typography variant="h6" fontSize="1.2rem" color="white">${props.price.toFixed(2)}</Typography>
    </Box>
}