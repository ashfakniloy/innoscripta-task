"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/form-fields/select-field";
import { InputField } from "@/components/form-fields/input-field";
import { SearchProps, searchSchema } from "@/schemas/search-schema";
import { Search } from "lucide-react";
import { SourceOptions } from "@/config";

// const sourceOptions = [
//   { label: "NewsAPI", value: "newsapi" },
//   { label: "The Guardian", value: "the_guardian" },
//   { label: "New York Times", value: "newyork_times" },
// ];

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleParam = searchParams.get("title");
  const sourceParam = searchParams.get("source");
  const fromParam = searchParams.get("from");
  const toParam = searchParams.get("to");

  const defaultValues = {
    title: titleParam ?? "",
    source: sourceParam ?? "",
    from: fromParam ?? "",
    to: toParam ?? "",
  };

  const form = useForm<SearchProps>({
    defaultValues,
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (values: SearchProps) => {
    const { title, source, from, to } = values;

    // const url =
    //   `/search/?title=${title}&source=${source}` +
    //   (from !== "" ? `&from=${from}` : "") +
    //   (to !== "" ? `&to=${to}` : "");
    let url = `/search/?title=${title}&source=${source}`;

    if (from !== "") {
      url += `&from=${from}`;
    }

    if (to !== "") {
      url += `&to=${to}`;
    }

    router.push(url);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="p-5 lg:p-10 rounded-lg border flex flex-col lg:flex-row items-center gap-8 lg:gap-10 shadow bg-gray-50"
      >
        <InputField
          placeholder="Enter articles title"
          className="h-12 text-lg"
          name="title"
          label="Title"
        />
        <SelectField
          placeholder="Select source"
          options={SourceOptions}
          name="source"
        />
        <div className="w-full flex items-center gap-2">
          <label htmlFor="from">From:</label>
          <InputField
            name="from"
            type="date"
            className="h-12 lg:w-[180px] text-lg"
          />
        </div>
        <div className="w-full flex items-center gap-2">
          <label htmlFor="to">To:</label>
          <InputField
            name="to"
            type="date"
            className="h-12 lg:w-[180px] text-lg"
          />
        </div>

        <Button className="h-12 w-full lg:w-[250px] text-lg gap-2.5">
          <Search size={20} /> <span>Search</span>
        </Button>
      </form>
    </FormProvider>
  );
}
