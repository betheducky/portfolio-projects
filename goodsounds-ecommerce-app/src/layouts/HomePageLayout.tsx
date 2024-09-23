import React, { PropsWithChildren } from "react";
import Header from "../components/Header";


const HomePageLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            <Header />
                {children}
        </div>
    );
}

export default HomePageLayout