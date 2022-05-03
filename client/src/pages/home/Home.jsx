import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";
import Footer from "../../components/footer/Footer";
// import Login from "../login/Login";

export default function Home() {
    return (
        <>
            <main id="main">
                {/* <Login /> */}
                <Posts />
                <Side />
            </main>
            <Footer />
        </>
    );
}
