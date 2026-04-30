import { ArrowRight, BookOpenCheck, Lightbulb } from "lucide-react";
import type { Language, Pattern, TextBlock } from "../data/patterns";

type PatternCardProps = {
  pattern: Pattern;
  language: Language;
  onSelect: (id: string) => void;
};

const accentClasses = {
  moss: {
    border: "border-l-moss",
    bg: "bg-moss/10",
    text: "text-moss",
    stripe: "bg-moss",
  },
  clay: {
    border: "border-l-clay",
    bg: "bg-clay/10",
    text: "text-clay",
    stripe: "bg-clay",
  },
  ocean: {
    border: "border-l-ocean",
    bg: "bg-ocean/10",
    text: "text-ocean",
    stripe: "bg-ocean",
  },
};

export function PatternCard({ pattern, language, onSelect }: PatternCardProps) {
  const content = pattern.content[language];
  const accent = accentClasses[pattern.accent];
  const whenToUse = firstTextBlock(content.whenToUse);
  const labels = {
    en: {
      concept: "Concept",
      when: "Use when",
      action: "Study pattern",
    },
    pt: {
      concept: "Conceito",
      when: "Use quando",
      action: "Estudar padrão",
    },
  }[language];

  return (
    <button
      type="button"
      onClick={() => onSelect(pattern.id)}
      className={`group h-full min-h-64 overflow-hidden rounded-lg border border-line border-l-4 ${accent.border} bg-surface text-left shadow-sm transition hover:-translate-y-0.5 hover:border-ink hover:shadow-quiet`}
    >
      <span className={`block h-1 w-full ${accent.stripe}`} />

      <span className="flex h-full flex-col justify-between p-5">
        <span>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite/55">
            <BookOpenCheck size={14} />
            {labels.concept}
          </span>
          <span className="block text-2xl font-semibold text-ink">
            {content.name}
          </span>
          <span className="mt-3 block text-sm leading-6 text-graphite/78">
            {content.summary}
          </span>

          <span className={`mt-5 block rounded-lg ${accent.bg} p-3`}>
            <span
              className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${accent.text}`}
            >
              <Lightbulb size={14} />
            </span>
            <span className="clamp-3 mt-2 block text-sm leading-6 text-graphite/78">
              {whenToUse}
            </span>
          </span>
        </span>

        <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-ink">
          {labels.action}
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </span>
    </button>
  );
}

function firstTextBlock(blocks: TextBlock[]) {
  const block = blocks[0];

  if (!block) {
    return "";
  }

  return block.type === "list" ? block.items[0] : block.text;
}
