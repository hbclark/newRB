"use client"
import {useState} from 'react';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineMinimize } from "react-icons/md";

function ChatFrom(){
    const [isChatBoxOpen,setIsChatBoxOpen] = useState(false);
    return(
    
        <form>
            
            <div className="relative bg-rust-300">
                <button><MdOutlineMinimize /></button>
                
            <h2> Chat with us</h2><label htmlFor="help" className="sr-only"> help</label>
            <input type="text" id="help" placeholder="How can we help you?" /></div>
            

        </form>
    )
}
export default function ChatButton() {
    const [isChatBoxOpen,setIsChatBoxOpen] = useState(false);
  return (
    <div className="fixed bottom-20  right-20 bg-rust-300">
        
        <IoChatbubbleEllipsesOutline />
    </div>
  )
}
