import React, {useEffect, useState} from 'react';
import './App.css';
import Pusher from 'pusher-js';
import axios from './axios';
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Login from "./components/Login";

function App() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('/messages/sync')
            .then(response => {
                setMessages(response.data);
            })
    }, []);

    useEffect(() => {
        const pusher = new Pusher('5e07775d88f0e84b4a88', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (newMessages) {
            setMessages([...messages, newMessages])
        });

        // Cleaner function
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }

    }, [messages]);

    console.log(messages);

    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    <Switch>
                        <Route path="/">
                            <Login/>
                        </Route>

                        <Route path="/chat">
                            <SideBar/>
                            <Chat messages={messages}/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
