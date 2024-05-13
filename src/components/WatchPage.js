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
 
    return <div className="flex flex-col w-screen"><div className="p-2 m-2 flex">
        <div>
         <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")+"?&autoplay=1&mute=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
          <div className="w-screen">
            <LiveChat/>
          </div>
        
    </div>
    <CommentsContainer/>
    </div>
};

export default WatchPage