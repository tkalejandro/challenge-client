import React from "react";
import "./Button.scss"

const Button = ({ type, text, onClick }) => {

    return (
        <button
            onClick={onClick ? onClick : null}
            className={type === "primary" ? "btnPrimary" : type === "error" ? "btnError" : ""}>
            {text}
        </button>
    )

}

export default Button