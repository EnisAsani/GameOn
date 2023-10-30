import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Builder } from "./pages/Builder"
import { Header } from "./components/Header"
import { GraphicCard } from "./pages/GraphicCard"
import { Box } from "@mui/material"
import { MobileMenu } from "./components/MobileMenu"
import { useState } from "react"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function handleMobileOpen() {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  return (
    <>
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
          <Route path="/about" element={<About />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/graphic-card" element={<GraphicCard />} />
        </Routes>
        </Box>
      </ShoppingCartProvider>
    </>
  )
}

export default App
