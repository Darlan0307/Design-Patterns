import type { Language } from "../data/patterns";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-grid grid-cols-2 rounded-full border border-line bg-surface p-1 text-sm shadow-sm">
      <button
        type="button"
        className={`rounded-full px-3 py-1.5 transition ${
          language === "pt"
            ? "bg-ink text-paper"
            : "text-graphite hover:bg-paper"
        }`}
        onClick={() => onChange("pt")}
        aria-pressed={language === "pt"}
        aria-label="Português"
      >
        <BrazilFlag />
        PT
      </button>
      <button
        type="button"
        className={`rounded-full px-3 py-1.5 transition ${
          language === "en"
            ? "bg-ink text-paper"
            : "text-graphite hover:bg-paper"
        }`}
        onClick={() => onChange("en")}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        <UnitedStatesFlag />
        EN
      </button>
    </div>
  );
}

function BrazilFlag() {
  return (
    <svg
      viewBox="0 0 28 20"
      className="mr-1.5 inline-block h-3.5 w-5 rounded-[2px] align-[-2px] shadow-sm"
      aria-hidden="true"
    >
      <rect width="28" height="20" fill="#009B3A" />
      <path d="M14 2.4 25 10 14 17.6 3 10 14 2.4Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.1" fill="#002776" />
      <path
        d="M9.9 8.9c2.8-.5 5.6-.1 8.2 1.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg
      viewBox="0 0 28 20"
      className="mr-1.5 inline-block h-3.5 w-5 rounded-[2px] align-[-2px] shadow-sm"
      aria-hidden="true"
    >
      <rect width="28" height="20" fill="#B22234" />
      {Array.from({ length: 6 }).map((_, index) => (
        <rect key={index} y={index * 3.08 + 1.54} width="28" height="1.54" fill="#fff" />
      ))}
      <rect width="12.4" height="10.8" fill="#3C3B6E" />
      {Array.from({ length: 12 }).map((_, index) => (
        <circle
          key={index}
          cx={2 + (index % 4) * 2.7}
          cy={2 + Math.floor(index / 4) * 2.7}
          r="0.42"
          fill="#fff"
        />
      ))}
    </svg>
  );
}
