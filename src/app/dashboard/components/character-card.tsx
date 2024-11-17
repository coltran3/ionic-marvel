import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CharacterCardProps {
  title?: string;
  imgSrc?: string;
}

export function CharacterCard({ title, imgSrc }: CharacterCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img className="object-cover h-56 w-56" src={imgSrc} />
      </CardContent>
    </Card>
  );
}
