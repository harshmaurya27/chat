import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import LeftSidebar from "../../componants/LeftSidebar/LeftSidebar";
import ChatBox from "../../componants/ChatBox/ChatBox";
import RightSidebar from "../../componants/RightSidebar/RightSidebar";
import { AppContext } from "../../context/AppContext";

const Chat = () => {
  const { chatData, userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (chatData && userData) {
      setLoading(false);
    }
  }, [chatData, userData]);
  return (
    <div className="chat">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="chat-container">
          <LeftSidebar />
          <ChatBox />
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Chat;
