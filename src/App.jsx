import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Predictor from './Pages/Predictor/Predictor'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
