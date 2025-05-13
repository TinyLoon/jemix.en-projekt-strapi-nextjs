"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/store/useMenuStore";
import clsx from "clsx";
import { useHeaderContent } from "@/hooks/useHeaderContent";
import { useLanguageStore } from "@/store/useLanguageStore";

export const Header = () => {
  const { isOpen, toggle, close } = useMenuStore();
  const { language } = useLanguageStore();
  const pathname = usePathname();
  const { header } = useHeaderContent(language);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [close]);

  const logoUrl = header?.logo?.data?.attributes?.url || "/logo.svg";

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image src={logoUrl} alt="jemix Logo" width={120} height={40} />
        </Link>

        <button
          onClick={toggle}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
        >
          <div className="w-6 h-0.5 bg-black transition-all duration-300" />
          <div
            className={clsx(
              "absolute left-2 top-2 w-6 h-0.5 bg-black transition-transform duration-300",
              {
                "rotate-45 translate-y-1.5": isOpen,
                "-translate-y-1.5": !isOpen,
              }
            )}
          />
          <div
            className={clsx(
              "absolute left-2 top-2 w-6 h-0.5 bg-black transition-transform duration-300",
              {
                "-rotate-45 -translate-y-1.5": isOpen,
                "translate-y-1.5": !isOpen,
              }
            )}
          />
        </button>

        <nav
          className={clsx(
            "absolute md:static left-0 right-0 top-full md:flex md:items-center md:gap-6 bg-white border-t md:border-0 transition-all duration-200",
            {
              "flex flex-col p-4": isOpen,
              hidden: !isOpen,
            }
          )}
        >
          {header?.navigationLinks?.map(({ label, url }) => (
            <Link
              key={url}
              href={url}
              onClick={close}
              className={clsx(
                "block py-2 text-gray-800 hover:text-blue-600 transition-colors",
                {
                  "text-blue-600 font-semibold": isActive(url),
                }
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};