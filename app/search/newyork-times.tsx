import { Suspense } from "react";
import Heading from "@/components/heading";
import Pagination from "@/components/pagination";
import BackButton from "@/components/back-button";
import NewsCard from "@/components/cards/news-card";
import CategoriesDropdown from "@/components/categories-dropdown";
import { newyorkTimesSections } from "@/data/newyork-times-sections";
import NewsCardList from "@/components/cards/news-card-list";
import { getNewyorkTimesData } from "@/utils/get-newyork-times-data";

export default async function NewyorkTimes({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const data = await getNewyorkTimesData(searchParams);

  const categoriesOption = newyorkTimesSections.map((category) => ({
    label: category,
    value: category.toLowerCase(),
  }));

  if (data.errors?.[0] === "page: must be less than or equal to 200") {
    return (
      <div className="flex flex-col items-center space-y-5">
        <p className="text-center text-xl font-semibold">
          Page must be less than or equal to 200
        </p>

        <BackButton />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
        <Heading title={searchParams.title} total={data.response?.meta.hits} />
        <Suspense fallback={null}>
          <CategoriesDropdown categoriesOption={categoriesOption} />
        </Suspense>
      </div>

      <div className="my-10">
        <div>
          {data.response?.docs.length ? (
            <>
              <NewsCardList>
                {data.response.docs.map((news, i) => (
                  <NewsCard
                    key={i}
                    title={news.headline.main}
                    url={news.web_url}
                    author={news.byline.original?.split("By ").join("")}
                    source={news.source}
                    description={news.lead_paragraph}
                    imageUrl={
                      news.multimedia[0]?.url &&
                      `https://www.nytimes.com/${news.multimedia[0]?.url}`
                    }
                    publishedAt={news.pub_date}
                    category={news.section_name}
                  />
                ))}
              </NewsCardList>

              {data.response?.meta.hits > 10 && (
                <div className="mt-8">
                  <Suspense fallback={null}>
                    <Pagination
                      postCount={data.response.meta.hits}
                      limit={10}
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
