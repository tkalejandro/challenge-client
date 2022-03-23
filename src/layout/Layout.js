import React from "react";
import "./layout.scss"

const LayOut = (props) => {

    return (
    <main className="layout_background">
            {props.children}
    </main>)
    
}

export default LayOut