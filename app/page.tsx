import { Button } from "@/components/ui/button";
import OpenModalButton from "./_compoenents/OpenModalButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-20">Explore ShadCn UI</h1>

      <div className="mb-10">
        <div className="text-2xl mb-4">Buttons</div>
        <div>
          <Button variant={"primary"}>Button</Button>
        </div>
      </div>


      <div className="mb-10">
        <div className="text-2xl mb-4">Dialogs</div>
        <div>
          <OpenModalButton />
        </div>
      </div>

      <div className="mb-10">
        <div className="text-2xl mb-4">Theme</div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
