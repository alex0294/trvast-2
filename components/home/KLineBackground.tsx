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

export function KLineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* 顶部/底部光晕和网格，保持整体科技风 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,rgba(15,23,42,1),transparent)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(15,23,42,0.9),rgba(15,23,42,0.9)_1px,transparent_1px,transparent_4px)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_top,rgba(15,23,42,0.9),rgba(15,23,42,0.9)_1px,transparent_1px,transparent_6px)] mix-blend-soft-light" />

      {/* 动态 K 线条带，横向缓慢滚动 */}
      <div className="absolute inset-x-0 bottom-6 h-40 md:h-48 overflow-hidden">
        <div className="kline-scroll flex h-full items-end gap-[3px]">
          {[0, 1].map((strip) =>
            candles.map((candle, i) => (
              <div
                key={`${strip}-${i}`}
                className="flex w-[4px] flex-col items-center justify-center"
              >
                <div
                  className={`w-[2px] rounded-full ${
                    candle.isUp ? "bg-emerald-400/80" : "bg-rose-400/80"
                  }`}
                  style={{ height: `${candle.height + 10}px` }}
                />
                <div
                  className={`mt-1 h-1 w-[5px] rounded-sm ${
                    candle.isUp ? "bg-emerald-300" : "bg-rose-300"
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

