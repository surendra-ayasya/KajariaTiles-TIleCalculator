
import TileCalculator from "./pages/TileCalculator"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './Components/MenuPages/Menu/Menu.jsx';
import Products from './Components/MenuPages/Menu/Products.jsx';
import About from './Components/MenuPages/Menu/About.jsx'
import Resources from './Components/MenuPages/Menu/Resources.jsx';
import Investor from './Components/MenuPages/Menu/Investor.jsx';
import Search from './Components/MenuPages/SearchBar/Search.jsx'
import KajariaSearch from "./components/KajariaSearch.jsx";

function App() {


  return (
    <>
      <KajariaSearch />

      <TileCalculator />
    </>
  )
}

export default App
