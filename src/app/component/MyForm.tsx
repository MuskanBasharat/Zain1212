"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
 email: z.string()
   .email({ message: "Invalid email address." })
  .endsWith("@gmail.com", { message: "Email must end with @gmail.com" }),

  message: z.string().min(2, {
    message: "Message must not be empty.",
  }),
})

export function MyForm() {
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })
   
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
  console.log(values)
};
  return (
    <div className="my-form">
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem  className="feild">
              <FormLabel >Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" className="input-form" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem  className="feild">
              <FormLabel >Email</FormLabel>
              <FormControl>
                <Input placeholder="name@gmail.com" className="input-form" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem  className="feild">
              <FormLabel >Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here..." className="input-form" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}