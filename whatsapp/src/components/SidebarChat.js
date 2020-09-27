import React from 'react';
import '../css/SidebarChat.css'
import {Avatar} from "@material-ui/core";

function SidebarChat({avatarSrc, roomName, message}) {
    return (
        <div className="sideBarChat">
            <Avatar src={avatarSrc}/>
            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default SidebarChat;
