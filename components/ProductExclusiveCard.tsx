import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface ProductExclusiveCardProps {
  name: string;
  image: string;
  type: string;
  description: string;
}

const ProductExclusiveCard = ({
  name,
  image,
  type,
  description,
}: ProductExclusiveCardProps) => {
  return (
    <Card className="cursor-pointer bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 border-none text-zinc-100">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl tracking-wide">
          {name} {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <Image
            src={image}
            alt={name}
            width={1920}
            height={1080}
            className="w-full object-cover rounded-md"
          />
          <p className="pt-4 text-sm md:text-base tracking-wide">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-yellow-800 hover:bg-yellow-900">
          {" "}
          <span>Hubungi lebih lanjut</span> <Phone className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductExclusiveCard;
