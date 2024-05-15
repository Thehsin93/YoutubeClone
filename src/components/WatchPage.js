import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat";
const WatchPage = ()=>{
    let [searchparams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
 
    return <div className="flex flex-col col-span-11"><div className="p-2 m-2 flex justify-between">
        <div className="w-[65%]">
         <iframe className="w-[100%] h-[450px]"
           
            src={"https://www.youtube.com/embed/" + searchparams.get("v")+"?&autoplay=1&mute=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
          <div className="col-span-6">
            <LiveChat/>
          </div>
        
    </div>
    <CommentsContainer/>
    </div>
};

export default WatchPage