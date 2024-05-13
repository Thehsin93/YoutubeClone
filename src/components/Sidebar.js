import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBarMain from "./SideBarMain";
const Sidebar = ()=>{
    const isMenu = useSelector((store)=>store.app.isMenuOpen);
    if(isMenu) return <SideBarMain/>;
    return <div className="">
    <div className="grid grid-flow-row m-2 p-2 ">
   
        
       
   <ul className="flex flex-col">
           <div className="hover:bg-slate-200  rounded-2xl cursor-pointer flex">
           <img className="w-[30%] pl-[5%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.UFGihP3VV0cfD8c-K2EtqwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%]"><Link to="/">Home</Link></li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[30%] -pl-[25%] mt-[10%]" alt="shortsicon" src="https://th.bing.com/th?id=OIP.3Y1mPKAhN6R5nNVgkQtSRgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
           <li className="text-left mt-[10%]"> Shorts</li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[12%] ml-[8%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.zTIi2EjU7o4umbAkGi8oPQHaHa?w=146&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%] pl-[5%]"> Subscriptions</li>
           </div>
           <div className="mt-[20%]">
           <hr ></hr>
           </div>
           <div>
           <h1 className="font-bold pt-5">You</h1>
           <ul>
           <div className="hover:bg-slate-200  rounded-2xl cursor-pointer flex">
           <img className="w-[30%] pl-[5%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.UFGihP3VV0cfD8c-K2EtqwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%]"><Link to="/">Channel</Link></li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[30%] -pl-[25%] mt-[10%]" alt="shortsicon" src="https://th.bing.com/th?id=OIP.3Y1mPKAhN6R5nNVgkQtSRgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
           <li className="text-left mt-[10%]"> History</li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[12%] ml-[8%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.zTIi2EjU7o4umbAkGi8oPQHaHa?w=146&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%] pl-[5%]"> PlayList</li>
           </div>
            </ul>
            </div>
            <div className="mt-[20%]">
                <hr></hr>
            <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
        <div className="hover:bg-slate-200  rounded-2xl cursor-pointer flex">
           <img className="w-[30%] pl-[5%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.UFGihP3VV0cfD8c-K2EtqwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%]"><Link to="/">Pepa Pig</Link></li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[30%] -pl-[25%] mt-[10%]" alt="shortsicon" src="https://th.bing.com/th?id=OIP.3Y1mPKAhN6R5nNVgkQtSRgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
           <li className="text-left mt-[10%]">Tayo</li>
           </div>
           <div className="hover:bg-slate-200  rounded-2xl mt-[10%] cursor-pointer flex">
           <img className="w-[12%] ml-[8%] mt-[10%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.zTIi2EjU7o4umbAkGi8oPQHaHa?w=146&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
           <li className="text-left mt-[10%] pl-[5%]">CocoMelon</li>
           </div>
        </ul>
        </div>
   </ul>
  
     
       
</div></div>
};

export default Sidebar