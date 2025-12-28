"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/zh");
  }, [router]);

  return null;
}

