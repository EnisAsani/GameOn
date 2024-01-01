import { Divider, Typography } from "@mui/material"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className="menu">
          <Typography variant="h6">Navigation</Typography>
          <Divider sx={{width:'80%', background:'white', margin:'0 0 5px 0'}}/>
          <Link to='/cpus'>Processors</Link>
          <Link to='/gpus'>Graphic Cards</Link>
          <Link to='/pcus'>Computers</Link>
        </div>
        <div className="account">
        <Typography variant="h6">Account</Typography>
          <Divider sx={{width:'80%', background:'white', margin:'0 0 5px 0'}}/>
          <Link to='/signin'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>

    </div>
  )
}

export default Footer
