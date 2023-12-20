import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
// const Header = lazy(()=> import('./components/Header'))
import  Header  from "./components/Header"
import { GraphicCard } from "./pages/GraphicCard"
import { Cpus } from "./pages/Cpus"
import { Box } from "@mui/material"
import { MobileMenu } from "./components/MobileMenu"
import { useState, Fragment } from "react"
import { Cpu } from "./pages/Cpu"
import { Gpu } from "./pages/Gpu"
import Register from "./pages/Register"
// const Register = lazy(()=> import('./pages/Register'))
import { SignIn } from "./pages/SignIn"
import { Pcus } from "./pages/Pcus"
import Pcu from "./pages/Pcu"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function handleMobileOpen() {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  return (
    <Fragment>
    <ShoppingCartProvider>
      <Header />
      <Navbar handleMobileOpen={handleMobileOpen}>
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen}
      handleMobileOpen={handleMobileOpen}
      />
      </Navbar>
      
      <Box sx={{background:"#343a40", minHeight:"100vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gpus" element={<GraphicCard />} />
          <Route path="/gpu/:gpuId" element={<Gpu />} />
          <Route path="/cpus" element={<Cpus />} />
          <Route path="/cpu/:cpuId" element={<Cpu />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/pcus" element={<Pcus />} />
          <Route path="/pcu/:pcuId" element={<Pcu />} />
        </Routes>
        </Box>
      </ShoppingCartProvider>
    </Fragment>
  )
}

export default App
