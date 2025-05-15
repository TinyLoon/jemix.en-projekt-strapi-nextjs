"use client";

import { useEffect } from "react";
import { useSlugContext } from "@/context/SlugContext"; // ✅ relativer Import, korrekt

interface Props {
  localizedSlugs: Record<string, string>;
}

export default function ClientSlugHandler({ localizedSlugs }: Props) {
  const { dispatch } = useSlugContext();

  useEffect(() => {
    dispatch({
      type: "SET_SLUGS",
      payload: localizedSlugs,
    });
  }, [dispatch, localizedSlugs]);

  return null;
}