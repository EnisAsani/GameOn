import {  Button} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AppBar, Box, Toolbar, InputBase,List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
// import { ProductsDropdown } from "./ProductsDropdown";
import { useState } from "react";
// import { ArrowDropUp, Handyman } from "@mui/icons-material";
import { SearchData } from "./SearchData";
import { BuildCircle, DesktopMac, Memory } from "@mui/icons-material"
import { Link } from "react-router-dom"

export function Navbar (props:any) {
    // const [isProductDropdownOpen, setIsProductDropdownOpen] = useState<boolean>(false)

    // function handleProductDropdown () {
    //     setIsProductDropdownOpen(prevState => !prevState)
    // }

    // const [rotateChevron, setRotateChevron] = useState(false);

    // const handleRotate = () => setRotateChevron(!rotateChevron);
    // const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

   

    const {openCart, cartQuantity, graphicsData, processorsData, pcProductsData} = useShoppingCart()
    const mergedData = [...graphicsData, 
        ...processorsData,
        ...pcProductsData
    ]
    
    const [inputVal, setInputVal] = useState<string>("")
    const[filteredData, setFilteredData] = useState<any>([])
    
    const handleFilteredData = (input:string) => {
        const filtered = mergedData.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        if(input) {
        setFilteredData(filtered)
    } else {
        setFilteredData([])
    }
    }
    const closeSearchData = () => {
        handleFilteredData('')
    }
    
    return <Box sx={{position: "relative"}}>
                <AppBar position="static" sx={{background: "#073b4c",padding: "0 10px" }}>
                    <Toolbar sx={{display: "flex",justifyContent:"space-between", alignItems: "center", height:'64px'}}>
                        <Box sx={{display:{xs:"block", md:"none"}}} onClick={props.handleMobileOpen}>
                    <MenuIcon sx={{ cursor:"pointer"}}/>
                    </Box>
                {/* <Box sx={{display:{xs: "none", md:"block"}, alignItems:"center"}}> */}
                <List sx={{display:{xs: "none", md:"flex"}, alignItems:"center", padding:'0'}}>
                <Link style={{textDecoration:"none"}} to="cpus" >
            <ListItem >
                <ListItemButton sx={{display:'flex', justifyContent:'space-between'}}>
                    <ListItemIcon sx={{minWidth:'50%'}}>
                        <Memory sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Cpus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            <Link style={{textDecoration:"none"}} to="gpus">
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <BuildCircle sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Gpus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            <Link style={{textDecoration:"none"}} to="pcus">
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <DesktopMac sx={{color:"white"}}/>
                    </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Pcus"></ListItemText>
                </ListItemButton>
            </ListItem>
            </Link>
            </List>
                {/* <MUIButton startIcon={<Handyman />} onClick={()=> {handleProductDropdown(), handleRotate()}} 
                sx={{color: "white"}}>
                    Products <ArrowDropUp sx={{transform: rotate, transition: "all 0.2s linear"}} />
                </MUIButton> */}
                {/* </Box> */}
                <Box sx={{display: "flex", alignItems: "center", gap: "20px"}}>
                <InputBase  
                value={inputVal}
                onChange={(e:any)=> {
                    handleFilteredData(e.target.value)
                    setInputVal(e.target.value)
                }}
                sx={{border: "none",
                padding:"0 0 0 10px",
                color:"white",
                    borderRadius: "5px", background:"#0d1321"}}
                type="text" placeholder="Search"/>
                <SearchData 
                closeSearchData={closeSearchData}
                searchData={filteredData.length ===0 ? [] : filteredData}/>
            {cartQuantity > 0 && (
            <Button onClick={()=> openCart()} className="rounded-circle "
            variant="outline-primary"
            style={{width: "3rem", height: "3rem", position: "relative"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div 
            style={{position: "absolute",
             bottom: 0, right: 0, color: "white",
            width:"1.3rem", height: "1.3rem",
            transform: "translate(25%, 25%)" }}
            className="rounded-circle bg-danger 
            d-flex justify-content-center
            align-items-center">{cartQuantity}</div>
            </Button>
            )}
            </Box>
            </Toolbar>
                </AppBar>
                {props.children}
                {/* <ProductsDropdown 
                handleProductDropdown={handleProductDropdown}
                isProductDropdownOpen={isProductDropdownOpen}/> */}
            </Box>
}