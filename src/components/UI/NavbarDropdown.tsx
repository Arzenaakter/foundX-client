"use client";
import React from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Junior" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="profile"
          onClick={() => handleNavigation("/profile")}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="about"
          onClick={() => handleNavigation("/profile/about")}
        >
          About
        </DropdownItem>
        <DropdownItem
          key="create-post"
          onClick={() => handleNavigation("/profile/create-post")}
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          key="claim-requests"
          onClick={() => handleNavigation("/profile/claim-requests")}
        >
          Claim Requests
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => handleNavigation("/profile/settings")}
        >
          Settings
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
