import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    // Это компонент для того чтобы обернуть наши pages в header и footer
    return (
        <>
            <Header/>
                <Outlet/> {/* Это Home.jsx */}
            <Footer/>
        </>
    )
}

export default Layout