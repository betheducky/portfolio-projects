import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
    currentUser: object | null;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({children, currentUser}) => {
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