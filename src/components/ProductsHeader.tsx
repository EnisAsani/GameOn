import { Box, Divider, Typography } from "@mui/material"
// import UnstyledSelectControlled from "../components/ControlledSelect";
// import { Search } from "@mui/icons-material";
import { InputBase } from '@mui/material';


type ProductsHeaderProps = {
    title: string
    handleInput: (value:string)=> void
    productsAvailable: number
}

export const ProductsHeader = ({title, handleInput,productsAvailable}: ProductsHeaderProps) => {
   return <Box>
        <Typography variant="h4" sx={{textAlign: "center",
         background: "#495057",
         fontWeight:"600",
         display: "flex",
         justifyContent:"center",
         alignItems:"center",
         height: "95px",
         color:"white",
          width: "100%"}}>{title}</Typography>
        <Box sx={{width:"90%", margin: "0 auto", 
        display:"flex", 
        alignItems:{xs: "start", sm:"center"}, 
        flexDirection:{xs: "column", sm:"row"},
        justifyContent:"space-between",
        color:"white",
        fontWeight:"100"}}>
            <Typography sx={{padding:{xs: "10px 0 0 0", sm:"0"} }} variant="h6">{productsAvailable} Products</Typography>
            <Box sx={{display:{xs:"none", md: "flex"}, 
            flexDirection:"row",
            alignItems: "center", 
            gap:"10px",
            }}>
            {/* <Typography variant="h6">Sort By</Typography>
            <UnstyledSelectControlled></UnstyledSelectControlled> */}
            </Box>
            <Box sx={{display:"flex", alignItems: "center", gap:"10px", padding:"20px 0"}}>
                {/* <Search sx={{cursor:"pointer"}}/> */}
                <InputBase 
                onChange={(e)=>handleInput(e.currentTarget.value)}
                sx={{border: "none",
                padding:"0 0 0 10px",
                color:"white",
                    borderRadius: "5px", background:"#0d1321"}}
                type="text" placeholder="Video Cards"/>
            </Box>
        </Box>
        <Divider sx={{background:"white", width:"90%", margin:"0 auto"}}/>
    </Box>
}