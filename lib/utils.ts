import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const array1 = Array.from({ length: 1 }, (_, i) => i + 1);
export const array2 = Array.from({ length: 2 }, (_, i) => i + 1);
export const array3 = Array.from({ length: 3 }, (_, i) => i + 1);
export const array4 = Array.from({ length: 4 }, (_, i) => i + 1);
export const array5 = Array.from({ length: 5 }, (_, i) => i + 1);
export const array6 = Array.from({ length: 6 }, (_, i) => i + 1);
export const array7 = Array.from({ length: 7 }, (_, i) => i + 1);
