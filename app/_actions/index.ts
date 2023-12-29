'use server';
import { getBackendApi } from '@/lib/axios';
import { getErrorMessage, getZodErrorMessage } from '@/lib/utils';
import { getIntlMessagesSchema } from '@/lib/validations';
import { z } from 'zod';

interface DataInput {
  keyword: string;
  group: string;
  Content: {
    content: string;
  }[];
}

export async function getIntlMessagesAction(
  rawData: z.infer<typeof getIntlMessagesSchema>
) {
  const zodResult = getIntlMessagesSchema.safeParse(rawData);
  if (!zodResult.success) {
    return {
      error: `getIntlMessagesAction ${getZodErrorMessage(zodResult)}`,
      data: null,
    };
  }
  const { locale } = zodResult.data;

  try {
    const { data } = (await getBackendApi(undefined, { locale }).get(
      '/keywords'
    )) as { data: DataInput[] };

    const result: { [id: string]: { [id: string]: string } } = {};

    data.forEach((item) => {
      const group = item.group;
      const key = item.keyword;
      const value = item.Content[0].content;

      if (!result[group]) {
        result[group] = {};
      }

      result[group][key] = value;
    });

    return { data: result, error: null };
  } catch (error) {
    return {
      error: `getIntlMessagesAction ${getErrorMessage(error)}`,
      data: null,
    };
  }
}
