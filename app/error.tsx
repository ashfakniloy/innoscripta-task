"use client";

import { useEffect } from "react";
import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5">
        <p className="text-2xl font-bold">Something went wrong!</p>

        <div className="flex items-center gap-5">
          <BackButton />
          <Button type="button" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
