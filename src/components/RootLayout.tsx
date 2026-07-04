import React, {ReactElement} from "react";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";
import Footer from "./Footer";

interface Props{
    children: ReactElement
}

const RootLayout = ({children} : Props) => {
    return (
        <>
        <div className=" flex flex-col min-h-screen bg-gray-200">
         <Header/>
         <HeaderBottom/>
         <main className="flex-grow">
            {children}
         </main>
         <Footer/>
         </div>
        </>
    );
};

export default RootLayout;