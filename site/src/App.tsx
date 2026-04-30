import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Layers, Search } from "lucide-react";
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
        "A bilingual study guide focused on clear concepts, compact examples, and direct comparison between implementations with and without each pattern.",
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
      comparison: "Side-by-side code comparison",
      referenceTitle: "Reference used",
      referenceText:
        "This project also uses Refactoring Guru as a reference for terminology, structure, and study flow.",
      referenceLink: "Open Refactoring Guru",
    },
    pt: {
      eyebrow: "Exemplos práticos em TypeScript",
      title: "Aprenda design patterns comparando código.",
      intro:
        "Um guia de estudo bilingue focado em conceitos claros, exemplos compactos e comparação direta entre implementações com e sem cada padrão.",
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
      referenceTitle: "Referência utilizada",
      referenceText:
        "Este projeto também usa o Refactoring Guru como referência para terminologia, estrutura e fluxo de estudo.",
      referenceLink: "Abrir Refactoring Guru",
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
          <div className="relative mx-auto grid max-w-[96rem] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20 2xl:px-10">
            <div className="max-w-3xl">
              <span className="mb-5 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-graphite/70">
                {labels.eyebrow}
              </span>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
                {labels.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite/78">
                {labels.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#patterns"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-graphite"
                >
                  {labels.browse}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <Metric
                value={patterns.length.toString()}
                label={labels.statPatterns}
              />
              <Metric value="2" label={labels.statLanguages} />
              <Metric value="1:1" label={labels.comparison} />
            </div>
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface/90 p-5 shadow-sm backdrop-blur">
      <div className="text-3xl font-semibold text-ink">{value}</div>
      <div className="mt-1 text-sm leading-5 text-graphite/70">{label}</div>
    </div>
  );
}
