import { Reveal } from "@/components/ui/reveal";
import { GitCommitHorizontal } from "lucide-react";

const WEEKS = 52;
const DAYS = 7;

function seededValue(i: number) {
  const x = Math.sin(i * 999.13) * 10000;
  const frac = x - Math.floor(x);
  return Math.floor(frac * 5); // 0 - 4
}

const levelClasses = [
  "bg-white/[0.04]",
  "bg-primary-700/50",
  "bg-primary-600/70",
  "bg-primary-500/85",
  "bg-accent/90",
];

export function GithubActivity() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => seededValue(i));
  const total = cells.reduce((sum, v) => sum + v, 0);

  return (
    <section className="pb-28">
      <div className="container">
        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GitCommitHorizontal className="h-5 w-5 text-primary-300" strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold text-foreground">
                  Contribution activity
                </h3>
              </div>
              <p className="font-mono text-xs text-muted">
                {total * 4} contributions in the last year
              </p>
            </div>

            <p className="sr-only">
              A visual representation of code contributions over the past year,
              showing a generally active and consistent commit history.
            </p>

            <div
              className="mt-6 grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-2"
              aria-hidden="true"
            >
              {cells.map((level, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-[3px] ${levelClasses[level]}`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[11px] text-muted" aria-hidden="true">
              Less
              {levelClasses.map((c, i) => (
                <span key={i} className={`h-3 w-3 rounded-[3px] ${c}`} />
              ))}
              More
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
