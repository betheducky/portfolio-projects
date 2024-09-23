import React, { PropsWithChildren } from "react";
import Header from "../components/Header";


const MainLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            <Header />
            <div className="main">
                {children}
            </div>
        </div>
    );
}

export default MainLayout