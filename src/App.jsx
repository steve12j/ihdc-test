import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "@/scenes/layout"
import Home from "@/scenes/home"
import Register from "@/scenes/register"
import Journal from "@/scenes/journal"
import Transactions from "@/scenes/transactions"
import Products from "@/scenes/products"
import Dashboard from "@/scenes/dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
