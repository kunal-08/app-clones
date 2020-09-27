import React from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, DonutLarge, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";

import ironMan from '../images/iron-man.jpeg'


function Chat({messages}) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={ironMan}/>

                <div className="chat__headerInfo">
                    <h3>Iron Man</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>

                    <IconButton>
                        <AttachFile/>
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>

                <form>
                    <input placeholder="Type a message"
                           type="text"/>

                    <button
                        type="submit">
                        Send a messgae
                    </button>
                </form>
                <Mic/>
            </div>
        </div>
    );
}

export default Chat;
