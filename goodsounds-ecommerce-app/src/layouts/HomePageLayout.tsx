import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface HomePageLayoutProps {
    currentUser: object | null;
    children: React.ReactNode;
}

const HomePageLayout = (props: HomePageLayoutProps) => {
    return (
        <div>
            <Header {...props} />
                {props.children}
            <Footer />
        </div>
    );
}

export default HomePageLayout