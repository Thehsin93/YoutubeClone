const VideoCard = ({info})=>{
    
    
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    return <div className="p-2 m-2 w-80">
        <img className="rounded-2xl p-2 m-2 w-96" src={thumbnails.medium.url}></img>
        <ul>
            <li className="font-bold p-2">{title}</li>
            <li className="px-2">{channelTitle}</li>
            <li className="px-2">{statistics.viewCount} views</li>
        </ul>
    </div>
};
export default VideoCard