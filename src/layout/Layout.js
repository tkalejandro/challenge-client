import React from "react";
import "./layout.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";


const LayOut = (props) => {

    return (
        <div className="layout_container">
            <Header />
            <main className="layout_background">
                {props.children}
            </main>
            <Footer />

        </div>
    )

}

export default LayOut