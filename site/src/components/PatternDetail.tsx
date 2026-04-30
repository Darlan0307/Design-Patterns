import { ArrowLeft, Check, Minus, Sparkles } from "lucide-react";
import { categoryLabels, type Language, type Pattern } from "../data/patterns";
import { CodeComparison } from "./CodeComparison";

type PatternDetailProps = {
  pattern: Pattern;
  language: Language;
  onBack: () => void;
};

export function PatternDetail({ pattern, language, onBack }: PatternDetailProps) {
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
      overview: "Overview",
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
      overview: "Resumo",
    },
  }[language];

  const sections = [
    { id: "problem", icon: "😠", label: labels.problem },
    { id: "solution", icon: "😁", label: labels.solution },
    { id: "analogy", icon: "🤔", label: labels.analogy },
    { id: "when", icon: "🧭", label: labels.when },
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
        </section>

        <div className="space-y-10">
          <TextSection id="problem" icon="😠" title={labels.problem} text={content.problem} />
          <TextSection id="solution" icon="😁" title={labels.solution} text={content.solution} />
          <TextSection id="analogy" icon="🤔" title={labels.analogy} text={content.analogy} />
          <TextSection id="when" icon="🧭" title={labels.when} text={[content.whenToUse]} />

          <section className="grid gap-4 md:grid-cols-2">
            <ListPanel title={labels.pros} titleIcon="✅" items={content.pros} icon="check" />
            <ListPanel title={labels.cons} titleIcon="⚠️" items={content.cons} icon="minus" />
          </section>

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
  text: string[];
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-6">
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-ink">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h2>
      <div className="mt-3 max-w-4xl space-y-3 text-base leading-8 text-graphite/78">
        {text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
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
          <li key={item} className="flex gap-3 text-sm leading-6 text-graphite/80">
            <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-paper text-ink">
              <Icon size={13} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
