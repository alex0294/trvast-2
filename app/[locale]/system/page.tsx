'use client';

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

type SystemPageProps = {
  params: { locale: string };
};

type EnrollmentRow = {
  id: number;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  courseId: number;
  course?: {
    title: string;
  } | null;
};

export default function SystemPage({ params }: SystemPageProps) {
  const { locale } = params;

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [enrollments, setEnrollments] = useState<EnrollmentRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (account.trim() === "admin" && password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("账号或密码错误，请重试");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    const loadEnrollments = async () => {
      try {
        setLoading(true);
        setLoadError("");
        const res = await fetch("/api/enrollments");
        if (!res.ok) {
          throw new Error("加载报名信息失败");
        }
        const data = (await res.json()) as EnrollmentRow[];
        setEnrollments(data);
      } catch (err) {
        console.error(err);
        setLoadError("加载报名信息失败，请稍后再试。");
      } finally {
        setLoading(false);
      }
    };

    void loadEnrollments();
  }, [isLoggedIn]);

  const formatDateTime = (value: string) => {
    try {
      return new Date(value).toLocaleString("zh-CN", { hour12: false });
    } catch {
      return value;
    }
  };

  return (
    <section className="section relative -mx-4 flex items-center justify-center overflow-hidden rounded-3xl border border-slate-900/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-4 py-16 shadow-[0_0_40px_rgba(15,23,42,0.9)] md:mx-[-40px] md:py-20 lg:mx-[-80px]">
      {/* 背景光效 */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),transparent_65%)]" />
        <div className="absolute inset-16 rounded-[40px] border border-cyan-400/20" />
        <div className="absolute -left-32 top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl">
        {!isLoggedIn ? (
          <div className="mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/45 bg-slate-950/95 px-8 py-9 text-slate-50 shadow-[0_0_40px_rgba(56,189,248,0.7)] backdrop-blur-xl md:px-10 md:py-10">
              <div className="pointer-events-none absolute inset-px rounded-[26px] border border-slate-800/80" />

              <div className="relative space-y-8">
                {/* 顶部徽标 */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-slate-950/90 px-6 py-1.5 text-[11px] font-semibold tracking-[0.35em] text-cyan-200 shadow-[0_0_26px_rgba(56,189,248,0.75)]">
                    浩瀚交易 · 系统登录
                  </div>
                </div>

                {/* 标题区域 */}
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-extrabold tracking-[0.3em] text-slate-50 md:text-3xl">
                    内部系统
                  </h1>
                  <p className="text-xs text-slate-400 md:text-sm">
                    请输入内部认证信息以继续
                  </p>
                </div>

                {/* 登录表单 */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2 text-sm">
                    <label className="block text-xs font-semibold tracking-[0.25em] text-sky-300">
                      内部账号
                    </label>
                    <input
                      type="text"
                      placeholder="请输入账号"
                      value={account}
                      onChange={(event) => setAccount(event.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <label className="block text-xs font-semibold tracking-[0.25em] text-sky-300">
                      内部密码
                    </label>
                    <input
                      type="password"
                      placeholder="请输入密码"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-rose-400">{error}</p>
                  )}

                  <div className="pt-2">
                    <div className="flex flex-col gap-3 md:flex-row">
                      <button
                        type="submit"
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(56,189,248,0.9)] hover:from-cyan-300 hover:via-sky-400 hover:to-fuchsia-500"
                      >
                        登录
                      </button>
                      <Link
                        href={`/${locale}`}
                        className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-400/80 bg-black/40 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-400/90 hover:text-cyan-300"
                      >
                        返回首页
                      </Link>
                    </div>
                  </div>
                </form>

                {/* 提示说明 */}
                <p className="relative mt-2 text-[10px] leading-relaxed text-slate-500">
                  本页面仅供内部系统演示使用，不做任何投资承诺或资金邀约。请妥善保管您的内部账号与密码信息。
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[28px] border border-emerald-400/60 bg-slate-950/95 px-6 py-7 text-slate-50 shadow-[0_0_40px_rgba(16,185,129,0.7)] backdrop-blur-xl md:px-8 md:py-8">
            <div className="pointer-events-none absolute inset-px rounded-[26px] border border-slate-800/80" />

            <div className="relative space-y-6">
              {/* 顶部导航 / 标题 */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center rounded-full border border-emerald-400/70 bg-slate-950/90 px-4 py-1.5 text-[10px] font-semibold tracking-[0.3em] text-emerald-200">
                    浩瀚交易 · 后台管理系统
                  </div>
                  <h1 className="text-xl font-extrabold tracking-[0.25em] text-slate-50 md:text-2xl">
                    报名管理控制台
                  </h1>
                  <p className="text-[11px] text-slate-400 md:text-xs">
                    当前查看：训练营报名表单提交记录（示意数据来自本地数据库）。
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="hidden text-right md:block">
                    <div>当前账户：admin</div>
                    <div className="text-slate-500">角色：系统管理员</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center rounded-full border border-slate-500/80 px-4 py-1.5 text-[11px] font-semibold text-slate-200 hover:border-emerald-400/80 hover:text-emerald-300"
                  >
                    退出登录
                  </button>
                </div>
              </div>

              {/* 报名列表 */}
              <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_0_24px_rgba(15,23,42,0.85)]">
                <div className="flex items-center justify-between text-xs">
                  <div className="font-semibold text-slate-100">
                    报名记录一览
                  </div>
                  {loading ? (
                    <span className="text-[11px] text-sky-300">
                      正在加载...
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">
                      共 {enrollments.length} 条记录
                    </span>
                  )}
                </div>

                {loadError && (
                  <p className="text-[11px] text-rose-400">{loadError}</p>
                )}

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80">
                  <table className="min-w-full divide-y divide-slate-800 text-left text-[11px] md:text-xs">
                    <thead className="bg-slate-950/80 text-slate-400">
                      <tr>
                        <th className="px-3 py-2 font-medium">ID</th>
                        <th className="px-3 py-2 font-medium">姓名</th>
                        <th className="px-3 py-2 font-medium">邮箱</th>
                        <th className="px-3 py-2 font-medium">意向课程</th>
                        <th className="px-3 py-2 font-medium">状态</th>
                        <th className="px-3 py-2 font-medium">提交时间</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                      {enrollments.length === 0 && !loading ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-3 py-4 text-center text-[11px] text-slate-500"
                          >
                            暂无报名记录。
                          </td>
                        </tr>
                      ) : (
                        enrollments.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-900/80">
                            <td className="px-3 py-2 text-slate-400">
                              #{item.id}
                            </td>
                            <td className="px-3 py-2 text-slate-50">
                              {item.name}
                            </td>
                            <td className="px-3 py-2 text-slate-200">
                              {item.email}
                            </td>
                            <td className="px-3 py-2 text-slate-200">
                              {item.course?.title ?? `课程 #${item.courseId}`}
                            </td>
                            <td className="px-3 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-[2px] text-[10px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                                {item.status}
                              </span>
                            </td>
                            <td className="px-3 py-2 text-slate-300">
                              {formatDateTime(item.createdAt)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="text-[10px] text-slate-500">
                  提示：以上数据来自 /api/enrollments 接口，真实环境中可以在此基础上继续扩展审核、备注、筛选等功能。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

