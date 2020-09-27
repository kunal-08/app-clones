import React, {useEffect} from 'react';
import './App.css';
import Pusher from 'pusher-js';

import SideBar from "./components/SideBar";
import Chat from "./components/Chat";

function App() {

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        const pusher = new Pusher('5e07775d88f0e84b4a88', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function (data) {
            alert(JSON.stringify(data));
        });

    }, []);

    return (
        <div className="app">
            <div className="app__body">
                <SideBar/>
                <Chat/>
            </div>
        </div>
    );
}

export default App;
