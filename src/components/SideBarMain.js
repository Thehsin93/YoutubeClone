import { Link } from "react-router-dom"
const SideBarMain = ()=>{
    return   <div className="w-48  grid grid-flow-row m-2 p-2">
   
        
       
    <ul className="flex flex-col">
            <div className="hover:bg-slate-200  rounded-2xl cursor-pointer">
            <Link to="/">
                <div>
            <img className="w-[20%]  mt-[1%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.UFGihP3VV0cfD8c-K2EtqwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
            <li className="w-[80%]">Home</li></div></Link>
            
            </div>
            <div className="hover:bg-slate-200  rounded-2xl mt-[20%] cursor-pointer">
        
            <img className="w-[25%]  mt-[1%]" alt="shortsicon" src="https://th.bing.com/th?id=OIP.3Y1mPKAhN6R5nNVgkQtSRgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"></img>
            <li className="w-[80%]"> Shorts</li>
         
            </div>
            <div className="hover:bg-slate-200  rounded-2xl mt-[20%] cursor-pointer">
            <img className="w-[17%] pl-[5%] mt-[1%]" alt="homeicon" src="https://th.bing.com/th/id/OIP.zTIi2EjU7o4umbAkGi8oPQHaHa?w=146&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
            <li className="w-[80%]"> Subscriptions</li>
            </div>
    </ul>
</div>
}
export default SideBarMain