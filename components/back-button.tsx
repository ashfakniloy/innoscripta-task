"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button type="button" onClick={() => router.back()}>
      Go back
    </Button>
  );
}
