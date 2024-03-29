import { NewsApiConfig, PER_PAGE } from "@/config";

export const getNewsApiData = async (
  searchParams: SearchParams
): Promise<NewsApiDataProps> => {
  const { title, from, to, pageSize, page } = searchParams;
  const { baseUrl, apiKey } = NewsApiConfig;

  let url = `${baseUrl}/v2/everything?q=${title}&pageSize=${
    pageSize || PER_PAGE
  }&page=${page}&apiKey=${apiKey}`;

  if (from !== undefined) {
    url += `&from=${from}`;
  }

  if (to !== undefined) {
    url += `&to=${to}`;
  }

  const result = await fetch(url);
  const data = await result.json();

  return data;
};
