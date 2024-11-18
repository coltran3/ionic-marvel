import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface GetImgSrcParams {
  path: string;
  extension: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImgSrc({ path, extension }: GetImgSrcParams) {
  return `${path}.${extension}`;
}
