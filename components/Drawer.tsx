import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ShineBorder } from "./magicui/shine-border";
import { useTheme } from "next-themes";
import { FormEvent, useState } from "react";
const DrawerComponent = () => {
  const theme = useTheme();

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="border-2 rounded-4xl px-4 py-1 cursor-pointer flex items-center gap-2">
          <ShineBorder
            shineColor={theme.theme === "dark" ? "white" : "black"}
          />
          <span className="relative flex items-center">
            <span className="animate-ping h-full w-full rounded-full absolute bg-green-400 opacity-75"></span>
            <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          Available for work
        </div>
      </DrawerTrigger>
      <DrawerContent className="container mx-auto flex justify-center items-center">
        <DrawerHeader>
          <DrawerTitle className="text-left">Contact me</DrawerTitle>
          <DrawerDescription className="text-left">
            If you have any questions feel free to contact me
          </DrawerDescription>
          <div className="flex flex-col w-full mx-auto space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Subject</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea />
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row items-center justify-between min-w-xs mx-auto mb-[4rem] pt-[1rem]">
          <div className="grid grid-cols-2 w-full gap-3">
            <Button type="submit">Submit</Button>
            <DrawerClose>Cancel</DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerComponent;
