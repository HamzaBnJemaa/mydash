import React from "react";
import { ProfileHeader } from "../molecules";
import "./ProfileSection.css";

export default function ProfileSection({
  profileImage,
  userName,
  inboxLabel="All Inboxes",
  onSearchClick,
}) {
  return (
    <section className="profile-section">
      <ProfileHeader
        profileImage={profileImage}
        userName={userName}
        inboxLabel={inboxLabel}
        onSearchClick={onSearchClick}
      />
    </section>
  );
}
