"use client";
import { useEffect, useState } from "react";
import { ApplicationCommand } from "./components/command";
import { useCharacters } from "@/hooks/queries/use-characters";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  const { data: charactersResponse } = useCharacters({
    limit: 10,
    offset: 0,
    nameStartsWith: query,
  });

  useEffect(() => {
    console.log(charactersResponse);
  });

  return (
    <div className="flex flex-col w-full p-3 ">
      <ApplicationCommand value={query} onValueChange={setQuery} />
      <div>
        {charactersResponse?.data?.results?.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </div>
    </div>
  );
}
