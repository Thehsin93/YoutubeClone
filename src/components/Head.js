import { hamicon } from "../utils/Constants"
import { youtubelogo } from "../utils/Constants";
import { usericon } from "../utils/Constants";
import { searchicon } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState,useEffect } from "react";
import { Search_API } from "../utils/Constants";
import { Cacheresult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = ()=>{
    const [searchQuery,ChangesearchQuery] = useState(""); 
    const [suggestions,SetSuggestions] = useState([]); 
    const [showsuggestions,setShowSuggestions] = useState(false); 
    const searchCache = useSelector(store=>store.search);
 
    const dispatch = useDispatch();
    useEffect(()=>{
       
        setTimeout(()=>{
            
            if(searchCache[searchQuery])
                SetSuggestions(searchCache[searchQuery]);
               
            else{
            getSearchSuggestions();}},200);
                  
            
        return ()=>{
            clearTimeout();
        }
    },[searchQuery]);
  const getSearchSuggestions = async()=>{
        const data = await fetch("https://corsproxy.io/?"+Search_API+searchQuery);
        const json = await data.json();
      
   
    SetSuggestions(json[1]);
    dispatch(Cacheresult({
        [searchQuery]:json[1]
    }));
    
  }
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
   
    return <><div className="grid grid-flow-col m-2 p-5">
        <div className="flex col-span-1" >
        <img alt="hammenu" src={hamicon} className="h-8 cursor-pointer" onClick={toggleMenuHandler}></img>
        <img alt="youlogo" src={youtubelogo} className="h-8 mx-2"></img>
        </div>
        <div className="col-span-10 ml-40">
            <div className="flex w-11/12 col-span-1">
            <input  className="w-3/4 border border-gray-400 rounded-l-full px-4 py-2" type="text"
            value={searchQuery} onChange={(e)=>ChangesearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}/>
            
            <button className="border border-gray-400 rounded-r-full py-3 px-4">
                <img src={searchicon} className="h-5"></img>
            </button>
            
            </div>
           {showsuggestions && <div className="absolute bg-white shadow-lg w-[28%] px-4 rounded-lg border border-gray-100">
                <ul>{suggestions.length>1 && suggestions.map((sq)=><li className="hover:bg-gray-100 py-1">{sq}</li>)
                  
                }
                </ul>
            </div>
            }
        </div>
        <div className="col-span-1">
            <img atl="userlogo" src={usericon} className="h-8"></img>
        </div>
    </div>
   
   </>

};

export default Head