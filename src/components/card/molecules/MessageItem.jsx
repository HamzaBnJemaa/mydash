import React from "react";
import { MessageSenderName, MessageBody, MessageTime } from "../atoms";
import "./MessageItem.css";

export default function MessageItem({ senderName, message, time }) {
  return (
    <article className="message-item">
      <MessageSenderName>{senderName}</MessageSenderName>
      <MessageBody>{message}</MessageBody>
      <MessageTime>{time}</MessageTime>
    </article>
  );
}
