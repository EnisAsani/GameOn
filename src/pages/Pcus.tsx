import { Box } from "@mui/material"
import "./Pcus.css"
import PcProduct from '../components/PcProduct'
import { useState, Fragment } from "react"
import { GraphicCardProps } from "../components/GraphicCardProduct"
import { ProcessorProps } from "../components/ProcessorProduct"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { ProductsHeader } from "../components/ProductsHeader"
import { Pagination } from "../components/Pagination"

export type Pcus = {
    id: string
    name: string
    graphicCardId: string
    graphicCard: GraphicCardProps
    imgUrl: string
    motherBoard: string
    powerSupply: string
    price: number
    processor: ProcessorProps
    procesorId: string
    ram: number
}
export const Pcus = () => {
    const {pcProductsData} = useShoppingCart()
    const [inputValue, setInputValue] = useState("")
    const [filteredData, setFilteredData] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 8
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = pcProductsData.slice(firstPostIndex, lastPostIndex)

    let pages:number[] = []

    for(let i=1; i <= Math.ceil(pcProductsData.length/postPerPage); i++) {
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
            const filtered = pcProductsData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(filtered)
        } else {
            setFilteredData([])
        }
    }
    return <Fragment>
    <ProductsHeader productsAvailable={inputValue ? filteredData.length : currentPosts.length} handleInput={handleInput} title="Choose a PC"/>
    <Box className="pcusWrapper">
    {!inputValue  && currentPosts.map(cpu => (
                <PcProduct key={cpu.id} {...cpu}/>
            ))}
            {filteredData.length >0 && filteredData.map(cpu => (
                <PcProduct key={cpu.id} {...cpu}/>
            ))}
    </Box>
    <Pagination handleSetCurrentPage={handleSetCurrentPage} 
    moveToPrevPage={moveToPrevPage} moveToNextPage={moveToNextPage}
    pages={pages} currentPage={currentPage}/>
    </Fragment>
}