import React, { useState } from "react";
import { ProductsHeader } from "../components/ProductsHeader";
import { Box } from "@mui/material";
// import { useShoppingCart } from "../context/ShoppingCartContext";
import { GraphicCardProduct } from "../components/GraphicCardProduct";
import { Pagination } from "../components/Pagination";
import { useData } from "../hooks/useData";

export const GraphicCard = () => {

    // const {graphicsData} = useShoppingCart()
    const {graphicCards} = useData()

    const [inputValue, setInputValue] = useState("")

    const [filteredData, setFilteredData] = useState<any[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 8
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = graphicCards.slice(firstPostIndex, lastPostIndex)

    let pages:number[] = []

    for(let i=1; i <= Math.ceil(graphicCards.length/postPerPage); i++) {
        pages.push(i)
    }

    const moveToNextPage = ()=> {
        if(currentPage === pages.length) {
            return
        }
        setCurrentPage(prevPage => prevPage +1)
    }
    const moveToPrevPage = ()=> {
        if(currentPage === 1) {
            return
        }
        setCurrentPage(prevPage => prevPage -1)
    }


    const handleSetCurrentPage = (page:number) => {
        setCurrentPage(page)
    }

    const handleInput = (value:string) => {
        setInputValue(value)
        if(value) {
            const filtered = graphicCards.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
    }

    return <React.Fragment>
        <ProductsHeader productsAvailable={inputValue ? filteredData.length : currentPosts.length} handleInput={handleInput} title="Choose a Video Card..."/>
        <Box sx={{display:"grid", margin:"0 auto", width:"80%", padding:"20px 0",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px, 300px))",gap:"20px", justifyContent:"center"}}>
            {!inputValue  && currentPosts.map(cpu => (
                <GraphicCardProduct key={cpu.id} {...cpu}/>
            ))}
            {filteredData.length >0 && filteredData.map(cpu => (
                <GraphicCardProduct key={cpu.id} {...cpu}/>
            ))}
        </Box>
        <Pagination handleSetCurrentPage={handleSetCurrentPage} 
    moveToPrevPage={moveToPrevPage} moveToNextPage={moveToNextPage}
    pages={pages} currentPage={currentPage}/>
    </React.Fragment>
}