import React from "react";
import { MessageItem } from "../molecules";
import "./MessagesSection.css";

export default function MessagesSection({ messages = [] }) {
  return (
    <section className="messages-section">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <MessageItem
            key={index}
            senderName={msg.name}
            message={msg.text}
            time={msg.time}
          />
        ))}
      </div>
    </section>
  );
}
