import { Suspense } from "react";
import Heading from "@/components/heading";
import Pagination from "@/components/pagination";
import BackButton from "@/components/back-button";
import NewsCard from "@/components/cards/news-card";
import NewsCardList from "@/components/cards/news-card-list";
import { getNewsApiData } from "@/utils/get-newsapi-data";
import { PER_PAGE } from "@/config";

export default async function NewsApi({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const data = await getNewsApiData(searchParams);

  if (data.code === "maximumResultsReached") {
    return (
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center text-xl font-semibold">
          Developer accounts are limited to a max of 100 results
        </p>

        <BackButton />
      </div>
    );
  }

  if (data.code === "rateLimited") {
    return (
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center text-xl font-semibold">
          Developer accounts are limited to 100 requests over a 24 hour period
        </p>

        <BackButton />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading title={searchParams.title} total={data.totalResults} />
      </div>

      <div className="my-10">
        <div>
          {data?.articles?.length ? (
            <>
              <NewsCardList>
                {data.articles.map((news, i) => (
                  <NewsCard
                    key={i}
                    title={news.title}
                    url={news.url}
                    author={news.author}
                    description={news.description}
                    imageUrl={news.urlToImage}
                    source={news.source.name}
                    publishedAt={news.publishedAt}
                  />
                ))}
              </NewsCardList>

              {Number(data.totalResults) >
                (Number(searchParams.pageSize) || PER_PAGE) && (
                <div className="mt-8">
                  <Suspense fallback={null}>
                    <Pagination
                      postCount={Number(data.totalResults)}
                      limit={Number(searchParams.pageSize) || PER_PAGE}
                    />
                  </Suspense>
                </div>
              )}
            </>
          ) : (
            <p className="my-10 text-xl text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
