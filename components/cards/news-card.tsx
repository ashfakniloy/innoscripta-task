import Link from "next/link";
import Image from "next/image";
import { Calendar, CircleUser, Newspaper } from "lucide-react";
import { ClientFormattedDate } from "../formats/client-formatted-date";
import NotAvailable from "@/public/images/not-available.webp";
import { blurPlaceholderHash } from "@/data/blur-placeholder-hash";

export default function NewsCard({
  url,
  imageUrl,
  title,
  source,
  author,
  publishedAt,
  category,
}: NewsCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="w-full lg:w-[420px] h-[300px] lg:h-[420px] group rounded-lg border overflow-hidden flex flex-col justify-between shadow-md hover:shadow-lg transition duration-200"
    >
      <div className="relative w-full h-[200px] lg:h-[270px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            sizes="(max-width: 768px) 100vw, 450px"
            placeholder="blur"
            blurDataURL={blurPlaceholderHash}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <Image
            src={NotAvailable}
            alt="image not available"
            sizes="(max-width: 768px) 100vw, 450px"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        )}

        {category && (
          <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      <div className="p-3.5 lg:p-5 bg-white z-20">
        <p className="text-xs font-medium flex items-center gap-2 text-gray-700">
          <Newspaper size={12} /> {source}
        </p>
        <p className="mt-1 lg:text-lg font-semibold line-clamp-3">{title}</p>

        {author && (
          <p className="mt-1 lg:mt-0 text-xs lg:text-sm font-medium flex items-center gap-2 text-gray-800">
            <CircleUser size={14} /> {author}
          </p>
        )}
        <p className="text-xs lg:text-sm font-medium flex items-center gap-2 text-gray-800">
          <Calendar size={14} />
          <ClientFormattedDate date={publishedAt} />
        </p>
      </div>
    </Link>
  );
}
