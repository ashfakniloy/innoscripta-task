import { TheGuardianConfig } from "@/config";

export const getTheGuardianCategories =
  async (): Promise<TheGuardianCategories> => {
    const { baseUrl, apiKey } = TheGuardianConfig;

    const url = `${baseUrl}/sections?api-key=${apiKey}`;

    const result = await fetch(url);
    const data = await result.json();

    return data.response;
  };
