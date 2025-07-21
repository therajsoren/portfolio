"use client";
import Toast, { ToastType } from "@/components/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useEffect, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      if (response.ok) {
        triggerToast("success", "Message sent successfully!");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        triggerToast("error", "Something went wrong, please try again later!");
        return;
      }
    } catch (error) {
      console.error("Submission error", error);
      triggerToast("error", "Submission failed. Please try again.");
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
      <div className="p-16 sm:px-24 lg:p-0">
        <div className="mt-[4rem">
          <h1 className="text-4xl font-black tracking-tighter">Contact me!</h1>
          <p className="h-1 bg-gradient-to-t from-white to-green-400 w-1/3 mx-auto p-1"></p>
        </div>
        <div className="mt-[1rem]">
          <h1 className="text-2xl font-black">Get in touch!</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between max-w-xl mx-auto space-x-3 mt-8 p-4">
              <div className="w-full space-y-2 mr-3">
                <Label>Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full space-y-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="max-w-xl mx-auto space-y-3 p-4">
              <Label>Message</Label>
              <Textarea
                className="pb-20"
                id="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="max-w-xl mx-auto justify-end flex p-4">
              <Button
                type="submit"
                className="cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
