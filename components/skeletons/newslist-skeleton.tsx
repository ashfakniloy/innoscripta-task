import NewsCardList from "../cards/news-card-list";
import { Skeleton } from "../ui/skeleton";
import { PER_PAGE } from "@/config";

export default function NewsListSkeleton() {
  const items = [...Array(PER_PAGE)];

  return (
    <div>
      <div className="flex justify-center lg:justify-between items-center">
        <Skeleton className="w-4/5 lg:w-2/5 h-[30px] lg:h-[38px] mb-14 lg:mb-0" />
      </div>
      <div className="my-10">
        <NewsCardList>
          {items.map((_, i) => (
            <div
              key={i}
              className="w-full lg:w-[420px] h-[300px] lg:h-[420px] flex flex-col justify-between rounded-lg shadow-md border"
            >
              <Skeleton className="w-full h-[200px] lg:h-[270px]" />

              <div className="p-3.5 lg:p-5">
                <Skeleton className="w-1/3 h-3" />
                <div className="mt-1.5 space-y-1.5">
                  <Skeleton className="w-full h-5 lg:h-[22px]" />
                  <Skeleton className="w-4/5 h-5 lg:h-[22px]" />
                </div>
                <div className="mt-2 space-y-1.5">
                  <Skeleton className="w-1/3 h-3 lg:h-4" />
                  <Skeleton className="w-1/2 h-3 lg:h-4" />
                </div>
              </div>
            </div>
          ))}
        </NewsCardList>
      </div>
    </div>
  );
}
