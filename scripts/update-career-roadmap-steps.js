const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "app", "[locale]", "page.tsx");

let src = fs.readFileSync(filePath, "utf8");

const blockStart = '              <div className="space-y-4 md:max-w-xl">';
const start = src.indexOf(blockStart);

if (start === -1) {
  console.error("career roadmap block start not found");
  process.exit(1);
}

const endMarker = '              </div>';
const end = src.indexOf(endMarker, start + blockStart.length);

if (end === -1) {
  console.error("career roadmap block end not found");
  process.exit(1);
}

const blockEndNewline = src.indexOf("\n", end);
const afterEnd = blockEndNewline === -1 ? src.length : blockEndNewline + 1;

const newBlock = `              <div className="space-y-4 md:max-w-xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 text-xs font-bold text-slate-950 shadow-lg">
                      01
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">规则学习（第 1-30 天）</div>
                      <p className="text-xs text-slate-400">
                        流程标准化、基础规则梳理，熟悉盘面语言，建立清晰的风险边界。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-indigo-400 to-fuchsia-500 text-xs font-bold text-slate-950 shadow-lg">
                      02
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">盈利训练（第 31-60 天）</div>
                      <p className="text-xs text-slate-400">
                        高频练习执行力与复盘能力，强化心态稳定性，找到个人优势交易节奏。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-500 text-xs font-bold text-slate-950 shadow-lg">
                      03
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">盈利考核（第 61-90 天）</div>
                      <p className="text-xs text-slate-400">
                        以严格的盈亏比和回撤指标为标准，检验策略可复制性与风控纪律。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 text-xs font-bold text-slate-950 shadow-lg">
                      04
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">小额实盘</div>
                      <p className="text-xs text-slate-400">
                        日回撤 ≤ 5%，总回撤 ≤ 10%，在真实资金环境中固化执行习惯。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 via-sky-400 to-indigo-500 text-xs font-bold text-slate-950 shadow-lg">
                      05
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">资金扩容</div>
                      <p className="text-xs text-slate-400">
                        在稳定曲线基础上逐步放大资金与手数，通过分级扩容验证心态与系统承压能力。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-fuchsia-500 to-rose-500 text-xs font-bold text-slate-950 shadow-lg">
                      06
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">策略迭代</div>
                      <p className="text-xs text-slate-400">
                        基于实盘数据持续优化入场、加减仓与止损逻辑，迭代出个人化的优势策略组合。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-cyan-400 text-xs font-bold text-slate-950 shadow-lg">
                      07
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">多品种协同</div>
                      <p className="text-xs text-slate-400">
                        从单一品种走向多品种组合交易，通过相关性与分散度管理整体回撤与收益波动。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-fuchsia-500 text-xs font-bold text-slate-950 shadow-lg">
                      08
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">资金方深度合作</div>
                      <p className="text-xs text-slate-400">
                        通过季度评估与风控审核，获得更高额度的资金授权与更优分成档位。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-amber-300 text-xs font-bold text-slate-950 shadow-lg">
                      09
                    </div>
                    <div className="space-y-1 text-sm text-slate-200">
                      <div className="font-semibold">职业化管理</div>
                      <p className="text-xs text-slate-400">
                        建立完整的交易日志、复盘体系与年度目标，以交易作为长期职业路径持续精进。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
`;

src = src.slice(0, start) + newBlock + src.slice(afterEnd);

fs.writeFileSync(filePath, src, "utf8");

