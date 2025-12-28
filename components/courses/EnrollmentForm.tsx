"use client";

import { useEffect, useState } from "react";

 type Course = {
  id: number;
  title: string;
  description: string | null;
};

export default function EnrollmentForm() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) return;
        const data = (await res.json()) as Course[];
        setCourses(data);
        if (data.length > 0) {
          setSelectedCourseId(data[0].id);
        }
      } catch (err) {
        console.error("加载课程列表失败", err);
      }
    };

    void loadCourses();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedCourseId) return;

    try {
      setSubmitting(true);
      setError(null);
      setSuccess(null);

      const res = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: selectedCourseId,
          name,
          email,
        }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "提交失败");
      }

      setSuccess("已收到你的报名信息，我们会尽快联系你。");
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("提交报名信息时出错，请稍后重试。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-200"
    >
      <div className="font-semibold text-slate-100">课程报名 · 示例</div>
      <p className="text-[11px] text-slate-400">
        通过后端 API 记录你的报名信息（仅作演示，不会真实联系你）。
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-400">姓名</label>
          <input
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-400">邮箱</label>
          <input
            type="email"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-[11px] text-slate-400">意向课程</label>
        <select
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-100 outline-none focus:border-primary-500"
          value={selectedCourseId}
          onChange={(e) =>
            setSelectedCourseId(e.target.value ? Number(e.target.value) : "")
          }
          disabled={courses.length === 0}
        >
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="text-[11px] text-rose-400">{error}</div>}
      {success && (
        <div className="text-[11px] text-emerald-400">{success}</div>
      )}

      <button
        type="submit"
        className="btn-primary mt-1 w-full justify-center text-xs"
        disabled={submitting || !selectedCourseId}
      >
        {submitting ? "提交中..." : "提交报名信息"}
      </button>
    </form>
  );
}

