"use client";

import { Avatar } from "@nextui-org/avatar";
import { signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex justify-between items-center">
          <p className="text-base mr-5">charlotte</p>
          <Avatar isBordered />
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded">
        <DropdownItem key="profile">Profile</DropdownItem>

        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
