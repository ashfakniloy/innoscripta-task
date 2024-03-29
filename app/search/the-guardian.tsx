import { Suspense } from "react";
import Heading from "@/components/heading";
import Pagination from "@/components/pagination";
import NewsCard from "@/components/cards/news-card";
import CategoriesDropdown from "@/components/categories-dropdown";
import NewsCardList from "@/components/cards/news-card-list";
import { getTheGuardianCategories } from "@/utils/get-the-guardian-categories";
import { getTheGuardianData } from "@/utils/get-the-guardian-data";
import { PER_PAGE } from "@/config";

export default async function TheGuardian({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const data = await getTheGuardianData(searchParams);

  const categories = await getTheGuardianCategories();

  const categoriesOption = categories.results.map((category) => ({
    label: category.webTitle,
    value: category.id,
  }));

  if (data.response?.status === "error") {
    return (
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center text-xl font-semibold">
          {data.response.message}
        </p>
      </div>
    );
  }

  if (data.message === "API rate limit exceeded") {
    return (
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center text-xl font-semibold">
          API rate limit exceeded
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
        <Heading title={searchParams.title} total={data.response?.total} />
        <Suspense fallback={null}>
          <CategoriesDropdown categoriesOption={categoriesOption} />
        </Suspense>
      </div>

      <div className="my-10">
        <div>
          {data.response?.results.length ? (
            <>
              <NewsCardList>
                {data.response.results.map((news, i) => (
                  <NewsCard
                    key={i}
                    title={news.webTitle}
                    url={news.webUrl}
                    author={news.fields.byline}
                    source={`The Guardian ${news.fields.productionOffice}`}
                    description={news.fields.bodyText}
                    imageUrl={news.fields.thumbnail}
                    publishedAt={news.webPublicationDate}
                    category={news.sectionName}
                  />
                ))}
              </NewsCardList>

              {Number(data.response.total) >
                (Number(searchParams.pageSize) || PER_PAGE) && (
                <div className="mt-8">
                  <Suspense fallback={null}>
                    <Pagination
                      postCount={Number(data.response.total)}
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
