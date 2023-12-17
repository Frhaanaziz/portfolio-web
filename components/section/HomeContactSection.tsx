'use client';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import { animationVariant, rightAnimationVariant } from '@/lib/animations';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from 'zod';
import { Textarea } from '../ui/textarea';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { cn, getErrorMessage } from '@/lib/utils';
import { ContactFormSchema } from '@/lib/validations/contact';
import { sendEmailAction } from '@/app/_actions/contact';
import AnimationDiv from '../AnimationDiv';

const HomeContactSection = () => {
  const t = useTranslations('home');

  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues,
  });
  const { handleSubmit, control, formState, reset } = form;
  const { isSubmitting, errors } = formState;

  async function onSubmit(formValues: z.infer<typeof ContactFormSchema>) {
    try {
      const { error } = await sendEmailAction(formValues);
      if (error) throw new Error(error);

      toast.success('Message sent!');
      reset(defaultValues);
    } catch (error) {
      toast.error('Failed to send message, please try again.');
      console.error(`HomeContactSection ${getErrorMessage(error)}`);
    }
  }

  return (
    <section className="py-20 bg-accent" id="contact">
      <div className="container  max-w-[900px]">
        <motion.h2
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="text-center text-3xl lg:text-4xl font-medium"
        >
          {t('contactHeading')}
        </motion.h2>
        <motion.div
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="flex justify-center my-5 not-sr-only"
        >
          <div className="h-1 w-10 bg-primary rounded-lg" />
        </motion.div>

        <motion.p
          variants={animationVariant}
          initial="initial"
          whileInView={'animate'}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl lg:text-lg mx-auto text-center"
        >
          <Balancer preferNative={false}>{t('contactSubHeading')}</Balancer>
        </motion.p>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 border rounded-xl p-10 mt-16 shadow bg-card"
          >
            <FormField
              control={control}
              name="name"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <AnimationDiv variants={rightAnimationVariant}>
                    <FormLabel>{t('contactFormField1Label')}</FormLabel>
                  </AnimationDiv>
                  <FormControl>
                    <AnimationDiv>
                      <Input
                        placeholder={t('contactFormField1Placeholder')}
                        {...field}
                      />
                    </AnimationDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <AnimationDiv variants={rightAnimationVariant}>
                    <FormLabel>{t('contactFormField2Label')}</FormLabel>
                  </AnimationDiv>
                  <FormControl>
                    <AnimationDiv>
                      <Input
                        placeholder={t('contactFormField2Placeholder')}
                        {...field}
                      />
                    </AnimationDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="message"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <AnimationDiv variants={rightAnimationVariant}>
                    <FormLabel>{t('contactFormField3Label')}</FormLabel>{' '}
                  </AnimationDiv>
                  <FormControl>
                    <AnimationDiv>
                      <Textarea
                        placeholder={t('contactFormField3Placeholder')}
                        className="min-h-[200px]"
                        {...field}
                      />
                    </AnimationDiv>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.button
              variants={rightAnimationVariant}
              initial="initial"
              whileInView={'animate'}
              viewport={{ once: true }}
              className={cn(
                buttonVariants(),
                'disabled:bg-primary/50 disabled:text-primary-foreground/50'
              )}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              {t('contactFormSubmitButtonLabel')}
            </motion.button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default HomeContactSection;
