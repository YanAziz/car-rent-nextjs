import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyChooseUsCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-zinc-950 py-8 px-4 rounded-lg">
      <div className="text-zinc-950 bg-zinc-300 p-2 md:p-4 lg:p-6 rounded-lg">
        {icon}
      </div>

      <h2 className="text-zinc-100 text-sm md:text-base font-semibold">
        {title}
      </h2>
      <p className="text-zinc-300 text-sm md:text-base text-center">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsCard;
