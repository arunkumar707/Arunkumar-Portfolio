import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { Button, Input, Textarea, Label, FormError } from '@/components/ui'
import { contactSchema } from '../schemas/schemas'
import { CONTACT_DEFAULT_VALUES } from '../constants/constants'
import type { ContactFormProps, ContactFormValues } from '../types/types'

export function ContactForm({ onSubmit, isSubmitting }: ContactFormProps) {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
    defaultValues: CONTACT_DEFAULT_VALUES,
  })
  const { register, handleSubmit, formState: { errors } } = methods

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="contact-name" className="text-on-navy-muted">Name</Label>
            <Input id="contact-name" placeholder="Your name" error={Boolean(errors.name)}
              className="contact-field" {...register('name')} />
            <FormError message={errors.name?.message} />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="contact-email" className="text-on-navy-muted">Email</Label>
            <Input id="contact-email" type="email" placeholder="your@email.com" error={Boolean(errors.email)}
              className="contact-field" {...register('email')} />
            <FormError message={errors.email?.message} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="contact-subject" className="text-on-navy-muted">Subject</Label>
          <Input id="contact-subject" placeholder="What is this about?" error={Boolean(errors.subject)}
            className="contact-field" {...register('subject')} />
          <FormError message={errors.subject?.message} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="contact-message" className="text-on-navy-muted">Message</Label>
          <Textarea id="contact-message" rows={5} placeholder="Tell me about the opportunity…" error={Boolean(errors.message)}
            className="contact-field" {...register('message')} />
          <FormError message={errors.message?.message} />
        </div>
        <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting} className="w-full gap-2 justify-center">
          <Send size={13} strokeWidth={2} /> Send Message
        </Button>
      </form>
    </FormProvider>
  )
}
