import { ArrowLeft, Check, Minus, Sparkles } from "lucide-react";
import {
  categoryLabels,
  type Language,
  type Pattern,
  type TextBlock,
} from "../data/patterns";
import { CodeComparison } from "./CodeComparison";

type PatternDetailProps = {
  pattern: Pattern;
  language: Language;
  onBack: () => void;
};

export function PatternDetail({
  pattern,
  language,
  onBack,
}: PatternDetailProps) {
  const content = pattern.content[language];
  const category = categoryLabels[language][content.category];
  const labels = {
    en: {
      back: "Back to patterns",
      problem: "Problem",
      solution: "Solution",
      analogy: "Analogy",
      when: "When to use",
      pros: "Advantages",
      cons: "Disadvantages",
      comparison: "Example",
      opinion: "My Opinion",
      readme: "View README",
      withoutCode: "View code without pattern",
      withCode: "View code with pattern",
    },
    pt: {
      back: "Voltar para padrões",
      problem: "Problema",
      solution: "Solução",
      analogy: "Analogia",
      when: "Quando usar",
      pros: "Vantagens",
      cons: "Desvantagens",
      comparison: "Exemplo",
      opinion: "Minha Opinião",
      readme: "Ver README",
      withoutCode: "Ver código sem pattern",
      withCode: "Ver código com pattern",
    },
  }[language];

  const readmeFile = `README-${pattern.id.toUpperCase()}${
    language === "pt" ? ".pt-BR" : ""
  }.md`;
  const githubBase = "https://github.com/Darlan0307/Design-Patterns";
  const quickLinks = [
    {
      label: labels.readme,
      href: `${githubBase}/blob/main/${pattern.id}/${readmeFile}`,
    },
    {
      label: labels.withoutCode,
      href: `${githubBase}/tree/main/${pattern.id}/src-without-pattern`,
    },
    {
      label: labels.withCode,
      href: `${githubBase}/tree/main/${pattern.id}/src-with-pattern`,
    },
  ];

  const sections = [
    { id: "problem", icon: "😠", label: labels.problem },
    { id: "solution", icon: "😁", label: labels.solution },
    { id: "analogy", icon: "🤔", label: labels.analogy },
    { id: "when", icon: "🧭", label: labels.when },
    { id: "opinion", icon: "💬", label: labels.opinion },
    { id: "comparison", icon: "📝", label: labels.comparison },
  ];

  return (
    <main className="mx-auto grid max-w-[96rem] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_1fr] lg:px-8 2xl:px-10">
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-graphite transition hover:text-ink"
          >
            <ArrowLeft size={16} />
            {labels.back}
          </button>
          <nav className="rounded-lg border border-line bg-surface p-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-md px-3 py-2 text-sm text-graphite transition hover:bg-paper hover:text-ink"
              >
                <span className="mr-2" aria-hidden="true">
                  {section.icon}
                </span>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <div className="min-w-0">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-graphite transition hover:border-ink hover:text-ink lg:hidden"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </button>

        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper">
              <Sparkles size={19} />
            </span>
            <span className="text-sm uppercase tracking-[0.18em] text-graphite/65">
              {category}
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
            {content.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-graphite/78">
            {content.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition hover:border-ink hover:bg-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-10">
          <TextSection
            id="problem"
            icon="😠"
            title={labels.problem}
            text={content.problem}
          />
          <TextSection
            id="solution"
            icon="😁"
            title={labels.solution}
            text={content.solution}
          />
          <TextSection
            id="analogy"
            icon="🤔"
            title={labels.analogy}
            text={content.analogy}
          />
          <TextSection
            id="when"
            icon="🧭"
            title={labels.when}
            text={content.whenToUse}
          />

          <section className="grid gap-4 md:grid-cols-2">
            <ListPanel
              title={labels.pros}
              titleIcon="✅"
              items={content.pros}
              icon="check"
            />
            <ListPanel
              title={labels.cons}
              titleIcon="⚠️"
              items={content.cons}
              icon="minus"
            />
          </section>

          <TextSection
            id="opinion"
            icon="💬"
            title={labels.opinion}
            text={content.opinion}
          />

          <section id="comparison" className="scroll-mt-28">
            <h2 className="mb-5 flex items-center gap-3 text-2xl font-semibold text-ink">
              <span aria-hidden="true">📝</span>
              {labels.comparison}
            </h2>
            <CodeComparison pattern={pattern} language={language} />
          </section>
        </div>
      </div>
    </main>
  );
}

function TextSection({
  id,
  icon,
  title,
  text,
}: {
  id: string;
  icon: string;
  title: string;
  text: TextBlock[];
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-6">
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-ink">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h2>
      <div className="mt-4 max-w-5xl space-y-3 pl-0 text-base leading-8 text-graphite/78 sm:pl-10">
        {text.map((block, index) => (
          <RichBlock key={index} block={block} />
        ))}
      </div>
    </section>
  );
}

function RichBlock({ block }: { block: TextBlock }) {
  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-clay bg-surface px-4 py-3 text-graphite/80">
        {renderInline(block.text)}
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p>{renderInline(block.text)}</p>;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-paper px-1.5 py-0.5 text-[0.9em] text-ink"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function ListPanel({
  title,
  titleIcon,
  items,
  icon,
}: {
  title: string;
  titleIcon: string;
  items: string[];
  icon: "check" | "minus";
}) {
  const Icon = icon === "check" ? Check : Minus;

  return (
    <article className="rounded-lg border border-line bg-surface p-5">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink">
        <span aria-hidden="true">{titleIcon}</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-graphite/80"
          >
            <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-paper text-ink">
              <Icon size={13} />
            </span>
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
