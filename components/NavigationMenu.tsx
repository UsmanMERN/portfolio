"use client"

import * as React from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavigationMenu() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)


  const navigate = (route: string) => {
    router.push(route);
  };
  React.useEffect(() => {

    const KeyBoardShortcuts = (e: KeyboardEvent) => {

      const key = e.key
      if ((key === "j" || key === "J") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
      if (open) {

        if ((key === 'h') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
          navigate("/");
        } else if ((key === 'a') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
          navigate("/about");
        } else if ((key === 'g') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
          navigate("/github");
        } else if ((key === 't') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
          navigate("/tech");
        } else if ((key === 'p') && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
          navigate("/projects");
        }
      } else {
        if ((key === 'h') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/");
        } else if ((key === 'a') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/about");
        } else if ((key === 'g') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/github");
        } else if ((key === 't') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/tech");
        } else if ((key === 'p') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/projects");
        } else if ((key === 'c') && (e.metaKey || e.ctrlKey) && e.altKey) {
          e.preventDefault();
          navigate("/contact");
        }
      }


    }

    document.addEventListener("keydown", KeyBoardShortcuts);


    return () => {
      document.removeEventListener("keydown", KeyBoardShortcuts);
    };
    // react - hooks / exhaustive - deps
  }, [open]);
  return (

    <>
      <kbd className="inline-flex h-5 select-none items-center gap-1 rounded-lg font-mono text-[10px] font-medium p-5 pop-out border-spacing-12 cursor-pointer fixed right-4 md:right-12 bottom-14 bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all duration-300 " onClick={() => { setOpen(!open) }}>
        <span className="text-lg">⌘+J</span>
      </kbd>
      {/* </Button> */}
      <CommandDialog open={open} onOpenChange={setOpen} data-theme={'dark'}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList >
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="pages">
            <Link onClick={() => { setOpen(!open) }} href={'/'} >
              <CommandItem >
                Home
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘H</CommandShortcut>
              </CommandItem>
            </Link>
            <Link onClick={() => { setOpen(!open) }} href={'/about'}>
              <CommandItem>
                About
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘A</CommandShortcut>
              </CommandItem>
            </Link>
            <Link onClick={() => { setOpen(!open) }} href={'/github'}>
              <CommandItem>
                Github
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘G</CommandShortcut>
              </CommandItem>
            </Link>
            <Link onClick={() => { setOpen(!open) }} href={'/projects'}>
              <CommandItem>
                Projects
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘P</CommandShortcut>
              </CommandItem>
            </Link>
            <Link onClick={() => { setOpen(!open) }} href={'/tech'}>
              <CommandItem>
                Tech
                <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘ alt T</CommandShortcut>
              </CommandItem>
            </Link>
          </CommandGroup>
          {/* <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <span>Profile</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Contact</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
              <CommandShortcut className=" bg-gray-400 text-white shadow-lg px-1 rounded">⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>

  )
}