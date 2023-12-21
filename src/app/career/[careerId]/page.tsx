"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Cards from "./cards";
import Documents from "./document";
import Video from "./video";
import Finance from "./finance";

export default function Dashboard({ params }: { params: { careerId: any } }) {
  return (
    <section className="mt-7 mx-auto max-w-7xl py-7">
      <Tabs className="p-8 mx-4 mt-7 " aria-label="Options">
        <Tab key="dashboard" title="Dashboard">
          <Cards id={params.careerId} />
        </Tab>
        <Tab key="documents" title="Doucments">
          <Documents />
        </Tab>
        <Tab key="Videos" title="Videos">
          <Video />
        </Tab>
        <Tab key="finance" title="Finance">
          <Finance />
        </Tab>
      </Tabs>
    </section>
  );
}
