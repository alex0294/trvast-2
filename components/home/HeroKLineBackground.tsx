"use client";

const CANDLE_COUNT = 80;

type Candle = {
  height: number;
  isUp: boolean;
};

const candles: Candle[] = Array.from({ length: CANDLE_COUNT }).map((_, i) => {
  const base = 20 + ((i * 37) % 60);
  const noise = Math.random() * 20 - 10;
  const height = Math.max(18, Math.min(90, base + noise));
  const isUp = i % 4 !== 0;
  return { height, isUp };
});

export function HeroKLineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* 顶部大面积浅色，向下过渡到深色，类似参考站但保留整体蓝青风格 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-900/70" />

      {/* 浅色网格线，增强科技感 */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(148,163,184,0.25),rgba(148,163,184,0.25)_1px,transparent_1px,transparent_6px)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.2),rgba(148,163,184,0.2)_1px,transparent_1px,transparent_10px)] mix-blend-soft-light" />

      {/* 动态 K 线条带，横向缓慢滚动，位置偏下方 */}
      <div className="absolute inset-x-[-25%] bottom-10 h-40 md:h-52 overflow-hidden">
        <div className="kline-scroll flex h-full items-end gap-[4px]">
          {[0, 1].map((strip) =>
            candles.map((candle, i) => (
              <div
                key={`${strip}-${i}`}
                className="flex w-[4px] flex-col items-center justify-center"
              >
                <div
                  className={`w-[2px] rounded-full ${
                    candle.isUp ? "bg-slate-800/80" : "bg-slate-400/80"
                  }`}
                  style={{ height: `${candle.height + 10}px` }}
                />
                <div
                  className={`mt-1 h-1 w-[5px] rounded-sm ${
                    candle.isUp ? "bg-primary-400" : "bg-amber-300"
                  }`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

