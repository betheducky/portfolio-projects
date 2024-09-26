import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface HomePageLayoutProps {
    currentUser: object | null;
}

const HomePageLayout: React.FC<PropsWithChildren<HomePageLayoutProps>> = ({children, currentUser}) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default HomePageLayout