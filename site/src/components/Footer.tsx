import type { Language } from "../data/patterns";

type FooterProps = {
  language: Language;
};

export function Footer({ language }: FooterProps) {
  const labels = {
    en: {
      rights: "All rights reserved.",
      reference: "Reference",
    },
    pt: {
      rights: "Todos os direitos reservados.",
      reference: "Referência",
    },
  }[language];

  return (
    <footer className="mt-12 border-t border-line bg-paper">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-3 px-4 py-6 text-sm text-graphite/72 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 2xl:px-10">
        <span>© {new Date().getFullYear()} Darlan Martins</span>
        <a
          href={
            language === "pt"
              ? "https://refactoring.guru/pt-br/design-patterns"
              : "https://refactoring.guru/design-patterns"
          }
          target="_blank"
          rel="noreferrer"
          className="font-medium text-ink transition hover:text-clay"
        >
          {labels.reference}: Refactoring Guru
        </a>
      </div>
    </footer>
  );
}
