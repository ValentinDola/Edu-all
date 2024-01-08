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
import { useDisclosure } from "@nextui-org/use-disclosure";

export const UserInfo = () => {
  const { data } = useSession();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex justify-between items-center">
          <p className="text-base mr-5">{data?.user?.name}</p>
          <Avatar
            isBordered
            src={data?.user?.image}
            className="cursor-pointer"
            onClick={onOpen}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded">
        <DropdownItem key="profile">Profile</DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => signOut}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
