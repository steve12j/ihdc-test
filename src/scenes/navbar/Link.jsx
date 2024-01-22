import React from 'react'
import { Link as LinkPage } from 'react-router-dom'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowecasePage = page.toLowerCase().replace(/ /g, "")

    return (
        <LinkPage
            className={`font-semibold  ${selectedPage === lowecasePage ? "text-primary-500 hover:text-primary-300 " : "hover:opacity-50"}`}
            to={lowecasePage}
            onClick={() => setSelectedPage(lowecasePage)}
        >{page}</LinkPage>
    )
}

export default Link