"use client";

import { useEffect, useRef, useState } from "react";

type NotificationItem = {
  id: number;
  email: string;
  message: string;
  timeAgo: string;
};

const notifications: NotificationItem[] = [
  {
    id: 1,
    email: "ma***18@gmail.com",
    message: "已联系团队长参加外汇交易员培训",
    timeAgo: "刚刚",
  },
  {
    id: 2,
    email: "bi***80@gmail.com",
    message: "完成报名表，等待训练营开营通知",
    timeAgo: "刚刚",
  },
  {
    id: 3,
    email: "zh***22@qq.com",
    message: "通过基础评估，进入正式训练名单",
    timeAgo: "1 分钟前",
  },
  {
    id: 4,
    email: "tr***fx@outlook.com",
    message: "已加入实盘资金账户评估计划",
    timeAgo: "2 分钟前",
  },
  {
    id: 5,
    email: "li***07@gmail.com",
    message: "预约下一期职业交易员集中训练营",
    timeAgo: "3 分钟前",
  },
];

function getRandomDelay() {
  // 约 6 秒一轮：3 秒显示 + 3 秒间隔
  return 5000;
}

export function FloatingNotification() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<NotificationItem | null>(null);

  const showTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const scheduleNext = () => {
      // 先清理可能残留的定时器
      if (showTimeoutRef.current) window.clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);

      const delay = getRandomDelay();
      showTimeoutRef.current = window.setTimeout(() => {
        const item =
          notifications[Math.floor(Math.random() * notifications.length)];
        setCurrent(item);
        setVisible(true);

        hideTimeoutRef.current = window.setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, 3000);
      }, delay);
    };

    scheduleNext();

    return () => {
      if (showTimeoutRef.current) window.clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`pointer-events-none fixed bottom-6 left-4 z-40 transform transition-all duration-400 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex max-w-xs items-stretch overflow-hidden rounded-2xl border border-slate-800/80 bg-obsidian-900/95 shadow-[0_0_28px_rgba(15,23,42,0.85)] backdrop-blur">
        <div className="flex items-center justify-center bg-slate-950 px-3 py-3 text-[10px] font-bold tracking-[0.2em] text-emerald-300">
          NEW
        </div>
        <div className="flex flex-1 flex-col gap-1 px-3 py-2.5 text-xs">
          <div className="font-semibold text-slate-100">{current.email}</div>
          <div className="text-[11px] text-slate-300">{current.message}</div>
          <div className="text-[10px] text-slate-500">{current.timeAgo}</div>
        </div>
      </div>
    </div>
  );
}

