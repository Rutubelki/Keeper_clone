import React from "react";
import './index.css'
function Footer(){
    const currentyear=new Date().getFullYear();
    return (
       <footer> <p> Copyright {currentyear}</p></footer>
           

    )
}

export default Footer;

