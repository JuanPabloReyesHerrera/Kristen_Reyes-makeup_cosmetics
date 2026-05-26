import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function BuyBotton() {
  return (
    <Button
      variant={"outline"}
      className="hidden md:flex size-10 [&_svg]:size-6!"
    >
      <ShoppingBag />
    </Button>
  );
}
