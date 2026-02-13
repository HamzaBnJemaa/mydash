import React from "react";
import { ActionButton } from "../molecules";
import {
  CalendarIcon,
  AddIcon,
  BookmarkIcon,
  ArchiveIcon,
  MoreIcon,
} from "../atoms";
import "./BottomNavigation.css";

export default function BottomNavigation({
  onCalendarClick,
  onAddClick,
  onBookmarkClick,
  onArchiveClick,
  onMoreClick,
}) {
  const actions = [
    {
      id: "calendar",
      icon: CalendarIcon,
      title: "Calendar",
      onClick: onCalendarClick,
    },
    { id: "add", icon: AddIcon, title: "Add", onClick: onAddClick },
    {
      id: "bookmark",
      icon: BookmarkIcon,
      title: "Bookmark",
      onClick: onBookmarkClick,
    },
    {
      id: "archive",
      icon: ArchiveIcon,
      title: "Archive",
      onClick: onArchiveClick,
    },
    { id: "more", icon: MoreIcon, title: "More", onClick: onMoreClick },
  ];

  return (
    <nav className="bottom-navigation">
      {actions.map((action) => (
        <ActionButton
          key={action.id}
          icon={action.icon}
          onClick={action.onClick}
          ariaLabel={action.title}
          title={action.title}
        />
      ))}
    </nav>
  );
}
