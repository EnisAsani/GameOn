import { Button } from "@mui/material"

export const Pagination = (props:any) => {
    let pages = []

    for(let i=1; i <= Math.ceil(props.totalPosts/props.postPerPage); i++) {
        pages.push(i)
    }
    
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"0 0 15px 0"}}>
        {pages.map((page, index) => (
            <Button onClick={()=> props.handleSetCurrentPage(page)} sx={{color:"white"}} key={index}>{page}</Button>
        ) )}
    </div>
}