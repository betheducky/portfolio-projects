import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout