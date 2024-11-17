"use client";
import { useEffect, useState } from "react";
import { ApplicationCommand } from "./components/command";
import { useCharacters } from "@/hooks/queries/use-characters";
import { CharacterCard } from "./components/character-card";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const { data: charactersResponse } = useCharacters({
    limit: 10,
    offset: 0,
    nameStartsWith: debouncedQuery,
  });

  return (
    <div className="flex flex-col w-full p-3 gap-3">
      <ApplicationCommand value={query} onValueChange={setQuery} />
      <div className="self-center flex gap-2 flex-wrap mx-auto justify-center">
        {charactersResponse?.data?.results?.map((character) => (
          <CharacterCard
            key={character.id}
            title={character.name}
            imgSrc={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
          />
        ))}
      </div>
    </div>
  );
}
