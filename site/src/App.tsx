import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GitCompareArrows,
  GraduationCap,
  Layers,
  Search,
} from "lucide-react";
import { Header } from "./components/Header";
import { PatternCard } from "./components/PatternCard";
import { PatternDetail } from "./components/PatternDetail";
import { Footer } from "./components/Footer";
import {
  categoryLabels,
  patterns,
  type Category,
  type Language,
  type TextBlock,
} from "./data/patterns";

const categories: Category[] = ["creational", "structural", "behavioral"];

function textFromBlocks(blocks: TextBlock[]) {
  return blocks
    .map((block) => {
      if (block.type === "list") {
        return block.items.join(" ");
      }

      return block.text;
    })
    .join(" ");
}

function getPatternFromPath() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return patterns.some((pattern) => pattern.id === slug) ? slug : "";
}

export default function App() {
  const [language, setLanguage] = useState<Language>("pt");
  const [selectedPattern, setSelectedPattern] = useState<string>(() =>
    getPatternFromPath(),
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onPopState = () => setSelectedPattern(getPatternFromPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const pattern = patterns.find((item) => item.id === selectedPattern);

  const filteredPatterns = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return patterns;
    }

    return patterns.filter((item) => {
      const content = item.content[language];
      return [
        content.name,
        content.summary,
        textFromBlocks(content.problem),
        textFromBlocks(content.solution),
        textFromBlocks(content.analogy),
        textFromBlocks(content.whenToUse),
        textFromBlocks(content.opinion),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [language, query]);

  function selectPattern(id: string) {
    history.pushState(null, "", `/${id}`);
    setSelectedPattern(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    history.pushState(null, document.title, "/");
    setSelectedPattern("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const labels = {
    en: {
      eyebrow: "Practical TypeScript examples",
      title: "Learn design patterns by comparing code.",
      intro:
        "A bilingual study guide for learning the most used patterns with direct explanations, simple analogies, and TypeScript examples that compare the before and after of each solution.",
      browse: "Browse patterns",
      search: "Search patterns",
      categories: "Pattern categories",
      empty:
        "This pattern is not here yet. More patterns will be added to the guide soon.",
      upcomingTitle: "More patterns are coming",
      upcomingText:
        "This guide starts with the most common patterns and will keep growing with new examples and comparisons.",
      statPatterns: "patterns",
      statLanguages: "languages",
      statFocus: "teaching-first",
      comparison: "code comparison",
      previewTitle: "Study map",
      withoutPattern: "Without pattern",
      withPattern: "With pattern",
      beforeLine: "Rules spread through conditionals",
      afterLine: "Behavior isolated behind a clear contract",
      referenceTitle: "Reference used",
      referenceText:
        "This project also uses Refactoring Guru as a reference for terminology, structure, and study flow.",
      referenceLink: "Open Refactoring Guru",
      teachingNoteTitle: "Teaching-first examples",
      teachingNote:
        "The examples in this project are focused on learning. The goal is not to represent a robust production architecture, but to explain each pattern in a simple way so the idea becomes easier to apply in real-world scenarios.",
    },
    pt: {
      eyebrow: "Exemplos práticos em TypeScript",
      title: "Aprenda design patterns comparando código.",
      intro:
        "Um guia bilíngue para estudar os padrões mais usados com explicações diretas, analogias simples e exemplos em TypeScript comparando o antes e o depois de cada solução.",
      browse: "Explorar padrões",
      search: "Buscar padrões",
      categories: "Categorias de padrões",
      empty:
        "Esse padrão ainda não está por aqui. Novos padrões serão adicionados ao guia em breve.",
      upcomingTitle: "Mais padrões estão a caminho",
      upcomingText:
        "Este guia começa pelos padrões mais usados e continuará crescendo com novos exemplos e comparações.",
      statPatterns: "padrões",
      statLanguages: "idiomas",
      statFocus: "foco didático",
      comparison: "Workspace de código",
      previewTitle: "Mapa de estudo",
      withoutPattern: "Sem pattern",
      withPattern: "Com pattern",
      beforeLine: "Regras espalhadas em condicionais",
      afterLine: "Comportamento isolado por um contrato claro",
      referenceTitle: "Referência utilizada",
      referenceText:
        "Este projeto também usa o Refactoring Guru como referência para terminologia, estrutura e fluxo de estudo.",
      referenceLink: "Abrir Refactoring Guru",
      teachingNoteTitle: "Exemplos com foco didático",
      teachingNote:
        "Os exemplos deste projeto têm foco didático. A intenção não é representar uma arquitetura robusta de produção, mas explicar o conceito de cada padrão de forma simples para que fique mais fácil aplicar a ideia em cenários reais.",
    },
  }[language];

  if (pattern) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onHome={goHome}
        />
        <PatternDetail pattern={pattern} language={language} onBack={goHome} />
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onHome={goHome}
      />

      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="texture absolute inset-0 opacity-60"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[96rem] items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20 2xl:px-10">
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-graphite/70">
                {labels.eyebrow}
              </span>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
                {labels.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite/78">
                {labels.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#patterns"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-graphite"
                >
                  {labels.browse}
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl divide-y divide-line border-y border-line bg-surface/55 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <HeroStat
                  value={patterns.length.toString()}
                  label={labels.statPatterns}
                />
                <HeroStat value="2" label={labels.statLanguages} />
                <HeroStat value="1:1" label={labels.comparison} />
              </div>
            </div>

            <HeroPreview
              language={language}
              labels={{
                previewTitle: labels.previewTitle,
                withoutPattern: labels.withoutPattern,
                withPattern: labels.withPattern,
                beforeLine: labels.beforeLine,
                afterLine: labels.afterLine,
              }}
            />
          </div>
        </section>

        <section
          id="patterns"
          className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:px-8 2xl:px-10"
        >
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-graphite/70">
                <Layers size={16} />
                {labels.categories}
              </span>
              <h2 className="text-3xl font-semibold text-ink">
                {labels.browse}
              </h2>
            </div>
            <div className="relative min-w-0 sm:w-96">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-graphite/55"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={labels.search}
                className="h-12 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-graphite/45 focus:border-ink"
              />
            </div>
          </div>

          <div className="mb-10 rounded-lg border border-line bg-surface p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-paper">
                <GraduationCap size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">
                  {labels.teachingNoteTitle}
                </h3>
                <p className="mt-2 max-w-5xl text-base leading-7 text-graphite/78">
                  {labels.teachingNote}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {categories.map((category) => {
              const items = filteredPatterns.filter(
                (item) => item.content[language].category === category,
              );

              if (items.length === 0) {
                return null;
              }

              return (
                <section key={category}>
                  <h3 className="mb-4 border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.18em] text-graphite/65">
                    {categoryLabels[language][category]}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {items.map((item) => (
                      <PatternCard
                        key={item.id}
                        pattern={item}
                        language={language}
                        onSelect={selectPattern}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {filteredPatterns.length === 0 && (
            <div className="rounded-lg border border-line bg-surface p-8 text-center text-graphite">
              {labels.empty}
            </div>
          )}

          <section className="mt-12 rounded-lg border border-dashed border-line bg-surface/70 p-6">
            <h3 className="text-xl font-semibold text-ink">
              {labels.upcomingTitle}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-graphite/75">
              {labels.upcomingText}
            </p>
          </section>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 px-3 py-4 sm:px-5">
      <div className="text-2xl font-semibold text-ink sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs leading-5 text-graphite/70 sm:text-sm">
        {label}
      </div>
    </div>
  );
}

function HeroPreview({
  language,
  labels,
}: {
  language: Language;
  labels: {
    previewTitle: string;
    withoutPattern: string;
    withPattern: string;
    beforeLine: string;
    afterLine: string;
  };
}) {
  const groupedPatterns = categories.map((category) => ({
    category,
    items: patterns.filter(
      (pattern) => pattern.content[language].category === category,
    ),
  }));

  return (
    <div className="relative hidden min-w-0 sm:block">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-clay/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/92 shadow-quiet backdrop-blur">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink">
            <GitCompareArrows size={17} />
            {labels.previewTitle}
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-clay" />
            <span className="h-2.5 w-2.5 rounded-full bg-moss" />
            <span className="h-2.5 w-2.5 rounded-full bg-ocean" />
          </div>
        </div>

        <div className="grid min-w-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-line p-4 lg:border-b-0 lg:border-r">
            <div className="space-y-4">
              {groupedPatterns.map(({ category, items }) => (
                <div key={category}>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite/55">
                    {categoryLabels[language][category]}
                  </div>
                  <div className="space-y-2">
                    {items.map((pattern) => (
                      <div
                        key={pattern.id}
                        className="flex min-w-0 items-center gap-2 border-l-2 border-line py-1 pl-3"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-moss"
                          strokeWidth={1.8}
                        />
                        <span className="truncate text-sm font-medium text-ink">
                          {pattern.content[language].name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 p-4">
            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
              <CodePreview
                title={labels.withoutPattern}
                description={labels.beforeLine}
                tone="clay"
                code={`if (type === "email") {\n  sendEmail(message);\n}\n\nif (type === "sms") {\n  sendSms(message);\n}`}
              />
              <CodePreview
                title={labels.withPattern}
                description={labels.afterLine}
                tone="moss"
                code={`const notifier = factory.create(type);\n\nnotifier.send(message);`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodePreview({
  title,
  description,
  tone,
  code,
}: {
  title: string;
  description: string;
  tone: "clay" | "moss";
  code: string;
}) {
  const toneClass = tone === "clay" ? "text-clay" : "text-moss";

  return (
    <div className="min-w-0">
      <div className={`text-sm font-semibold ${toneClass}`}>{title}</div>
      <p className="mt-1 text-xs leading-5 text-graphite/65">{description}</p>
      <pre className="mt-3 max-w-full overflow-x-auto rounded-lg border border-line bg-ink p-3 text-[11px] leading-5 text-paper shadow-inner">
        <code>{code}</code>
      </pre>
    </div>
  );
}
