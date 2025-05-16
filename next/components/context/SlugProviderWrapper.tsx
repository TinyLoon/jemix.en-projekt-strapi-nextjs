"use client";

import { useEffect } from "react";
import { SlugProvider, useSlugContext } from "../context/SlugContext";

interface Props {
  slugs: Record<string, string>;
  children: React.ReactNode;
}

function SetSlugs({ slugs }: { slugs: Record<string, string> }) {
  const { dispatch } = useSlugContext();

  useEffect(() => {
    dispatch({ type: "SET_SLUGS", payload: slugs });
  }, [slugs, dispatch]);

  return null;
}

export default function SlugProviderWrapper({ slugs, children }: Props) {
  return (
    <SlugProvider>
      <SetSlugs slugs={slugs} />
      {children}
    </SlugProvider>
  );
}