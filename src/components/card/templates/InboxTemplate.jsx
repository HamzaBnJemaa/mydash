import React from "react";
import {
  ProfileSection,
  MessagesSection,
  BottomNavigation,
} from "../organisms";
import "./InboxTemplate.css";

export default function InboxTemplate({
  profileImage,
  userName,
  inboxLabel = "All Inboxes",
  messages = [],
  onSearchClick,
  onCalendarClick,
  onAddClick,
  onBookmarkClick,
  onArchiveClick,
  onMoreClick,
}) {
  return (
    <div className="inbox-template">
      <ProfileSection
        profileImage={profileImage}
        userName={userName}
        inboxLabel={inboxLabel}
        onSearchClick={onSearchClick}
      />
      <MessagesSection messages={messages} />
      <BottomNavigation
        onCalendarClick={onCalendarClick}
        onAddClick={onAddClick}
        onBookmarkClick={onBookmarkClick}
        onArchiveClick={onArchiveClick}
        onMoreClick={onMoreClick}
      />
    </div>
  );
}
