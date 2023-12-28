import { z } from 'zod';

export const getIntlMessagesSchema = z.object({
  locale: z.string().min(2).max(5),
});
