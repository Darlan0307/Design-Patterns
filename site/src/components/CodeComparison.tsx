import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { GitCompare, ListTree } from "lucide-react";
import type { Language, Pattern } from "../data/patterns";
import {
  patternExamples,
  type ExampleGroup,
  type ExampleSide,
  type WorkspaceFile,
} from "../data/patternExamples";
import { CodeBlock } from "./CodeBlock";

type CodeComparisonProps = {
  pattern: Pattern;
  language: Language;
};

type Mode = ExampleSide | "compare";

export function CodeComparison({ pattern, language }: CodeComparisonProps) {
  const workspace = patternExamples[pattern.id];
  const [mode, setMode] = useState<Mode>("without");
  const [selected, setSelected] = useState<Record<ExampleSide, string>>({
    without: workspace.without.files[0].path,
    with: workspace.with.files[0].path,
  });

  const labels = {
    en: {
      without: "Without Pattern",
      with: "With Pattern",
      compare: "Compare",
      files: "Files",
      flow: "Execution flow",
      workspace: "Code workspace",
      hint: "Open each file to understand the collaboration between client code, contracts, and concrete classes.",
    },
    pt: {
      without: "Sem Pattern",
      with: "Com Pattern",
      compare: "Comparar",
      files: "Arquivos",
      flow: "Fluxo da execução",
      workspace: "Workspace de código",
      hint: "Abra cada arquivo para entender a colaboração entre código cliente, contratos e classes concretas.",
    },
  }[language];

  function selectFile(side: ExampleSide, path: string) {
    setSelected((current) => ({ ...current, [side]: path }));
  }

  return (
    <div className="max-w-full overflow-hidden rounded-lg border border-line bg-surface p-3 shadow-sm sm:p-4">
      <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-graphite/65">
            <ListTree size={16} />
            {labels.workspace}
          </div>
          <p className="max-w-3xl text-sm leading-6 text-graphite/75">
            {labels.hint}
          </p>
        </div>

        <div className="grid w-full grid-cols-3 rounded-full border border-line bg-paper p-1 text-xs sm:w-auto sm:text-sm">
          <ModeButton
            active={mode === "without"}
            onClick={() => setMode("without")}
          >
            {labels.without}
          </ModeButton>
          <ModeButton active={mode === "with"} onClick={() => setMode("with")}>
            {labels.with}
          </ModeButton>
          <ModeButton
            active={mode === "compare"}
            onClick={() => setMode("compare")}
          >
            {labels.compare}
          </ModeButton>
        </div>
      </div>

      {mode === "compare" ? (
        <div className="grid gap-4 xl:grid-cols-2">
          <WorkspacePanel
            side="without"
            group={workspace.without}
            selectedPath={selected.without}
            onSelect={selectFile}
            language={language}
            filesLabel={labels.files}
            flowLabel={labels.flow}
          />
          <WorkspacePanel
            side="with"
            group={workspace.with}
            selectedPath={selected.with}
            onSelect={selectFile}
            language={language}
            filesLabel={labels.files}
            flowLabel={labels.flow}
          />
        </div>
      ) : (
        <WorkspacePanel
          side={mode}
          group={workspace[mode]}
          selectedPath={selected[mode]}
          onSelect={selectFile}
          language={language}
          filesLabel={labels.files}
          flowLabel={labels.flow}
          wide
        />
      )}
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-2 text-center transition ${
        active
          ? "bg-ink text-paper"
          : "text-graphite hover:bg-surface hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function WorkspacePanel({
  side,
  group,
  selectedPath,
  onSelect,
  language,
  filesLabel,
  flowLabel,
  wide = false,
}: {
  side: ExampleSide;
  group: ExampleGroup;
  selectedPath: string;
  onSelect: (side: ExampleSide, path: string) => void;
  language: Language;
  filesLabel: string;
  flowLabel: string;
  wide?: boolean;
}) {
  const selectedFile = useMemo(
    () =>
      group.files.find((file) => file.path === selectedPath) ?? group.files[0],
    [group.files, selectedPath],
  );

  return (
    <article className="min-w-0 max-w-full overflow-hidden rounded-lg border border-line bg-paper/70 p-3">
      <div className="mb-4 rounded-lg bg-surface p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-ink">
              {group.title[language]}
            </h3>
            <p className="mt-1 text-sm leading-6 text-graphite/75">
              {group.summary[language]}
            </p>
          </div>
          <span
            className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] ${
              side === "with" ? "bg-moss/10 text-moss" : "bg-clay/10 text-clay"
            }`}
          >
            {side === "with" ? "pattern" : "baseline"}
          </span>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite/60">
            <GitCompare size={14} />
            {flowLabel}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {group.flow.map((step, index) => (
              <span
                key={`${step}-${index}`}
                className="inline-flex items-center gap-2"
              >
                <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-graphite">
                  {step}
                </span>
                {index < group.flow.length - 1 && (
                  <span className="text-graphite/45" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid min-w-0 gap-3 ${wide ? "lg:grid-cols-[18rem_1fr]" : ""}`}>
        <FileList
          files={group.files}
          selectedFile={selectedFile}
          onSelect={(path) => onSelect(side, path)}
          language={language}
          label={filesLabel}
        />
        <CodeViewer file={selectedFile} language={language} />
      </div>
    </article>
  );
}

function FileList({
  files,
  selectedFile,
  onSelect,
  language,
  label,
}: {
  files: WorkspaceFile[];
  selectedFile: WorkspaceFile;
  onSelect: (path: string) => void;
  language: Language;
  label: string;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-line bg-surface p-3">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite/60">
        {label}
      </div>
      <div className="grid gap-2">
        {files.map((file) => {
          const active = file.path === selectedFile.path;

          return (
            <button
              key={file.path}
              type="button"
              onClick={() => onSelect(file.path)}
              className={`min-w-0 rounded-md border px-3 py-2 text-left transition ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-graphite hover:border-ink hover:text-ink"
              }`}
            >
              <span className="block truncate text-xs font-semibold">
                {file.path}
              </span>
              <span
                className={`mt-1 block text-xs leading-5 ${
                  active ? "text-paper/75" : "text-graphite/65"
                }`}
              >
                {file.role[language]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CodeViewer({
  file,
  language,
}: {
  file: WorkspaceFile;
  language: Language;
}) {
  return (
    <div className="min-w-0 max-w-full overflow-hidden">
      <div className="mb-3 rounded-lg border border-line bg-surface p-3">
        <div className="text-sm font-semibold text-ink">{file.path}</div>
        <div className="mt-1 text-sm leading-6 text-graphite/72">
          {file.role[language]}
        </div>
      </div>
      <CodeBlock code={file.code} />
    </div>
  );
}
