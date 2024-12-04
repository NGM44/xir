import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function limitString(str: string, limit: number) {
  if (str.length > limit) {
    return str.substring(0, limit).concat(" . . .");
  } else {
    return str.substring(0, limit);
  }
}
