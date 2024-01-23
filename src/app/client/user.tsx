"use client";

// Import necessary dependencies and components
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

// UserInfo component definition
export const UserInfo = () => {
  // Get user session data
  const { data }: any = useSession();

  // Next.js router
  const router = useRouter();

  // Hooks for handling dropdown visibility
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [open, setOpen] = useState(false);

  // Component rendering
  return (
    <>
      {/* Dropdown component for user information */}
      <Dropdown>
        {/* Dropdown trigger */}
        <DropdownTrigger>
          <div className="flex justify-between items-center">
            {/* Display user name */}
            <p className="text-base mr-5">{data?.user?.name}</p>

            {/* Avatar for the user, clicking opens the dropdown */}
            <Avatar
              isBordered
              src={data?.user?.image}
              className="cursor-pointer"
              aria-label="user"
              onClick={onOpen}
            />
          </div>
        </DropdownTrigger>

        {/* Dropdown menu */}
        <DropdownMenu variant="faded">
          {/* Dropdown items for user actions */}
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

// Comments:

// Imports:

// All necessary dependencies and components are imported at the beginning of the file.
// Hooks:

// The component uses hooks such as useSession to get user data and useRouter for navigation.
// Dropdown Component:

// The Dropdown component is used from the NextUI library to create a dropdown menu.
// Dropdown Trigger:

// The trigger for the dropdown displays the user's name and an avatar, clicking on which opens the dropdown.
// Dropdown Menu:

// The dropdown menu contains items like "Profile" and "Logout" for user actions.
// Dropdown Item Actions:

// Clicking on the "Profile" item navigates the user to the profile page.
// Clicking on the "Logout" item triggers the sign-out process, redirecting to the login page.
// UseDisclosure Hook:

// The useDisclosure hook is used to handle the visibility of the dropdown.
// State Management:

// The component uses useState to manage the state of the dropdown.
// Avatar Component:

// The Avatar component displays the user's image and acts as a trigger for the dropdown.
// Comments:

// Comments are added throughout the code for better readability and understanding.
