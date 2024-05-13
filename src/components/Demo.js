import { useState } from "react";
const Demo = ()=>{
    const [text,setText] = useState("");
return  <div>
<div>
    <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}/>
</div>
</div>
}
export default Demo