type SearchParams = {
  title: string;
  source: "the_guardian" | "newyork_times" | "newsapi";
  from: string;
  to: string;
  pageSize: string;
  page: string;
  category: string;
};

type NewsCardProps = {
  url: string;
  imageUrl: string;
  title: string;
  source: string;
  author: string;
  publishedAt: string;
  description: string;
  category?: string;
};

type TheGuardianResultProps = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    byline: string;
    thumbnail: string;
    bodyText: string;
    productionOffice: string;
  };
};

type TheGuardianDataProps = {
  message?: string;
  response?: {
    status: string;
    message?: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: TheGuardianResultProps[];
  };
};

type TheGuardianCategories = {
  total: number;
  results: {
    id: string;
    webTitle: string;
  }[];
};

type NewyorkTimesDocProps = {
  web_url: string;
  source: string;
  lead_paragraph: string;
  pub_date: string;
  section_name: string;
  multimedia: {
    url: string;
  }[];
  headline: {
    main: string;
  };
  byline: {
    original: string;
  };
};

type NewyorkTimesDataProps = {
  status: string;
  response?: {
    meta: {
      hits: number;
    };
    docs: NewyorkTimesDocProps[];
  };
  errors: string[];
};

type NewsApiArticleProps = {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: { id: string; name: string };
};

type NewsApiDataProps = {
  status: string;
  code?: string;
  totalResults?: number;
  message?: string;
  articles?: NewsApiArticleProps[];
};
