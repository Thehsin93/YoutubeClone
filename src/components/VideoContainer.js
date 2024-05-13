import { useState,useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import { Link } from "react-router-dom";
const VideoContainer = ()=>{
    const [Videos,setVideos] = useState([]);
useEffect(()=>{
    getVideos();
},[]);

const getVideos = async()=>{
  
const data = await fetch(YOUTUBE_VIDEOS_API);
const json =await data.json();

setVideos(json.items);
}

if(Videos.length==0)return;

    return <div className="flex flex-wrap">{
Videos.map((video)=><Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}></VideoCard></Link>)
   
}
</div>
};

export default VideoContainer