import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import  Head   from "./Head";
const Body = ()=>{
    return <><Head/><div className="grid grid-cols-12">
        <Sidebar/>
        <Outlet/>
        
    </div></>
};

export default Body