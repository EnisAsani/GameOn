import { useNavigate } from "react-router-dom"

export const SearchData = (props:any) => {
    const navigate = useNavigate()
    const handleNavigate = (item:any) => {
        if(item.maxClock) {
            navigate(`/cpu/${item.id}`)
        } 
        else if(item.motherBoard) {
            navigate(`/pcu/${item.id}`)
        }
        else {
            navigate(`/gpu/${item.id}`)
        }
    }
    const baseImgUrl = "/images/";
    return <div style={{position:"absolute",width:"100%",top:"100%",left:"0",minHeight:"auto", background:"#3D3D54", zIndex:"3"}}>
        {props.searchData && props.searchData?.map((item:any) => (
            <div 
            onClick={()=> {
                handleNavigate(item)
                props.closeSearchData()
            }}
            style={{height:"40px",  display:"flex", alignItems:"center", padding:"0 10px", cursor:"pointer", gap:"15px"}}
             key={item.id}>
                <img style={{height:"90%", aspectRatio:"1/1"}} src={baseImgUrl+item.imgUrl.toLowerCase()}/>
                <span>{item.name}</span>
             </div>
        ))}
    </div>
}