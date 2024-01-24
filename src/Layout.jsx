import React from 'react'

import Header from './components/Header'
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <Header home="Home" BookList="Book List" addBook="Add Book" />
            <Outlet />
        </>
    )
}

export default Layout