import React from "react";
import { InboxTemplate } from "./templates";
import "./Card.css";

export default function SimpleInboxCard() {
  const messages = [
    {
      name: "med aymen ben abdallah",
      text: "waiting for you in our meeting...",
      time: "21:30 PM",
    },
    {
      name: "ezio auditore",
      text: "we work in the dark to serve the light... we are assassins",
      time: "now",
    },
      {
      name: "codini team",
      text: "3 new messages in your inbox",
      time: "11:37 AM",
    },
      {
      name: "hamza ben jemaa",
      text: "don't forget to check the new design updates",
      time: "yesterday",
    },
  ];
  const handleSearchClick = () => {
    console.log("Search clicked");
  };
  const handleCalendarClick = () => {
    console.log("Calendar clicked");
  };

  const handleAddClick = () => {
    console.log("Add clicked");
  };

  const handleBookmarkClick = () => {
    console.log("Bookmark clicked");
  };

  const handleArchiveClick = () => {
    console.log("Archive clicked");
  };

  const handleMoreClick = () => {
    console.log("More clicked");
  };

  return (
    <InboxTemplate
      profileImage="hamzaicon.jpg"
      userName="Hamza Ben Jemaa"
      inboxLabel="All Inboxes"
      messages={messages}
      onSearchClick={handleSearchClick}
      onCalendarClick={handleCalendarClick}
      onAddClick={handleAddClick}
      onBookmarkClick={handleBookmarkClick}
      onArchiveClick={handleArchiveClick}
      onMoreClick={handleMoreClick}
    />
  );
}
