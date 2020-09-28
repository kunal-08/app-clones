import React, {useState} from 'react';
import '../css/Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, DonutLarge, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";

import ironMan from '../images/iron-man.jpeg';
import axios from "../axios";


function Chat({messages}) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        const d = new Date();
        const currentTime = d.toUTCString();

        await axios.post('/messages/new',
            {
                message: input,
                name: "Iron Man",
                timestamp: currentTime,
                received: false
            });

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={ironMan}/>

                <div className="chat__headerInfo">
                    <h3>Iron Man</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton color="inherit">
                        <SearchOutlined/>
                    </IconButton>

                    <IconButton color="inherit">
                        <AttachFile/>
                    </IconButton>

                    <IconButton color="inherit">
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${!message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <IconButton color="inherit">
                    <InsertEmoticon/>
                </IconButton>

                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}
                           placeholder="Type a message"
                           type="text"/>

                    <button onClick={sendMessage}
                            type="submit">
                        Send a messgae
                    </button>
                </form>

                <IconButton color="inherit">
                    <Mic/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
