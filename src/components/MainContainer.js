import ButtonList from "./ButtonList";
import Sidebar from "./Sidebar";
import VideoCardList from "./VideoCardList";
import VideoContainer  from "./VideoContainer"
const MainContainer = ()=>{
    return <div className="col-span-11">
        <ButtonList/>
        <VideoContainer/>
    </div>
};

export default MainContainer