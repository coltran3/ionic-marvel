"use client";
import { TypographyH2, TypographyLarge } from "@/components/ui/typography";
import { useCharacter } from "@/hooks/queries/use-character";
import { getImgSrc } from "@/lib/utils";

interface CharacterPageProps {
  params: { characterId: string };
}

export default function CharacterPage({
  params: { characterId },
}: CharacterPageProps) {
  const { data: characterResponse, isLoading } = useCharacter({ characterId });

  const character = characterResponse?.data?.results?.[0];
  return (
    <div className="p-3 w-full">
      {isLoading ? (
        <div className="text-center">Carregando personagem...</div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <TypographyH2>{character?.name}</TypographyH2>
            <TypographyLarge>{character?.description}</TypographyLarge>
          </div>

          <div className="p-1 border-gray-300 rounded-md border self-start">
            <img
              className="w-96 h-96"
              src={getImgSrc({
                path: character?.thumbnail?.path ?? "",
                extension: character?.thumbnail?.extension ?? "",
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
}
