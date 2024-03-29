import { TheGuardianConfig, PER_PAGE } from "@/config";

export const getTheGuardianData = async (
  searchParams: SearchParams
): Promise<TheGuardianDataProps> => {
  const { title, from, to, pageSize, page, category } = searchParams;
  const { baseUrl, apiKey } = TheGuardianConfig;

  let url = `${baseUrl}/search?q=${title}&page=${page || 1}&page-size=${
    pageSize || PER_PAGE
  }&show-fields=byline,thumbnail,bodyText,productionOffice&api-key=${apiKey}`;

  if (from !== undefined) {
    url += `&from-date=${from}`;
  }

  if (to !== undefined) {
    url += `&to-date=${to}`;
  }

  if (category !== undefined) {
    url += `&section=${category}`;
  }

  const result = await fetch(url);
  const data = await result.json();

  return data;
};
