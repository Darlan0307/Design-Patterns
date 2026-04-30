import { ArrowRight } from "lucide-react";
import type { Language, Pattern } from "../data/patterns";

type PatternCardProps = {
  pattern: Pattern;
  language: Language;
  onSelect: (id: string) => void;
};

const accentClasses = {
  moss: "border-l-moss",
  clay: "border-l-clay",
  ocean: "border-l-ocean",
};

export function PatternCard({ pattern, language, onSelect }: PatternCardProps) {
  const content = pattern.content[language];
  const action = language === "en" ? "Open pattern" : "Abrir padrão";

  return (
    <button
      type="button"
      onClick={() => onSelect(pattern.id)}
      className={`group flex h-full min-h-40 flex-col justify-between rounded-lg border border-line border-l-4 ${accentClasses[pattern.accent]} bg-surface p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-ink hover:shadow-quiet`}
    >
      <span>
        <span className="block text-xl font-semibold text-ink">{content.name}</span>
        <span className="mt-2 block text-sm leading-6 text-graphite/78">
          {content.summary}
        </span>
      </span>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
        {action}
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
