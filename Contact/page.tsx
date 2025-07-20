import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div>
      <div className="mt-[4rem">
        <h1 className="text-4xl font-black tracking-tighter">Contact me!</h1>
        <p className="h-1 bg-blue-400 w-1/3 mx-auto p-1"></p>
      </div>
      <div className="mt-[1rem]">
        <h1 className="text-2xl font-black">Get in touch!</h1>
        <div className="flex justify-between max-w-xl mx-auto space-x-3 mt-8">
          <div className="w-full space-y-2 mr-3">
            <Label>Name</Label>
            <Input />
          </div>
          <div className="w-full space-y-2">
            <Label>Email</Label>
            <Input />
          </div>
        </div>
        <div className="max-w-xl mx-auto mt-8 space-y-3">
          <Label>Message</Label>
          <Textarea className="pb-20" placeholder="Type your message here..." />
        </div>
        <div className="max-w-xl mx-auto justify-end flex p-4">
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
