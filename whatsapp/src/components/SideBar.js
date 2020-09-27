import React from 'react';
import {Chat, DonutLarge, MoreVert, Search, SearchOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";

import '../css/SideBar.css'
import kunalDp from '../images/kunal-dp.jpg'

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
        </div>
    );
}

export default SideBar;
