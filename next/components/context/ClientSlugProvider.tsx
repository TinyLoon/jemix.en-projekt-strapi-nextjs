"use client";

import { useEffect } from "react";
import { SlugProvider, useSlugContext } from "@/context/SlugContext";

interface Props {
  slugs: Record<string, string>;
  children: React.ReactNode;
}

export default function ClientSlugProvider({ slugs, children }: Props) {
  return (
    <SlugProvider>
      <SlugSetter slugs={slugs} />
      {children}
    </SlugProvider>
  );
}

function SlugSetter({ slugs }: { slugs: Record<string, string> }) {
  const { dispatch } = useSlugContext();

  useEffect(() => {
    dispatch({ type: "SET_SLUGS", payload: slugs });
  }, [dispatch, slugs]);

  return null;
}