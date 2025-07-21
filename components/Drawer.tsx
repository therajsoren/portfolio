"use client";

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
import { FormEvent, useEffect, useState } from "react";
import Toast, { ToastType } from "@/components/toast";

const DrawerComponent = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const triggerToast = (type: ToastType, message: string) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  useEffect(() => setMounted(true), []);

  if(!mounted) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        triggerToast("success", "Message sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        triggerToast("error", "Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Submission error", error);
      triggerToast("error", "Submission failed. Please check connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        className="z-[100]"
      />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative font-mono cursor-pointer">
            <ShineBorder
              className="absolute"
              shineColor={theme.theme === "dark" ? "white" : "black"}
            />
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for work
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          {/* <div className="container mx-auto w-full max-w-md font-mono"> */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-md font-mono">
              <DrawerHeader>
                <DrawerTitle className="text-center">Contact me</DrawerTitle>
                <DrawerDescription className="text-left">
                  If you have any questions, feel free to reach out.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={subject}
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Submit"}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          {/* </div> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
