"use client";
import { useState } from "react";
import { ApplicationCommand } from "./components/command";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col w-full p-3 ">
      <ApplicationCommand
        value={query}
        onValueChange={setQuery}
      ></ApplicationCommand>
      <div>teste</div>
    </div>
  );
}
