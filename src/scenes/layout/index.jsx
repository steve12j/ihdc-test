import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "@/scenes/navbar"

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout   