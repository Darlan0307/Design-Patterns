import { BookOpen, Github, Linkedin } from "lucide-react";
import type { Language } from "../data/patterns";
import { LanguageToggle } from "./LanguageToggle";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onHome: () => void;
};

export function Header({ language, onLanguageChange, onHome }: HeaderProps) {
  const labels = {
    en: {
      title: "Design Patterns",
      subtitle: "in Practice",
    },
    pt: {
      title: "Design Patterns",
      subtitle: "na Prática",
    },
  }[language];

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8 2xl:px-10">
        <button
          type="button"
          onClick={onHome}
          className="flex min-w-0 items-center gap-2 text-left sm:gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-paper sm:h-10 sm:w-10">
            <BookOpen size={18} strokeWidth={1.8} />
          </span>
          <span className="hidden min-w-0 min-[420px]:block">
            <span className="block truncate text-base font-semibold text-ink">
              {labels.title}
            </span>
            <span className="block text-xs uppercase tracking-[0.18em] text-graphite/70">
              {labels.subtitle}
            </span>
          </span>
        </button>

        <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
          <a
            href="https://github.com/Darlan0307/Design-Patterns"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-ink sm:h-10 sm:w-10"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/darlan-martins-8a7956259/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-ink sm:h-10 sm:w-10"
          >
            <Linkedin size={18} />
          </a>
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>
      </div>
    </header>
  );
}
