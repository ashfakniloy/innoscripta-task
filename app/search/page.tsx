import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import NewsApi from "./news-api";
import TheGuardian from "./the-guardian";
import NewyorkTimes from "./newyork-times";
import NewsListSkeleton from "@/components/skeletons/newslist-skeleton";

export const metadata: Metadata = {
  title: "Search",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page, source, title, pageSize, from, to, category } = searchParams;

  if (!title) {
    redirect("/");
  }

  const suspenseKey = page + source + title + pageSize + from + to + category;

  return (
    <div>
      <Suspense key={suspenseKey} fallback={<NewsListSkeleton />}>
        {searchParams.source === "newsapi" && (
          <NewsApi searchParams={searchParams} />
        )}
        {searchParams.source === "the_guardian" && (
          <TheGuardian searchParams={searchParams} />
        )}
        {searchParams.source === "newyork_times" && (
          <NewyorkTimes searchParams={searchParams} />
        )}
      </Suspense>
    </div>
  );
}
