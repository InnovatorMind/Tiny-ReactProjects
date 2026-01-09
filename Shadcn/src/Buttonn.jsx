import { Button } from "@/components/ui/button";

export default function Buttonn() {
  return (
    <div className="p-10 space-x-4">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
