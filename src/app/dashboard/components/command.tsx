import { Command, CommandList, CommandInput } from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface ApplicationCommandProps {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}

export function ApplicationCommand({
  value,
  onValueChange,
}: ApplicationCommandProps) {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] h-fit">
      <CommandInput
        placeholder="Pesquise por um personagem..."
        value={value}
        onValueChange={onValueChange}
      />
      <CommandList />
    </Command>
  );
}
