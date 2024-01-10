"use client";

import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import { majorsSkills } from "@/app/components/data";
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
import Colleges from "./college";

export default function Majors() {
  const { assData, data } = useGlobalContext();

  const [names, setNames]: any = useState([]);
  const [skill, setSkill] = useState("");
  const [major, setMajor]: any = useState([]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const transformedData = Array.isArray(assData) ? assData : [assData];

    const skill = transformedData.map((item) => item.skill);
    setSkill(skill.toString());
    const matchedMajors = majorsSkills.majors.filter((major) =>
      major.skills.includes(skill.toString())
    );

    const majorName = matchedMajors.map((major) => major.name);
    const removeDuplicates = (array: any[]) => {
      return array.filter(
        (value: any, index: any, self: string | any[]) =>
          self.indexOf(value) === index
      );
    };
    const uniqueMajors = removeDuplicates(majorName);
    setNames(uniqueMajors);
  }, [skill]);

  const getMajor = (name: string) => {
    // Assuming majorsSkills?.majors is an array of majors
    const foundMajor =
      majorsSkills?.majors.find((major) => major.name === name) || null;

    setMajor(foundMajor);
    onOpen();
  };
  return (
    <div>
      <div className="p-2">
        These are the majors we recommende based on your skill of {skill}
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {names.map((item: any, i: number) => (
          <li
            key={i}
            className="p-2  rounded-sm hover:bg-[#F1F2F2] hover:text-[#00aeef] cursor-pointer "
            onClick={() => getMajor(item)}
          >
            <p className="text-base  font-semibold">{item}</p>
          </li>
        ))}
      </ul>
      <Modal
        size="5xl"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {major?.name}
              </ModalHeader>
              <ModalBody>
                <Tabs className="px-8 mx-4 " aria-label="Options">
                  <Tab key="description" title="Description">
                    <div className="p-4">
                      <div className="p-2 font-semibold">
                        {" "}
                        What is {major?.name}{" "}
                      </div>
                      <div className="p-2">{major?.description}</div>
                    </div>
                  </Tab>
                  <Tab key="careers" title="Careers">
                    <div className="p-2">
                      What jobs and careers are associated to a major in{" "}
                      {major?.name}?
                    </div>
                    <ul className="grid grid-cols-2  list-disc ml-7">
                      {major?.careers?.map((item: any, i: number) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
