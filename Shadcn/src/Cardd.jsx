import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Cardd() {
  return (
    <div className="p-10">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>shadcn + JS</CardTitle>
        </CardHeader>
        <CardContent>
          Everything is working 🎉
        </CardContent>
      </Card>
    </div>
  );
}
