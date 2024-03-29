import { NewyorkTimesConfig } from "@/config";

export const getNewyorkTimesData = async (
  searchParams: SearchParams
): Promise<NewyorkTimesDataProps> => {
  const { title, from, to, page, category } = searchParams;
  const { baseUrl, apiKey } = NewyorkTimesConfig;

  let url = `${baseUrl}/svc/search/v2/articlesearch.json?q=${title}&page=${
    Number(page) - 1 || 0
  }&api-key=${apiKey}`;

  if (from !== undefined) {
    url += `&begin_date=${from.split("-").join("")}`;
  }

  if (to !== undefined) {
    url += `&end_date=${to.split("-").join("")}`;
  }

  if (category !== undefined) {
    url += `&fq=section_name:("${category}")`;
  }

  const result = await fetch(url);
  const data = await result.json();

  return data;
};
