import React from "react";
import Article from "../pages/Article";
import Header from "../pages/Header";
import Nav from "../pages/Nav";
import Navbar from "./Navbar";

function Week1(props) {
    return(
        <>
        <Navbar />
        <Header />
        <Nav />
        <Article />
        </>
    );
}

export default Week1;