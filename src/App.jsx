import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TileCalculator from "./pages/TileCalculator"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './Components/MenuPages/Menu/Menu.jsx';
import Products from './Components/MenuPages/Menu/Products.jsx';
import About from './Components/MenuPages/Menu/About.jsx'
import Resources from './Components/MenuPages/Menu/Resources.jsx';
import Investor from './Components/MenuPages/Menu/Investor.jsx';
import Search from './Components/MenuPages/SearchBar/Search.jsx'

function App() {


  return (
    <>
      <Header />
      <Routes>

        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <TileCalculator />
      <Footer />
    </>
  )
}

export default App
