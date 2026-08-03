import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Test() {
  return (
    <div className="text-[#f1f1f1] h-svh p-4">
      <Card className="gap-4 flex flex-col !bg-[#2d545e] !border-[#09242b]">
        <div>
          This is text in the card.{" "}
          <span className="text-[#e1b382]">with flair</span>
        </div>
        <div>Damager</div>
        <Button className="w-fit !text-[#2d545e] !border-[#c89666] !bg-[#e1b382]">
          Click here
        </Button>
      </Card>
    </div>
  );
}
