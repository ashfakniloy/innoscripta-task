"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoriesOptionProps = {
  label: string;
  value: string;
};

export default function CategoriesDropdown({
  categoriesOption,
}: {
  categoriesOption: CategoriesOptionProps[];
}) {
  const allCategories = [{ label: "All", value: "all" }, ...categoriesOption];

  const [selectedOption, setSelectedOption] = useState(allCategories[0].value);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams?.get("category");

  const newParam = new URLSearchParams(searchParams.toString());

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    value !== "all"
      ? newParam.set("category", value)
      : newParam.delete("category");
    router.push(`${pathname}?${newParam}`);
  };

  useEffect(() => {
    !category && setSelectedOption(allCategories[0].value);
    category && setSelectedOption(category);
  }, [searchParams]);

  return (
    <div className="flex items-center gap-3">
      <span className="font-medium">Category:</span>
      <Select value={selectedOption} onValueChange={handleOptionClick}>
        <SelectTrigger aria-label="sort by" className="w-[250px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="w-[250px]">
          {allCategories.map((option) => (
            <SelectItem
              key={option.value}
              aria-label={option.label}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
