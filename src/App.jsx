import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "@/scenes/layout"
import Home from "@/scenes/home"
import Register from "@/scenes/register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
