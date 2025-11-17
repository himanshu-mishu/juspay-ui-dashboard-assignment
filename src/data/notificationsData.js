// Import relevant React Icons
import { FaBug, FaUserPlus, FaBell, FaUserFriends } from "react-icons/fa";

// Example profile images (consider using images if you have them)
const profileImages = {
  natalCraig: "https://ui-avatars.com/api/?name=Natali+Craig",
  drewCano:
    "https://ui-avatars.com/api/?name=Drew+Cano&background=EB5757&color=fff",
  orlandoDiggs:
    "https://ui-avatars.com/api/?name=Orlando+Diggs&background=F2994A&color=fff",
  andiLane:
    "https://ui-avatars.com/api/?name=Andi+Lane&background=9B51E0&color=fff",
  kateMorrison:
    "https://ui-avatars.com/api/?name=Kate+Morrison&background=27AE60&color=fff",
  korayOkumus:
    "https://ui-avatars.com/api/?name=Koray+Okumus&background=2D9CDB&color=fff",
};

export const notifications = [
  {
    id: 1,
    icon: FaBug,
    message: "You have a bug that needs...",
    timestamp: "Just now",
  },
  {
    id: 2,
    icon: FaUserPlus,
    message: "New user registered",
    timestamp: "59 minutes ago",
  },
  {
    id: 3,
    icon: FaBug,
    message: "You have a bug that needs...",
    timestamp: "12 hours ago",
  },
  {
    id: 4,
    icon: FaUserFriends,
    message: "Andi Lane subscribed to you",
    timestamp: "Today, 11:59 AM",
  },
];

export const activities = [
  {
    id: 1,
    icon: FaBug,
    description: "You have a bug that needs...",
    timestamp: "Just now",
    profile: profileImages.natalCraig,
    name: "Natali Craig",
  },
  {
    id: 2,
    icon: FaBell,
    description: "Released a new version",
    timestamp: "59 minutes ago",
    profile: profileImages.drewCano,
    name: "Drew Cano",
  },
  {
    id: 3,
    icon: FaBug,
    description: "Submitted a bug",
    timestamp: "12 hours ago",
    profile: profileImages.orlandoDiggs,
    name: "Orlando Diggs",
  },
  {
    id: 4,
    icon: FaBell,
    description: "Modified A data in Page X",
    timestamp: "Today, 11:59 AM",
    profile: profileImages.andiLane,
    name: "Andi Lane",
  },
];

export const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    profile: profileImages.natalCraig,
    status: "online",
  },
  {
    id: 2,
    name: "Drew Cano",
    profile: profileImages.drewCano,
    status: "offline",
  },
  {
    id: 3,
    name: "Orlando Diggs",
    profile: profileImages.orlandoDiggs,
    status: "offline",
  },
  {
    id: 4,
    name: "Andi Lane",
    profile: profileImages.andiLane,
    status: "offline",
  },
];
