import { Suspense } from "react";
import SearchForm from "@/components/search-form";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center container">
      <Suspense fallback={null}>
        <SearchForm />
      </Suspense>
    </div>
  );
}
