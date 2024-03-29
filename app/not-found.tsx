import type { Metadata } from "next";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5">
        <p className="text-2xl font-bold">Page not found</p>
        <BackButton />
      </div>
    </div>
  );
}
