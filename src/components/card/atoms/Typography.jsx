import React from "react";
import "./Typography.css";

export function UserName({ children, className = "" }) {
  return <div className={`user-name ${className}`}>{children}</div>;
}
export function Subtitle({ children, className = "" }) {
  return <div className={`subtitle ${className}`}>{children}</div>;
}
export function MessageSenderName({ children, className = "" }) {
  return <div className={`message-sender-name ${className}`}>{children}</div>;
}

export function MessageBody({ children, className = "" }) {
  return <div className={`message-body ${className}`}>{children}</div>;
}

export function MessageTime({ children, className = "" }) {
  return <div className={`message-time ${className}`}>{children}</div>;
}
