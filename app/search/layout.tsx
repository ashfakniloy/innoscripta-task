import { Suspense } from "react";
import SearchForm from "@/components/search-form";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-gray-50 py-5 lg:p-14">
        <div className="container">
          <Suspense fallback={null}>
            <SearchForm />
          </Suspense>
        </div>
      </div>

      <div className="container py-4 lg:py-8">{children}</div>
    </div>
  );
}
