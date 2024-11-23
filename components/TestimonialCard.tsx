import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  social: string;
  image: string;
  testi: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating); // Jumlah bintang penuh
  const hasHalfStar = rating - fullStars >= 0.5; // Apakah ada setengah bintang
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Sisa bintang kosong

  return (
    <div className="flex items-center gap-1">
      {/* Render bintang penuh */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg
          key={`full-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-5 text-yellow-500"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.335 24 12 19.902 4.665 24 6 15.6 0 9.75l8.332-1.595L12 .587z" />
        </svg>
      ))}
      {/* Render setengah bintang jika ada */}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-5 text-yellow-500"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.335 24 12 19.902 4.665 24 6 15.6 0 9.75l8.332-1.595L12 .587z" />
          <rect x="12" y="0" width="12" height="24" fill="black" />
        </svg>
      )}
      {/* Render bintang kosong */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="size-5 text-zinc-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 .587l3.668 7.568L24 9.75l-6 5.85L19.335 24 12 19.902 4.665 24 6 15.6 0 9.75l8.332-1.595L12 .587z"
          />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({
  name,
  social,
  image,
  testi,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="cursor-pointer text-zinc-100">
      <div className="flex flex-col gap-3 p-6 bg-zinc-900 rounded-lg">
        <div className="flex gap-3 items-center">
          <Image
            src={image}
            alt={name}
            width={1080}
            height={1080}
            className="rounded-full object-cover size-12 bg-zinc-600"
          />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base text-zinc-100">{name}</h1>
            <span className="text-xs md:text-sm text-zinc-500">{social}</span>
          </div>
        </div>
        <span className="text-xs md:text-sm tracking-wide text-zinc-100">
          {testi}
        </span>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default TestimonialCard;
