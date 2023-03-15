import React from "react";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/footer/Footer";
//*create web page with components: menu, header, content and footer

export default function App(){
    return (
        <div>
            <Menu />
            <Header />
            <Home />
            <Footer />
        </div>
    )
}