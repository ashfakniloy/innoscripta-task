export const PER_PAGE = 18;

const THE_GUARDIAN_KEY = "18b81ffa-5863-47cf-90c6-0a6db64572a2"; // should be coming from .env file
const NEWYORK_TIMES_KEY = "z4JtKl9ICRnvP32cdpz5ERU2g5fJMCAG"; // should be coming from .env file
const NEWS_API_KEY = "ef380c7b338d456c8dc32f03c42de94b"; // should be coming from .env file

export const TheGuardianConfig = {
  label: "The Guardian",
  value: "the_guardian",
  baseUrl: "https://content.guardianapis.com",
  apiKey: THE_GUARDIAN_KEY,
};

export const NewyorkTimesConfig = {
  label: "New York Times",
  value: "newyork_times",
  baseUrl: "https://api.nytimes.com",
  apiKey: NEWYORK_TIMES_KEY,
};

export const NewsApiConfig = {
  label: "NewsAPI",
  value: "newsapi",
  baseUrl: "https://newsapi.org",
  apiKey: NEWS_API_KEY,
};

export const SourceOptions = [
  TheGuardianConfig,
  NewyorkTimesConfig,
  NewsApiConfig,
].map((config) => ({
  label: config.label,
  value: config.value,
}));
