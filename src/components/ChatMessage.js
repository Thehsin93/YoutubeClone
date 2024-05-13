import { usericon } from "../utils/Constants"
const ChatMessage = ({name,message})=>{
    return <div className="flex items-center">
        <img atl="userlogo" src={usericon} className="h-8"></img>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
}
export default ChatMessage