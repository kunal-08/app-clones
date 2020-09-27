import React from 'react';
import '../css/SidebarChat.css'
import {Avatar} from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sideBarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is a live room </p>
            </div>
        </div>
    );
}

export default SidebarChat;
