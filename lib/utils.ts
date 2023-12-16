import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

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
export const array8 = Array.from({ length: 8 }, (_, i) => i + 1);
export const array9 = Array.from({ length: 9 }, (_, i) => i + 1);

export function getZodErrorMessage(result: z.SafeParseError<any>) {
  let errorMessage = '';

  result.error.issues.forEach((issue) => {
    errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
  });

  return errorMessage;
}

export function getErrorMessage(error: unknown) {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong, please try again later.';
  }

  return message;
}
