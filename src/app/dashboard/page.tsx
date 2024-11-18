"use client";
import { useEffect, useState } from "react";
import { ApplicationCommand } from "./components/command";
import { useCharacters } from "@/hooks/queries/use-characters";
import { CharacterCard } from "./components/character-card";
import { ApplicationPagination } from "@/components/app-pagination";
import Link from "next/link";
import { getImgSrc } from "@/lib/utils";

const PAGE_LIMIT = 15;

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(0);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const { data: charactersResponse, isLoading } = useCharacters({
    limit: PAGE_LIMIT,
    offset: offset,
    nameStartsWith: debouncedQuery,
  });

  function handleChangePage(nextPage: number) {
    setOffset(nextPage * PAGE_LIMIT);
  }

  return (
    <div className="flex flex-col w-full p-3 gap-3">
      <ApplicationCommand value={query} onValueChange={setQuery} />
      {isLoading ? (
        <div className="mx-auto">Carregando personagens...</div>
      ) : (
        <div className="self-center flex gap-2 flex-wrap mx-auto justify-center">
          {charactersResponse?.data?.results?.map((character) => (
            <Link href={`/dashboard/character/${character.id}`}>
              <CharacterCard
                key={character.id}
                title={character.name}
                imgSrc={getImgSrc({
                  path: character?.thumbnail?.path ?? "",
                  extension: character?.thumbnail?.extension ?? "",
                })}
              />
            </Link>
          ))}
        </div>
      )}
      <ApplicationPagination
        onChangePage={handleChangePage}
        currentPage={offset / PAGE_LIMIT}
        pagesAmount={
          charactersResponse?.data?.total
            ? Math.floor(charactersResponse.data.total / PAGE_LIMIT)
            : 0
        }
      />
    </div>
  );
}
