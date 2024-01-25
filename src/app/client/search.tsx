"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../components/icon";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Link from "next/link";

export const Search = () => {
  // State and functions for managing the Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const originalArray = [
    "Apple",
    "Banana",
    "Oran",
    "Grapes",
    "Mango",
    "Appe",
    "Banana",
    "Ornge",
    "Grapes",
    "Mngo",
  ];

  const handleSearch = () => {
    // Implement your search logic here using the searchQuery state
    console.log("Performing search for:", searchQuery);
    // You can make API calls, filter data, etc. based on the searchQuery
  };

  const handleChange = (e: { target: { value: string } }) => {
    // Update the searchQuery state when the input value changes
    const term = e.target.value;

    const filtered: any = originalArray.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredArray(filtered);
  };

  const handleKeyDown = (e: { key: string }) => {
    // Trigger search when the user presses Enter
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="z-0 group relative pr-9 inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
          type="button"
          aria-label="Quick search"
          onClick={onOpen}
        >
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="18"
            role="presentation"
            viewBox="0 0 24 24"
            width="18"
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            tabIndex={-1}
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M22 22L20 20"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
          Quick Search...
        </button>
      </div>
      <Modal
        size="2xl"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Displaying the name of the selected major in the Modal header */}
                <Input
                  radius="md"
                  size="lg"
                  placeholder="Search Career"
                  classNames={{
                    input: "text-sm pt-1 pl-4",
                  }}
                  startContent={
                    <svg
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      height="24"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="24"
                      className="text-default-400 text-lg"
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M22 22L20 20"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  }
                  onChange={handleChange}
                />
                {/* <div className="flex items-center w-full px-4 border-b border-default-400/50 dark:border-default-100">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-default-400 text-lg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <input
                    className="w-full px-2 h-14 font-sans text-lg outline-none rounded-none bg-transparent text-default-700 placeholder-default-500 dark:text-default-500 dark:placeholder:text-default-300"
                    placeholder="Search documentation"
                    cmdk-input=""
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    aria-autocomplete="list"
                    role="combobox"
                    aria-expanded="true"
                    aria-controls=":r130:"
                    aria-labelledby=":r131:"
                    id=":r132:"
                    type="text"
                    value=""
                  />
                  <kbd className="space-x-0.5 items-center font-sans text-center shadow-small bg-default-100 text-foreground-600 rounded-small hidden md:block border-none px-2 py-1 ml-2 font-medium text-[0.6rem]">
                    <span>ESC</span>
                  </kbd>
                </div> */}
              </ModalHeader>
              <ModalBody>
                {filteredArray.map((item, i) => (
                  <div
                    className="hover:bg-[#F1F2F2] w-full cursor-pointer"
                    key={i}
                  >
                    {/* Link to the detailed page for the subcategory */}
                    <Link
                      href={`/career/${i}`}
                      className="w-full justify-center items-center cursor-pointer"
                    >
                      {/* Subcategory Item */}
                      <div className="px-3 py-5">
                        <span className="text-base font-semibold">{item}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
