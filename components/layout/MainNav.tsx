"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const locales = ["zh", "en", "ru"] as const;

function getLocaleFromPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  const candidate = parts[0];
  if (locales.includes(candidate as (typeof locales)[number])) {
    return candidate;
  }
  return "zh";
}

export function MainNav() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname || "/zh");
  const basePath = `/${currentLocale}`;

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const navItems = [
    { href: `${basePath}`, label: "首页" },
    { href: `${basePath}/courses`, label: "培训" },
    { href: `${basePath}/assessment`, label: "测评" },
    { href: `${basePath}/system`, label: "系统" },
    { href: `${basePath}/faq`, label: "常见问题" },
    { href: `${basePath}/donations`, label: "捐赠" },
  ];

  const isNavItemActive = (href: string) => {
    if (!pathname) return false;
    if (href === basePath) return pathname === basePath;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navItemClassName = (active: boolean) =>
    `relative inline-flex items-center px-3 py-1 text-sm transition-colors border-b-2 ${
      active
        ? "border-primary-500 text-primary-400"
        : "border-transparent text-slate-300 hover:text-primary-300 hover:border-primary-500"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-obsidian-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href={basePath} className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-primary-400 via-accent-500 to-sky-500 p-[2px] shadow-[0_0_38px_rgba(56,189,248,1)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90">
              <Image
                src="/haohan-logo.png"
                alt="Haohan Trading logo"
                width={44}
                height={44}
                className="rounded-full object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold tracking-[0.6em] bg-gradient-to-r from-cyan-300 via-sky-100 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.8)] md:text-2xl">
              浩瀚
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems
            .filter((x) => x.href !== `${basePath}/donations`)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navItemClassName(isNavItemActive(item.href))}
              >
                {item.label}
              </Link>
            ))}

          <Link
            href={`${basePath}/donations`}
            className={navItemClassName(pathname === `${basePath}/donations`)}
          >
            捐赠
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile: hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 text-slate-100 hover:bg-slate-900/60 md:hidden"
            aria-label="打开菜单"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>

          {/* Desktop CTA */}
          <a
            href="#ready-modal-top"
            className="btn-primary max-md:hidden px-6 py-2 text-sm md:px-7 md:py-2.5 md:text-base"
          >
            立即参加
          </a>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-black md:hidden" role="dialog" aria-modal="true">
           <div className="absolute inset-0 bg-black" />

           <div className="relative z-10 h-full">
          {/* 顶部栏 */}
          <div className="flex items-center justify-between border-b border-slate-800/70 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-tr from-primary-400 via-accent-500 to-sky-500 p-[2px] shadow-[0_0_24px_rgba(56,189,248,0.65)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90">
                  <Image
                    src="/haohan-logo.png"
                    alt="Haohan Trading logo"
                    width={36}
                    height={36}
                    className="rounded-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
              <div className="text-sm font-semibold tracking-[0.35em] text-slate-100">
                浩瀚
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 text-slate-100 hover:bg-slate-900/60"
              aria-label="关闭菜单"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
          </div>

          {/* 列表区：用 calc 固定高度，保证可见 */}
          <div className="h-[calc(100vh-160px)] overflow-y-auto px-5 py-5 bg-black">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-semibold transition-colors ${
                    isNavItemActive(item.href)
                      ? "border-primary-500/60 bg-primary-500/10 text-primary-200"
                      : "border-slate-800/80 bg-slate-950/90 text-slate-100 hover:border-primary-500/50 hover:bg-slate-900/80"
                  }`}

                >
                  <span>{item.label}</span>
                  <span className="text-slate-500">→</span>
                </Link>
              ))}
              <a
                href="#ready-modal-top"
                className="btn-primary mt-4 w-full justify-center px-6 py-3 text-base"
                onClick={() => setMobileOpen(false)}
              >
                立即参加
              </a>

            </div>
          </div>

          {/* 底部固定按钮 */}
          {/* <div className="sticky bottom-0 border-t border-slate-800/70 bg-black px-5 py-5">
            <a
              href="#ready-modal-top"
              className="btn-primary w-full justify-center px-6 py-3 text-base"
              onClick={() => setMobileOpen(false)}
            >
              立即参加
            </a>
          </div> */}

        </div>

        </div>
      )}
    </header>
  );
}
