import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;