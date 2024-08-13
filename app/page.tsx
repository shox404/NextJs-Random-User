"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import RandomUser from "./pages/RandomUser";
import Users from "./pages/Users";
import OneUser from "./pages/OneUser";

export default function Home() {
  return (
    <main className="h-screen flex items-center flex-col py-3">
      <Tabs aria-label="Options">
        <Tab key="random-user" title="Random User">
          <RandomUser />
        </Tab>
        <Tab key="users" title="Users">
          <Users />
        </Tab>
        <Tab key="one-user" title="One User">
          <OneUser />
        </Tab>
      </Tabs>
    </main>
  );
}
