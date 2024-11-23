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
    <Card className="cursor-pointer bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 border-none text-zinc-100">
      <CardHeader>
        <CardTitle className="text-base md:text-lg lg:text-lg tracking-wide">
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
          <p className="pt-4 text-xs md:text-sm lg:text-base tracking-wide text-zinc-300">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-yellow-700 hover:bg-yellow-900">
          <span className="text-xs md:text-sm lg:text-base text-zinc-100">
            Hubungi lebih lanjut
          </span>
          <Phone className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductExclusiveCard;
