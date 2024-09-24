import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePageLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default HomePageLayout