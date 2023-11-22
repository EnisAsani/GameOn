import {  Button} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AppBar, Box, Toolbar, Button as MUIButton, TextField, Autocomplete, styled } from "@mui/material"
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { ProductsDropdown } from "./ProductsDropdown";
import { useState } from "react";
import { ArrowDropUp, Handyman } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function Navbar (props:any) {
    const navigate = useNavigate()
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState<boolean>(false)

    function handleProductDropdown () {
        setIsProductDropdownOpen(prevState => !prevState)
    }

    const [rotateChevron, setRotateChevron] = useState(false);

    const handleRotate = () => setRotateChevron(!rotateChevron);
    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    const CustomAutoComp = styled(Autocomplete) ({
        "& label": {
            color: "white"
        },
        "& .MuiInputBase-root" : {
            border: "none",
            color: "white"
        },
        "& fieldset": {
            border: "none",
        },
        "& .MuiButtonBase-root": {
            color: "white"
        }
    })

    const {openCart, cartQuantity, graphicsData, processorsData} = useShoppingCart()
    const mergedData = [...graphicsData.map((item:any) => ({label: item.name, ...item})), 
        ...processorsData.map((item:any) => ({label: item.name, ...item}))
    ]
    
    const [selectedValue, setSelectedValue] = useState<any>(null)
    
    // const top100Films = [
    //     { label: 'The Shawshank Redemption', year: 1994 },
    //     { label: 'The Godfather', year: 1972 },
    //     { label: 'The Godfather: Part II', year: 1974 },
    //     { label: 'The Dark Knight', year: 2008 },
    //     { label: '12 Angry Men', year: 1957 },
    //     { label: "Schindler's List", year: 1993 },
    //     { label: 'Pulp Fiction', year: 1994 },]
    return <Box sx={{position: "relative"}}>
                <AppBar position="static" sx={{background: "#073b4c",padding: "0 10px" }}>
                    <Toolbar sx={{display: "flex",justifyContent:"space-between", alignItems: "center"}}>
                        <Box sx={{display:{xs:"block", md:"none"}}} onClick={props.handleMobileOpen}>
                    <MenuIcon sx={{ cursor:"pointer"}}/>
                    </Box>
                <Box sx={{display:{xs: "none", md:"block"}, alignItems:"center"}}>
                    <Link to="/graphic-card"><MUIButton sx={{color: "white", border:"none"}}>Builder</MUIButton></Link>
                {/* <Link to="/store"><MUIButton sx={{color: "white"}}>Products</MUIButton></Link> */}
                <MUIButton startIcon={<Handyman />} onClick={()=> {handleProductDropdown(), handleRotate()}} 
                sx={{color: "white"}}>
                    Products <ArrowDropUp sx={{transform: rotate, transition: "all 0.2s linear"}} />
                </MUIButton>
                <Link to="/store"><MUIButton sx={{color: "white"}}>Completed Builds</MUIButton></Link>
                
                </Box>
                <Box sx={{display: "flex", alignItems: "center", gap: "20px"}}>
                <CustomAutoComp
                sx={{width: "200px"}}
                value={selectedValue}
                onChange={(event:any, newValue: any) =>  {
                    setSelectedValue(newValue) 
                    if(newValue) {
                    const foundItem = mergedData.find(item => item.name === newValue.name)
                    if(foundItem.maxClock) {
                        navigate(`/cpu/${foundItem.id}`)
                    } else {
                        navigate(`/gpu/${foundItem.id}`)
                    }
                   }
                }
                }
                    freeSolo
                 options={mergedData}
                    renderInput={(params) => <TextField {...params} label="Search..." />}
                />
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
                <ProductsDropdown 
                handleProductDropdown={handleProductDropdown}
                isProductDropdownOpen={isProductDropdownOpen}/>
            </Box>
}