import type { Language, Pattern } from "../data/patterns";
import { CodeBlock } from "./CodeBlock";

type CodeComparisonProps = {
  pattern: Pattern;
  language: Language;
};

export function CodeComparison({ pattern, language }: CodeComparisonProps) {
  const labels = {
    en: {
      without: "Without Pattern",
      with: "With Pattern",
      withoutHint: "Direct implementation",
      withHint: "Pattern-oriented implementation",
      file: "File",
    },
    pt: {
      without: "Sem Pattern",
      with: "Com Pattern",
      withoutHint: "Implementação direta",
      withHint: "Implementação orientada ao padrão",
      file: "Arquivo",
    },
  }[language];

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="min-w-0 rounded-lg border border-line bg-surface p-4">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{labels.without}</h3>
          <span className="text-xs uppercase tracking-[0.16em] text-clay">
            {labels.withoutHint}
          </span>
        </div>
        <p className="mb-3 text-sm leading-6 text-graphite/78">
          {pattern.code.without.description[language]}
        </p>
        <div className="mb-3 rounded-md bg-paper px-3 py-2 text-xs font-medium text-graphite/70">
          {labels.file}: <span className="text-ink">{pattern.code.without.file}</span>
        </div>
        <CodeBlock code={pattern.code.without.code} />
      </article>

      <article className="min-w-0 rounded-lg border border-line bg-surface p-4">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{labels.with}</h3>
          <span className="text-xs uppercase tracking-[0.16em] text-moss">
            {labels.withHint}
          </span>
        </div>
        <p className="mb-3 text-sm leading-6 text-graphite/78">
          {pattern.code.with.description[language]}
        </p>
        <div className="mb-3 rounded-md bg-paper px-3 py-2 text-xs font-medium text-graphite/70">
          {labels.file}: <span className="text-ink">{pattern.code.with.file}</span>
        </div>
        <CodeBlock code={pattern.code.with.code} />
      </article>
    </section>
  );
}
