import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName,makeRandomMessage } from "../utils/helper";



const LiveChat = ()=>{
    const [newmsg,setNewmsg] = useState();
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message :makeRandomMessage(35)
            }))
        },2000);
        return ()=>{
            clearInterval(i);
        }
    },[])

    return <><div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse">
          <div>
          {chatMessages.map((msg,index)=> <ChatMessage key={index} name={msg.name} message={msg.message}/>)
            }
            </div>
    </div>
    <form className="w-full p-2 m-2 border border-black" onSubmit={
        (e)=>{e.preventDefault();
        dispatch(addMessage({
            name:'Thehsin',
            message :newmsg
        }));
        setNewmsg('');
        }}>
            <input type="text" value={newmsg} onChange={(e)=>setNewmsg(e.target.value)} className="w-96"></input>
            <button className="px-2 mx-2 bg-gray-400 rounded-xl">Enter</button>
    </form>
    </>
};

export default LiveChat