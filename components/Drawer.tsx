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
const DrawerComponent = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="relative group rounded-xl inline-block p-[1.3px] overflow-hidden">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#FAFAFA_0%,#52525B_50%,#E4E4E7_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#52525B_0%,#D4D4D8_50%,#52525B_100%)] group-hover:animate-none" />
          <Button
            variant="ghost"
            className="backdrop-blur-2xl rounded-xl dark:text-zinc-400 dark:bg-zinc-950 bg-white text-zinc-800 font-medium text-lg group-hover:scale-100"
          >
            <span className="relative flex items-center">
              <span className="animate-ping h-full w-full rounded-full absolute bg-green-400 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            Available for work
          </Button>
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
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerComponent;
