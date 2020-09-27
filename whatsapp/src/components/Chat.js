import React from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, DonutLarge, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>

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
                <p className="chat__message">
                    <span className="chat__name">Iron Man</span>
                    Hey kids.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">Iron Man</span>
                    Hey kids.
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                {/*value={input}
                           onChange={(e)
                               => setInput(e.target.value)}*/}

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
