"use client";

import { useEffect } from "react";
import { useSlugContext } from "@/context/SlugContext";

interface Props {
  localizedSlugs?: Record<string, string>;
}

export default function ClientSlugHandler({ localizedSlugs = {} }: Props) {
  const { dispatch } = useSlugContext();

  useEffect(() => {
    if (Object.keys(localizedSlugs).length > 0) {
      dispatch({
        type: "SET_SLUGS",
        payload: localizedSlugs,
      });
    }
  }, [dispatch, localizedSlugs]);

  return null;
}