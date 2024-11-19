import { Fuel, Gauge, Star, Type, User, Wallet } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  person: number;
  fuel: string;
  rating: number;
  transmition: string;
  type: string;
}

const ProductCardCar = ({
  name,
  image,
  price,
  person,
  fuel,
  rating,
  transmition,
  type,
}: ProductCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="text-white">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          className="w-full object-cover bg-slate-100 rounded-lg"
        />
        <div className="flex flex-col px-2 gap-3 py-2">
          <h1 className="text-sm font-semibold">{name}</h1>
          <p className="text-xs flex gap-1 items-center">
            <Gauge className="w-4 h-4" />
            {transmition}
          </p>
          <p className="text-xs flex gap-1 items-center">
            <Fuel className="w-4 h-4" />
            {fuel}
          </p>
          <p className="text-xs flex gap-1 items-center">
            <Wallet className="w-4 h-4" />
            {price} / day
          </p>
          <div className="flex gap-3">
            <p className="text-xs flex gap-1 items-center">
              <Type className="w-4 h-4" />
              {type}
            </p>
            <p className="text-xs flex gap-1 items-center">
              <User className="w-4 h-4" /> {person}
            </p>
            <p className="text-xs flex gap-1 items-center">
              <Star className="w-4 h-4" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCar;
