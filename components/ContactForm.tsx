"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2, Send } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = z.object({
    username: z.string().min(3, {
      message: "Please enter a valid name.",
    }),
    email: z.string().email().min(6, {
      message: "Please enter a valid email address.",
    }),
    comment: z.string().min(10, {
      message: "Please provide a bit more detail about your inquiry.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const response = await fetch("https://formspree.io/f/xbjvpozd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        setIsLoading(false)
        toast.success("Message sent! I'll get back to you shortly.")
        form.reset({
            username: "",
            email: "",
            comment: ""
        });
      } else {
        setIsLoading(false)
        toast.error("Submission failed. Please try again or email me directly.")
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error);
      toast.error("An error occurred. Please try again later.")
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    className="bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 rounded-none h-14 px-0 text-lg focus-visible:ring-0 focus-visible:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    className="bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 rounded-none h-14 px-0 text-lg focus-visible:ring-0 focus-visible:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 font-medium"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project or inquiry..."
                    className="bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 rounded-none min-h-[120px] px-0 text-lg focus-visible:ring-0 focus-visible:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 font-medium resize-none overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-8">
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300 rounded-2xl text-lg font-black transition-all group flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
      
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        theme="dark" 
      />
    </div>
  );
}
