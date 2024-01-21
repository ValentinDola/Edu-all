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
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UserInfo = () => {
  const { data }: any = useSession();
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div className="flex justify-between items-center">
            <p className="text-base mr-5">{data?.user?.name}</p>
            <Avatar
              isBordered
              src={data?.user?.image}
              className="cursor-pointer"
              aria-label="user"
              onClick={onOpen}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu variant="faded">
          <DropdownItem
            key="profile"
            onClick={() => router.replace("/profile")}
          >
            Profile
          </DropdownItem>

          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/login`,
              })
            }
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
