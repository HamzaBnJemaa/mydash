import React from "react";
import { ProfileIcon, UserName, Subtitle, DropdownIcon, IconButton } from "../atoms";
import "./ProfileHeader.css";

export default function ProfileHeader({
  profileImage,
  userName,
  inboxLabel = "All Inboxes",
  onSearchClick,
}) {
  return (
    <div className="profile-header">
      <ProfileIcon src={profileImage} alt="user profile" size={40} />
      <div className="profile-header__info">
        <UserName>{userName}</UserName>
        <Subtitle>
          {inboxLabel}
          <DropdownIcon />
        </Subtitle>
      </div>
      <IconButton
        onClick={onSearchClick}
        variant="search"
        ariaLabel="search"
        className="profile-header__search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >med aymen ben abdallah

          <g fill="none">
            <path
              fill="#151515"
              d="M18 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0"
            />
            <path
              stroke="#151515"
              strokeLinecap="round"
              strokeWidth="2"
              d="m20 20l-2-2"
            />
          </g>
        </svg>
      </IconButton>
    </div>
  );
}
