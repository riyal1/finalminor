


import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";

function ChatArea({ name = "Test1", timestamp = "12:00am" }) {
    return (
        <div className="chatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{name[0]}</p>
                <div className="header-text">
                    <div className="header-text">
                        <p className="con-title">{name}</p>
                        <p className="con-timestamp">{timestamp}</p>
                    </div>
                    </div>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
               
            </div>

            <div className="messages-container">
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>

            <div className="text-input-area">
                <input placeholder="Type a Message " className="search-box" />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatArea;
