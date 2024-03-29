"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import "./styles.css";

export default function Pagination({
  postCount,
  limit,
}: {
  postCount: number;
  limit: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams?.get("page")) || 1
  );

  const pagesToShow = 5; // adjust this based on your preference
  const pagesBeforeCurrent = Math.floor(pagesToShow / 2);
  const pagesAfterCurrent = pagesToShow - pagesBeforeCurrent - 1;

  const numberOfPages = Math.ceil(postCount / limit);

  let pages: number[] = [];

  if (numberOfPages <= pagesToShow) {
    pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  } else if (currentPage <= pagesBeforeCurrent + 1) {
    pages = Array.from({ length: pagesToShow }, (_, i) => i + 1);
    if (pages[pages.length - 1] < numberOfPages - 1) {
      pages.push(-1);
    }
    pages.push(numberOfPages);
  } else if (currentPage >= numberOfPages - pagesAfterCurrent) {
    pages = Array.from(
      { length: pagesToShow },
      (_, i) => numberOfPages - pagesToShow + i + 1
    );
    if (pages[0] > 2) {
      pages.unshift(-1);
    }
    pages.unshift(1);
  } else {
    pages = Array.from(
      { length: pagesToShow },
      (_, i) => currentPage - pagesBeforeCurrent + i
    );
    if (pages[0] > 2) {
      pages.unshift(-1);
    }
    pages.unshift(1);
    if (pages[pages.length - 1] < numberOfPages - 1) {
      pages.push(-1);
    }
    pages.push(numberOfPages);
  }

  const newParam = new URLSearchParams(searchParams.toString());

  const handlePaginate = (page: number) => {
    if (currentPage === page) return;

    newParam.set("page", page.toString());
    router.push(`${pathname}?${newParam}`);
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage >= numberOfPages) return;

    const nextPage = currentPage + 1;

    newParam.set("page", nextPage.toString());
    router.push(`${pathname}?${newParam}`);
    setCurrentPage(nextPage);
  };

  const handlePrev = () => {
    if (currentPage <= 1) return;

    const prevPage = currentPage - 1;

    newParam.set("page", prevPage.toString());
    router.push(`${pathname}?${newParam}`);
    setCurrentPage(prevPage);
  };

  return (
    <div className="flex items-start justify-center gap-2 mb-10 text-sm">
      <div>
        <button
          className="paginateArrowButton"
          onClick={handlePrev}
          disabled={currentPage <= 1}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-2 h-[40px] overflow-x-auto">
        {/* <div className="flex gap-2 h-[40px]"> */}
        <div className="flex gap-2">
          {pages.map((page, i) => (
            <button
              key={i}
              className={cn("paginateNumberButton", {
                "!bg-primary text-white": page === currentPage,
                "hover:!bg-white !text-black !cursor-default": page === -1,
                "text-[10px]": page > 10000,
              })}
              onClick={() => handlePaginate(page)}
              disabled={page === -1 || page === currentPage}
            >
              {page === -1 ? "..." : page}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button
          className="paginateArrowButton"
          onClick={handleNext}
          disabled={currentPage === numberOfPages}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
