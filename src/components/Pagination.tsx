import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Button } from "@mui/material"

export const Pagination = (props:any) => {
    const {currentPage, pages} = props

    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"0 0 15px 0"}}>
        <Button disabled={currentPage === 1} >
        <KeyboardArrowLeft onClick={props.moveToPrevPage} sx={{color: currentPage === 1 ? 'gray' : "white", cursor:'pointer'}}/>
        </Button>
        {props.pages.map((page:number, index:number) => (
            <Button onClick={()=> {
                props.handleSetCurrentPage(page)
            }} sx={{background: currentPage === page ? '#073b4c' : '', color:'white'}} key={index}>{page}</Button>
        ) )}
        <Button disabled={props.currentPage === pages.length}>
        <KeyboardArrowRight onClick={props.moveToNextPage} 
        sx={{color: currentPage === pages.length ? 'gray' : "white", cursor:'pointer'}}/>
        </Button>
    </div>
}