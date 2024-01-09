import React, { useState } from "react"
import { ProductsHeader } from "../components/ProductsHeader"
import { Box } from "@mui/material"
// import { useShoppingCart } from "../context/ShoppingCartContext"
import { ProcessorProduct } from "../components/ProcessorProduct"
import { Pagination } from "../components/Pagination"
import { useData } from "../hooks/useData"

export const Cpus = () => {


    // const {processorsData} = useShoppingCart()
    const {processors} = useData()
    const [inputValue, setInputValue] = useState("")

    const [filteredData, setFilteredData] = useState<any[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 8
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = processors.slice(firstPostIndex, lastPostIndex)

    let pages:number[] = []

    for(let i=1; i <= Math.ceil(processors.length/postPerPage); i++) {
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
        // const mapped = processorsData.map(item => item.name).filter(item => item.toLowerCase().includes(value.toLowerCase()))
        if(value) {
            const filtered = processors.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
        
    }
    
    return <React.Fragment>
        <ProductsHeader productsAvailable={inputValue ? filteredData.length : currentPosts.length} handleInput={handleInput} title="Choose a Processor"/>
        <Box sx={{display:"grid", margin:"0 auto", width:"80%", padding:"20px 0",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px, 300px))",gap:"20px", justifyContent:"center"}}>
            {!inputValue  && currentPosts.map(cpu => (
                <ProcessorProduct key={cpu.id} {...cpu}/>
            ))}
            {filteredData.length >0 && filteredData.map(cpu => (
                <ProcessorProduct key={cpu.id} {...cpu}/>
            ))}
        </Box>
        <Pagination handleSetCurrentPage={handleSetCurrentPage} 
    moveToPrevPage={moveToPrevPage} moveToNextPage={moveToNextPage}
    pages={pages} currentPage={currentPage}/>
    </React.Fragment>
}