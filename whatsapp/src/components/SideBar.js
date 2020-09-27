import React from 'react';
import {Chat, DonutLarge, MoreVert, Search, SearchOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";

import '../css/SideBar.css'
import kunalDp from '../images/kunal-dp.jpg'

import spiderMan from '../images/spider-man.jpeg'
import captainA from '../images/capt-america.jpeg'
import ironMan from '../images/iron-man.jpeg'
import thor from '../images/thor.jpeg'


import SidebarChat from "./SidebarChat";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={kunalDp}/>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>

                    <IconButton>
                        <Chat/>
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Seach or start a new chat"
                           type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat avatarSrc={ironMan} roomName="Iron Man" message="Hey kids."/>
                <SidebarChat avatarSrc={captainA} roomName="Captain America" message="Hey boi"/>
                <SidebarChat avatarSrc={thor} roomName="King of Asgard" message="Lol"/>
                <SidebarChat avatarSrc={spiderMan} roomName="Peter Parker" message="Hello Mr. Stark"/>
            </div>
        </div>
    );
}

export default SideBar;
